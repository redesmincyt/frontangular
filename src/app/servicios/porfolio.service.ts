import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

    constructor(private http:HttpClient) {
  }

  obtenerDatos():Observable<any>{
    /*return this.http.get('http://backendmbc.onrender.com:8080/ver/experiencia')
    return this.http.get('http://localhost:8080/ver/experiencia')  */
    return this.http.get('./assets/data/datos.json')

  }
  onDeleteExp(expid: string):Observable<any> {
    return this.http.delete('http://backendmbc.onrender.com:8080/borrar/{expid}')
  }
}
