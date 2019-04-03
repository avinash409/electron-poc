import { Component, OnInit } from '@angular/core';
import { NetworkStatus } from '../service/network-status.service';
import { Configuration } from '../app.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  networkstatusImg: string;
  constructor(private networkStatus: NetworkStatus, private config: Configuration) {
    setInterval( () => {
    //   networkStatus.checkStatus()
    // .subscribe(
    //   data => {
    //     console.log(data);
    //     this.networkstatusImg = 'assets/logo/online.png';
    //   },
    //   error => {
    //     console.log(error);
    //     this.networkstatusImg = 'assets/logo/offline.png';
    //   }
    // );
    }, 5000);
  }

  ngOnInit() {

  }
}
