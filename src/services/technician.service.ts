import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CreateTechnicianDTO, TechnicianDTO} from '../app/utils/technician.util';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService{
  constructor(private http: HttpClient) {
  }
  apiUrl = 'http://localhost:8080/api'

  getAllTechnicians():Observable<CreateTechnicianDTO[]>{
    return this.http.get<CreateTechnicianDTO[]>(`${this.apiUrl}/getAllTechnicians`)
  }
  searchTechnicians(term: string): Observable<TechnicianDTO[]> {
    return this.http.get<TechnicianDTO[]>(`${this.apiUrl}/search/${term}`);
  }
  getTechnicianById(id: number): Observable<CreateTechnicianDTO> {
    return this.http.get<CreateTechnicianDTO>(`${this.apiUrl}/${id}`);
  }
  createTechnician(dto: CreateTechnicianDTO): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/createTechnician`, dto);
  }
  updateTechnician(id: number, dto: CreateTechnicianDTO): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/update/${id}`, dto);
  }
  deleteTechnician(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }


  uploadEkFile(file: FormData): Observable<string> {
    return this.http.post(`${this.apiUrl}/uploadData/ek`, file, { responseType: 'text' });
  }
  uploadTkFile(file: FormData): Observable<string> {
    return this.http.post(`${this.apiUrl}/uploadData/tk`, file, { responseType: 'text' });
  }
  uploadKoFile(file: FormData): Observable<string> {
    return this.http.post(`${this.apiUrl}/uploadData/ko`, file, { responseType: 'text' });
  }
}
