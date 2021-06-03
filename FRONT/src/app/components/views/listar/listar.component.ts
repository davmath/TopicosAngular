import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  contador : number = 0;

  constructor() { }

  ngOnInit(): void {
    //Carregar todos os ciclos de pagamento que estão na API.
    //console.log("Testando  evento de carregamento do componente!");
  }

  incrementarContador() : void{
    this.contador++;
  }
}
