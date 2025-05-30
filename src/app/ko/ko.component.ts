import {Component, inject, OnInit} from '@angular/core';
import {KoDTO} from '../utils/ko.util';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TableComponent} from '../components/table/table.component';
import {TableType} from '../utils/components.util';
import {KoService} from '../../services/ko.service';

@Component({
  selector: 'app-ko',
  imports: [CommonModule, FormsModule, TableComponent],
  templateUrl: './ko.component.html',
  standalone: true,
  styleUrl: './ko.component.css'
})
export class KoComponent implements OnInit{

  private readonly service = inject(KoService)

  selectedTable: TableType = 'ko';

  koData: KoDTO[] = [
    // {
    //   id: "KO-20250512-001",
    //   date: "2025-05-12",
    //   controlType: "Kontrola originality",
    //   category: "M1",
    //   technicianId: "005",
    //   price: 39.90
    // },
    // {
    //   id: "KO-20250512-002",
    //   date: "2025-05-12",
    //   controlType: "Kontrola originality",
    //   category: "N1",
    //   technicianId: "006",
    //   price: 42.00
    // },
    // {
    //   id: "KO-20250513-003",
    //   date: "2025-05-13",
    //   controlType: "Kontrola originality",
    //   category: "L3e",
    //   technicianId: "004",
    //   price: 35.50
    // },
    // {
    //   id: "KO-20250513-003",
    //   date: "2025-05-13",
    //   controlType: "Kontrola originality",
    //   category: "L3e",
    //   technicianId: "005",
    //   price: 35.50
    // }
  ];

  ngOnInit() {
    this.loadKoData();
  }

  loadKoData() :void{
    this.service.getAllKoData().subscribe({
      next: (data) => {
        this.koData = data;
      },
      error: (err) => {
        console.error('Chyba pri načítaní KO dát:', err);
      }
    });
  }

}
