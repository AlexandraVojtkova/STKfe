import {Component, inject, OnInit} from '@angular/core';
import {TableType} from '../utils/components.util';
import {EkDTO} from '../utils/ek.util';
import {KoDTO} from '../utils/ko.util';
import {TkDTO} from '../utils/tk.util';
import {TableComponent} from '../components/table/table.component';
import {NgIf} from '@angular/common';
import {TkService} from '../../services/tk.service';
import {EkService} from '../../services/ek.service';
import {KoService} from '../../services/ko.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-all-controls',
  imports: [TableComponent, NgIf],
  templateUrl: './all-controls.component.html',
  standalone: true,
  styleUrl: './all-controls.component.css'
})
export class AllControlsComponent implements OnInit{
  private readonly tkService = inject(TkService)
  private readonly ekService = inject(EkService)
  private readonly koService = inject(KoService)

  selectedTable: TableType = 'all';

  allData: (TkDTO | EkDTO | KoDTO)[] = [];
  ekData: TkDTO[] = [];
  tkData: TkDTO[] = [];
  koData: KoDTO[] = [];

  ngOnInit() {
    this.loadAllData();
  }

  loadAllData() {
    forkJoin({
      ek: this.ekService.getAllEkData(),
      tk: this.tkService.getAllTkData(),
      ko: this.koService.getAllKoData()
    }).subscribe({
      next: (result) => {
        this.ekData = result.ek;
        this.tkData = result.tk;
        this.koData = result.ko;

        this.allData = [
          ...this.ekData,
          ...this.tkData,
          ...this.koData
        ];

        // zoradíme podľa dátumu zostupne (najnovšie hore)
        this.allData.sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA;  // zostupne podľa dátumu
        });

        // console.log(this.allData);
      },
      error: (err) => {
        console.error('Chyba pri načítaní dát:', err);
      }
    });
  }

}
