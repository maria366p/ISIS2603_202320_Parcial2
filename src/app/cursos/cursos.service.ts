import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CursoDetail } from './cursoDetail';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

constructor(private http: HttpClient) { }

private apiUrl = environment.baseUrl;

getCursos(): Observable<CursoDetail[]> {
  return this.http.get<CursoDetail[]>(this.apiUrl);
}

getCurso(id:String): Observable<CursoDetail>{
  return this.http.get<CursoDetail>(this.apiUrl + '/'+id);
}


}
