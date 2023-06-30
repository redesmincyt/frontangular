import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { AddExperienciaComponent } from 'src/app/components/add-experiencia/add-experiencia.component';
import { Exp } from 'src/app/Exp';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaList:any;
  @Output() onDeleteExp: EventEmitter<String> = new EventEmitter();
  
  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(  data =>{
      this.experienciaList=data;
      
    });
  }
  
  onDelete(expid: string): void {
    this.datosPorfolio.onDeleteExp(expid).subscribe();
  }
  
  addExp(newExp: Exp): void {
    this.datosPorfolio.onAddExp(newExp).subscribe();
    
  }
}
