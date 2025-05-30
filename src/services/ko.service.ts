import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {KoDTO} from '../app/utils/ko.util';

@Injectable({
  providedIn: 'root'
})
export class KoService{
  constructor(private http: HttpClient) {
  }
  apiUrl = 'http://localhost:8080/api'


  getAllKoData(): Observable<KoDTO[]>{
    return this.http.get<KoDTO[]>(`${this.apiUrl}/getAllKo`)
  }
  getKoDate(date: Date): Observable<KoDTO[]>{
    return this.http.get<KoDTO[]>(`${this.apiUrl}/getKo/date/{date}`);
  }
  getKoControlType(controlType: string): Observable<KoDTO[]>{
    return this.http.get<KoDTO[]>(`${this.apiUrl}/getKo/controlType/{controlType}`);
  }
  getKoCategory(category: string): Observable<KoDTO[]>{
    return this.http.get<KoDTO[]>(`${this.apiUrl}/getKo/category/{category}`);
  }
  getKoTechnicianId(technicianId: string): Observable<KoDTO[]>{
    return this.http.get<KoDTO[]>(`${this.apiUrl}/getEk/technicianId/{technicianId}`);
  }
  createKo(koDTO: KoDTO): Observable<KoDTO>{
    return this.http.post<KoDTO>(`${this.apiUrl}/putKo/{technicianId}`, koDTO);
  }

}
