import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // o @Input() define que esta variável pode receber coisas de fora
  // o srvElement é o alias do element; passa a ser visto e lido através do nome srvElement fora do app component
  @Input('srvElement') element: {
    type?: string;
    name?: string;
    content?: string;
    // pomos os dados como facultativos para igualar um objecto vazio
  } = {};

}
