import { Component, OnInit } from '@angular/core';

@Component({
  // Element selector
  selector: 'app-servers',
  // Attribute selector
  // selector: '[app-server]',
  // Class selector
  // selector: '.app-server',
  // template: `
  //     <app-server></app-server>
  //     <app-server></app-server>
  //   `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 3000);
  }

  ngOnInit() {
  }

}
