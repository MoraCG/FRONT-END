import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'https://back-end-production-602a.up.railway.app/estudios'

  constructor(private http: HttpClient) { }

  getEstudio() {
    return this.http.get<Educacion[]>(this.URL + '/traer');
  }
  createEstudio(estudio: Educacion) {
    return this.http.post<Educacion>(this.URL + '/crear', estudio);
  }
  getEstudioId(id: number) {
    return this.http.get<Educacion>(this.URL + "/" + id);
  }
  updateEstudio(estudio: Educacion) {
    return this.http.put<Educacion>(this.URL + "/editar/" + estudio.id, estudio);
  }
  deleteEstudio(estudio: Educacion) {
    return this.http.delete<Educacion>(this.URL + "/borrar/" + estudio.id);
  }
}