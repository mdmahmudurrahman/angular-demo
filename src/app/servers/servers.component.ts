import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Initial name';
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    console.log(this.serverCreationStatus);
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created! Name is "+ this.serverName;
    console.log(this.serverCreationStatus);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

}
