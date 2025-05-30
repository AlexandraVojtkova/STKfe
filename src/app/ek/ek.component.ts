import {Component, inject, OnInit} from '@angular/core';
import {EkDTO} from '../utils/ek.util';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TableType} from '../utils/components.util';
import {TableComponent} from '../components/table/table.component';
import {EkService} from '../../services/ek.service';


@Component({
  selector: 'app-ek',
  imports: [CommonModule, FormsModule, TableComponent],
  templateUrl: './ek.component.html',
  standalone: true,
  styleUrl: './ek.component.css'
})
export class EkComponent implements OnInit{

  private readonly service = inject(EkService)

  selectedTable: TableType = 'ek';

  ekData: EkDTO[] = [];

  ngOnInit(): void {
    this.loadEkData();
  }

  loadEkData(): void {
    this.service.getAllEkData().subscribe({
      next: (data) => {
        this.ekData = data;
      },
      error: (err) => {
        console.error('Chyba pri načítaní EK dát:', err);
      }
    });
  }


}
