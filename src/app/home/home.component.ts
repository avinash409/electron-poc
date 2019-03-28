import { Component, OnInit } from '@angular/core';
// import { Item } from '../../assets/model/item.schema';
// import { DBService } from '../service/db.service';
// import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // itemList: Item[];
  // constructor(private dbservice: DBService) { }
  constructor() { }

  ngOnInit() {
    // this.dbservice.getItems().subscribe( (items) => {
    //   this.itemList = items;
    // });
  }

}
