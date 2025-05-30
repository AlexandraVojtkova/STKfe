import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EkDTO} from '../app/utils/ek.util';
import {Observable} from 'rxjs';
import {TkDTO} from '../app/utils/tk.util';
import {KoDTO} from '../app/utils/ko.util';

@Injectable({
  providedIn: 'root'
})
export class VehicleService{
  constructor(private http: HttpClient) {
  }
  apiUrl = 'http://localhost:8080/api'

  getEkByVIN(vin: string): Observable<EkDTO[]>{
    return this.http.get<EkDTO[]>(`${this.apiUrl}/getEkByVIN/{vin}`);
  }
  getTkByVIN(vin: string): Observable<TkDTO[]>{
    return this.http.get<TkDTO[]>(`${this.apiUrl}/getTkByVIN/{vin}`);
  }
  getKoByVIN(vin: string): Observable<KoDTO[]>{
    return this.http.get<KoDTO[]>(`${this.apiUrl}/getKoByVIN/{vin}`);
  }
}
