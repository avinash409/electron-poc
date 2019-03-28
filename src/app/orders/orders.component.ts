import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Orders } from '../_models/orders';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Error } from '../_models/error';
import { OmPopulateOrderDataService } from '../service/ompopulateorderdata.service';
import { saveAs } from 'file-saver';
import * as $ from "jquery";

declare function saveData(filename, filedata): any;
declare function readData(filename): any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  ordersForm: FormGroup;
  savedOrdersForm: FormGroup;
  loading = false;
  returnUrl: string;
  submitted = false;
  error = '';
  allOrdersByUser: Orders[];
  showdata = [];
  getfilename: string;
  localstoragedata = [];
  
 
  constructor(private omDataService: OmPopulateOrderDataService,
    private route: ActivatedRoute, 
    private router: Router,
    private formBuilder: FormBuilder ) { }

  ngOnInit() {

    this.ordersForm = this.formBuilder.group({
      employeeid: ['', Validators.required]
    });

  $.getScript('../../src/assets/js/filesystem.js');
        
  }

  ngAfterViewInit() {
    //Copy in all the js code from the script.js. Typescript will complain but it works just fine
    
    
 }

  // convenience getter for easy access to form fields
  get f() { return this.ordersForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ordersForm.invalid) {
      return;
    }

  this.loading = true;
  this.omDataService.getOmOrderDataByEmployeeId(this.f.employeeid.value)
    .subscribe(
      (data: Orders[]) => {
        this.allOrdersByUser = data;
        this.loading = false;
        
      },
      error => {
        this.error = error;
        this.loading = false;
      });
    }

    SaveOrders() {
     // this.submitted = false;
      //this.showdata = this.allOrdersByUser;
      this.getfilename = this.f.employeeid.value + '.json'

      const blob = new Blob([JSON.stringify(this.allOrdersByUser)], {type : 'application/json'});
      saveAs(blob, this.getfilename);
      

    }

    SaveToMyDocs() {
     
      this.getfilename = this.f.employeeid.value + '.json'
      var theJSONdata = JSON.stringify(this.allOrdersByUser); // conver the object to a string
      
      saveData(this.getfilename, theJSONdata);


    }

    getFromMyDocs(){
      
      this.getfilename = this.f.employeeid.value + '.json'
      var data = readData(this.getfilename);
      this.allOrdersByUser =  JSON.parse(data); 
    }

    SaveLocalStorage(){
      this.getfilename = this.f.employeeid.value + '.json'
      var theJSONdata = JSON.stringify(this.allOrdersByUser); // conver the object to a string
      window.localStorage.setItem(this.getfilename, theJSONdata)


      
      
    }

    getLocalStorage(){
      this.getfilename = this.f.employeeid.value + '.json'
      this.allOrdersByUser = JSON.parse(window.localStorage.getItem(this.getfilename));
    }

    ClearData(){
      this.allOrdersByUser = null;
    }


}
