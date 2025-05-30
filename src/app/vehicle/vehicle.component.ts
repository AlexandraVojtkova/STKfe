import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {VehicleDTO} from '../utils/vehicle.util';
import {EkDTO} from '../utils/ek.util';
import {TkDTO} from '../utils/tk.util';
import {KoDTO} from '../utils/ko.util';
import {EkService} from '../../services/ek.service';
import {VehicleService} from '../../services/vehicle.service';
import {forkJoin} from 'rxjs';
import {TableComponent} from '../components/table/table.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-vehicle',
  imports: [
    FormsModule,
    TableComponent,
    NgIf
  ],
  templateUrl: './vehicle.component.html',
  standalone: true,
  styleUrl: './vehicle.component.css'
})
export class VehicleComponent {

  private readonly vehicleService = inject(VehicleService);

  vinFilter: string = '';
  filteredVehicles: VehicleDTO[] = [];

  ekFilteredVehicles: EkDTO[] = [];
  tkFilteredVehicles: TkDTO[] = [];
  koFilteredVehicles: KoDTO[] = [];

  getEkFilteredVehicles(vin: string): void{
    this.vehicleService.getEkByVIN(vin).subscribe({
     next: (data) => {
       this.ekFilteredVehicles = data;
       console.warn("Načítali sa dáta o EK")
     },
     error: err => {
       console.warn("Neuspešné načítanie EK dát", err)
     }
   })
  }

  getTkFilteredVehicles(vin: string): void{
    this.vehicleService.getTkByVIN(vin).subscribe({
      next: (data) => {
        this.tkFilteredVehicles = data;
        console.warn("Načítali sa dáta o TK")
      },
      error: err => {
        console.warn("Neuspešné načítanie TK dát", err)
      }
    })
  }

  getKoFilteredVehicles(vin: string): void{
    this.vehicleService.getKoByVIN(vin).subscribe({
      next: (data) => {
        this.koFilteredVehicles = data;
        console.warn("Načítali sa dáta o KO")
      },
      error: err => {
        console.warn("Neuspešné načítanie KO dát", err)
      }
    })
  }

  search(vin: string) {
    forkJoin({
      ek: this.vehicleService.getEkByVIN(vin),
      tk: this.vehicleService.getTkByVIN(vin),
      ko: this.vehicleService.getKoByVIN(vin)
    }).subscribe({
      next: ({ek, tk, ko}) => {
        if (ek.length === 0 && tk.length === 0 && ko.length === 0) {
          console.warn("Pre VIN neboli nájdené žiadne záznamy.");
          this.filteredVehicles = [];
          return;
        }

        const ref = ek[0] || tk[0] || ko[0];

        const vehicle: VehicleDTO = {
          VINID: vin,
          ECV: ref.ECV,
          model: ref.model,
          brand: ref.brand,
          ekList: ek,
          tkList: tk,
          koList: ko
        };

        this.filteredVehicles = [vehicle];
        console.warn("Dáta úspešne načítané:", this.filteredVehicles);
      },
      error: (err) => {
        console.error("Chyba pri načítavaní dát:", err);
        this.filteredVehicles = [];
      }
    });
  }
}
