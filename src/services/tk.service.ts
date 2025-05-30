import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {TkDTO} from '../app/utils/tk.util';

@Injectable({
  providedIn: 'root'
})
export class TkService{
  constructor(private http: HttpClient) {
  }
  apiUrl = 'http://localhost:8080/api'

  getAllTkData(): Observable<TkDTO[]>{
    return this.http.get<TkDTO[]>(`${this.apiUrl}/getAllTk`);
  }
  getTkDate(date: Date): Observable<TkDTO[]>{
    return this.http.get<TkDTO[]>(`${this.apiUrl}/getTk/date/{date}`);
  }
  getEkControlType(controlType: string): Observable<TkDTO[]>{
    return this.http.get<TkDTO[]>(`${this.apiUrl}/getTk/controlType/{controlType}`);
  }
  getEkEvaluationOfVehicle(evaluationOfVehicle: string): Observable<TkDTO[]>{
    return this.http.get<TkDTO[]>(`${this.apiUrl}/getTk/evaluationOfVehicle/{evaluationOfVehicle}`);
  }
  getEkECV(ECV: string): Observable<TkDTO[]>{
    return this.http.get<TkDTO[]>(`${this.apiUrl}/getTk/ECV/{ECV}`);
  }
  getEkCategory(category: string): Observable<TkDTO[]>{
    return this.http.get<TkDTO[]>(`${this.apiUrl}/getTk/category/{category}`);
  }
  getEkBrand(brand: string): Observable<TkDTO[]>{
    return this.http.get<TkDTO[]>(`${this.apiUrl}/getTk/brand/{brand}`);
  }
  getEkModel(model: string): Observable<TkDTO[]>{
    return this.http.get<TkDTO[]>(`${this.apiUrl}/getTk/model/{model}`);
  }
  getEkTechnicianId(technicianId: string): Observable<TkDTO[]>{
    return this.http.get<TkDTO[]>(`${this.apiUrl}/getTk/technicianId/{technicianId}`);
  }
  createTk(tkDTO: TkDTO): Observable<TkDTO>{
    return this.http.post<TkDTO>(`${this.apiUrl}/putTk/{technicianId}`, tkDTO);
  }

}
