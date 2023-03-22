import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
//  private apiUrlBase = environment.apiBaseURL;


  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('.\assets\data\data.json')
//    return this.http.get('http://localhost:8080')
//    return this.http.get(this.apiUrlBase)
  }
}
