import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements: {
    type: string;
    name: string;
    content: string;
    // o serverElements passa a ser igual ao que está em baixo
  }[] = [{type: 'server', name: 'Server Test', content: 'Just a test!'}];

  // consegue apanhar a função graças ao output incluído no componente ts do cockpit
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBluePrintCreated(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  
}
