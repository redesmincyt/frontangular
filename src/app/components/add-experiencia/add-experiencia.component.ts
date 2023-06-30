import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Exp } from 'src/app/Exp';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {

  @Output() onAddExp: EventEmitter<Exp> = new EventEmitter();

  explogo: string = "";
  empresa: string = "";
  puesto: string = "";
  detalle: string = "";
  periodo: string = ""; 

  constructor(private datosPorfolio:PorfolioService) {}

  ngOnInit(): void {}

  addReg(): void {

    const {explogo,empresa,puesto,detalle,periodo} = this
    const newExp = {explogo,empresa,puesto,detalle,periodo}

    this.onAddExp.emit(newExp);
    /*console.log(newExp);*/
  }
  
}
