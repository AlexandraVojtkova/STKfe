import {Component, inject} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CreateTechnicianDTO} from '../../utils/technician.util';
import {TechnicianService} from '../../../services/technician.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-import-technician',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './import-technician.component.html',
  standalone: true,
  styleUrl: './import-technician.component.css'
})
export class ImportTechnicianComponent {

  private readonly service = inject(TechnicianService)

  newTechnician = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    identificators: new FormArray([
      new FormGroup({
        identificator: new FormControl(''),
        controlType: new FormControl('EK')
      }),
      new FormGroup({
        identificator: new FormControl(''),
        controlType: new FormControl('TK')
      }),
      new FormGroup({
        identificator: new FormControl(''),
        controlType: new FormControl('KO')
      })
    ])
  })

  get identificators(): FormArray {
    return this.newTechnician.get('identificators') as FormArray;
  }

  onSubmit(): void {
    if (this.newTechnician.valid) {
      const technicianData: CreateTechnicianDTO = {
        name: this.newTechnician.value.name ?? '',
        lastName: this.newTechnician.value.lastName ?? '',
        identificators: (this.newTechnician.value.identificators?? []).map((i: any, index: number) => ({
          identificator: i.identificator ?? null,
          controlType: i.controlType ?? (index === 1 ? 'EK' : index === 2 ? 'KO' : 'TK')
        }))
      };

      this.service.createTechnician(technicianData).subscribe({
        next: () => {
          console.log('Technik bol úspešne uložený.');
          alert('Technik bol vložený');
          this.newTechnician.reset();
        },
        error: (err) => {
          console.error('Chyba pri ukladaní technika', err);
        }
      });
    } else {
      console.warn('Formulár nie je validný');
    }
  }


}
