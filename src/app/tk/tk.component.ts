import {Component, inject, OnInit} from '@angular/core';
import {TkDTO} from '../utils/tk.util';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TableType} from '../utils/components.util';
import {TableComponent} from '../components/table/table.component';
import {TkService} from '../../services/tk.service';

@Component({
  selector: 'app-tk',
  imports: [CommonModule, FormsModule, TableComponent],
  templateUrl: './tk.component.html',
  standalone: true,
  styleUrl: './tk.component.css'
})
export class TkComponent implements OnInit{

  constructor(private readonly service: TkService) {}
  selectedTable: TableType = 'tk';

  tkData: TkDTO[] = [
    // {
    //   id: '1', date: '2025-04-01', controlType: 'A', evaluationOfVehicle: 'OK',
    //   ECV: 'ZA001AA', category: 'M1', brand: 'Peugeot', model: '208',
    //   technicianId: 101, price: 49.99
    // },
    // {
    //   id: '2', date: '2025-04-02', controlType: 'B', evaluationOfVehicle: 'Not OK',
    //   ECV: 'TN999BB', category: 'N1', brand: 'Renault', model: 'Clio',
    //   technicianId: 102, price: 54.50
    // },
    // Pridaj viac dát pre test
  ];

  ngOnInit() {
    this.loadKoData();
  }

  loadKoData() :void{
    this.service.getAllTkData().subscribe({
      next: (data) => {
        this.tkData = data;
      },
      error: (err) => {
        console.error('Chyba pri načítaní TK dát:', err);
      }
    });
  }

}
