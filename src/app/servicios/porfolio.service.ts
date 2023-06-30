import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exp } from 'src/app/Exp';

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
    console.log(expid);
    return this.http.delete("http://backendmbc.onrender.com:8080/borrar/"+ expid)
  }

  onAddExp(newExp: Exp):Observable<any> {
    console.log(newExp);
    return this.http.post('http://backendmbc.onrender.com:8080/new/experiencia', newExp)
  }
}
