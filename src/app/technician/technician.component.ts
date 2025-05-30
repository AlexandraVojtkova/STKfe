import {Component, inject, OnInit} from '@angular/core';
import {ButtonComponent} from '../components/button/button.component';
import {TechnicianService} from '../../services/technician.service';
import {CreateTechnicianDTO} from '../utils/technician.util';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-technician',
  imports: [
    ButtonComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './technician.component.html',
  standalone: true,
  styleUrl: './technician.component.css'
})
export class TechnicianComponent implements OnInit{
  private readonly service = inject(TechnicianService)

  technicianData: CreateTechnicianDTO[] = [];

  currentPage = 1;
  pageSize = 10;
  totalPages = 1;

  ngOnInit() {
    this.loadAllTechnicians();
  }

  loadAllTechnicians(): void {
    this.service.getAllTechnicians().subscribe({
      next: (data: CreateTechnicianDTO[]) => {
        this.technicianData = data;
        console.warn("Technici nacitany", this.technicianData)
      },
      error: (err) => {
        console.error('Chyba pri načítaní technikov:', err);
      }
    });
  }

  updateTechnician(technician: CreateTechnicianDTO & { id?: number }) {
    console.log("technik pri upload", technician)
    if (!technician.id) {
      console.error("Technician ID chýba!");
      return;
    }

    this.service.updateTechnician(technician.id, technician).subscribe({
      next: () => {
        alert("Technik aktualizovaný.");
      },
      error: (err) => {
        console.error("Chyba pri aktualizácii technika:", err);
        alert("Nepodarilo sa aktualizovať technika.");
      }
    });
  }

  deleteTechnician(technician: CreateTechnicianDTO & { id?: number }){
    console.log("technik pri delete", technician)
    if (!technician.id) {
      console.error("Technician ID chýba!");
      return;
    }
    this.service.deleteTechnician(technician.id).subscribe({
      next: () => {
        alert("Technik vymazaný.");
        this.loadAllTechnicians();
      },
      error: (err) => {
        console.error("Chyba pri mazani technika:", err);
        alert("Nepodarilo sa vymazat technika.");
      }
    })
  }

}
