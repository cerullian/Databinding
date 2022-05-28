import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  // nova emissão do evento, em que é passado o serverName e o serverContent
  // o output é semelhante ao input, mas passa os eventos para fora (para alguém os poder usar)
  @Output() serverCreated = new EventEmitter<{serverName: string; serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string; serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    // preparo o componente para fazer a emissão de um novo evento, pois se o evento é definido aqui, ele não vai ser reconhecido no server-element
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    // para emitir o evento, passando as duas variáveis que estão em two-way binding
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.bluePrintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

}
