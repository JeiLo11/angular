import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mostrar=true;

  frase: any = {
    mensaje:'Haz arder tu corazon',
    autor:'Kyojuro Rengoku'
  };

  personajes: string[] = ['Spiderman','Mob','Kazutora'] ;

  constructor() { }

  ngOnInit(): void {
  }

}
