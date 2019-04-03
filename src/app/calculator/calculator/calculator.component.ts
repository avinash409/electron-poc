import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
import * as $ from "jquery";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  length: number;
  height: number;
  result: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  calculate() {
    const url = 'http://localhost:8080/getFormula';
    this.http.post(url, {height: this.height}).subscribe(
      data => {
        this.result = data;
      }, error => {
        const exp = error.error.text;
        const subExp = exp.replace(/length/g, this.length);
        this.result = eval(subExp);
      }
    );
  }

}
