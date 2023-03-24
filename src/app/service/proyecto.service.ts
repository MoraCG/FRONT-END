import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
//<<<<<<< HEAD
//  expURL = 'https://backend-mgb.herokuapp.com/explab/';
//=======
//  URL = environment.URL + 'explab/';
//>>>>>>> dbccedd5c18384aa757cbb7ab7d9f7f3bc0e7672

  URL = 'http://localhost:8080/proyectos/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.URL + 'traer');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URL + `${id}`);
  } 

  public save(experiencia: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', experiencia);
  }

  public update(id: number, experiencia: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
}