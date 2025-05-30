import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {EkDTO} from '../app/utils/ek.util';

@Injectable({
  providedIn: 'root'
})
export class EkService{
  constructor(private http: HttpClient) {
  }
  apiUrl = 'http://localhost:8080/api'

  getAllEkData(): Observable<EkDTO[]>{
    return this.http.get<EkDTO[]>(`${this.apiUrl}/getAllEk`);
  }
  getEkDate(date: Date): Observable<EkDTO[]>{
    return this.http.get<EkDTO[]>(`${this.apiUrl}/getEk/date/{date}`);
  }
  getEkControlType(controlType: string): Observable<EkDTO[]>{
    return this.http.get<EkDTO[]>(`${this.apiUrl}/getEk/controlType/{controlType}`);
  }
  getEkEvaluationOfVehicle(evaluationOfVehicle: string): Observable<EkDTO[]>{
    return this.http.get<EkDTO[]>(`${this.apiUrl}/getEk/evaluationOfVehicle/{evaluationOfVehicle}`);
  }
  getEkECV(ECV: string): Observable<EkDTO[]>{
    return this.http.get<EkDTO[]>(`${this.apiUrl}/getEk/ECV/{ECV}`);
  }
  getEkCategory(category: string): Observable<EkDTO[]>{
    return this.http.get<EkDTO[]>(`${this.apiUrl}/getEk/category/{category}`);
  }
  getEkBrand(brand: string): Observable<EkDTO[]>{
    return this.http.get<EkDTO[]>(`${this.apiUrl}/getEk/brand/{brand}`);
  }
  getEkModel(model: string): Observable<EkDTO[]>{
    return this.http.get<EkDTO[]>(`${this.apiUrl}/getEk/model/{model}`);
  }
  getEkSystemOfEmmission(systemOfEmmission: string): Observable<EkDTO[]>{
    return this.http.get<EkDTO[]>(`${this.apiUrl}/getEk/systemOfEmmission/{systemOfEmmission}`);
  }
  getEkTechnicianId(technicianId: string): Observable<EkDTO[]>{
    return this.http.get<EkDTO[]>(`${this.apiUrl}/getEk/technicianId/{technicianId}`);
  }
  createEk(ekDTO: EkDTO): Observable<EkDTO>{
    return this.http.post<EkDTO>(`${this.apiUrl}/putEk`, ekDTO);
  }


}
