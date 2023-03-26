import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http:HttpClient) {}

  URL = 'http://back-end-production-602a.up.railway.app/proyectos'

  getProyecto(){
    return this.http.get<Proyecto[]>(this.URL+'/traer');
}
createProyecto(proyecto:Proyecto){
  return this.http.post<Proyecto>(this.URL+'/crear',proyecto);
}
getProyectoId(id:number){
  return this.http.get<Proyecto>(this.URL+"/"+id);
}
updateProyecto(proyecto:Proyecto){
  return this.http.put<Proyecto>(this.URL+"/editar/"+proyecto.id,proyecto);
}
deleteProyecto(proyecto:Proyecto){
  return this.http.delete<Proyecto>(this.URL+"/borrar/"+proyecto.id);
}
}
