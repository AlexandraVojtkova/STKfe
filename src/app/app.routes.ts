import { Routes } from '@angular/router';
import {AllControlsComponent} from './all-controls/all-controls.component';
import {EkComponent} from './ek/ek.component';
import {TkComponent} from './tk/tk.component';
import {KoComponent} from './ko/ko.component';
import {VehicleComponent} from './vehicle/vehicle.component';
import {ImportTechnicianComponent} from './components/import-technician/import-technician.component';
import {ImportMaterialsComponent} from './components/import-materials/import-materials.component';
import {TechnicianComponent} from './technician/technician.component';

export const routes: Routes = [
  {path: '', component: AllControlsComponent},
  {path: 'all-controls', component: AllControlsComponent},
  {path: 'ek', component: EkComponent},
  {path: 'tk', component: TkComponent},
  {path: 'ko', component: KoComponent},
  {path: 'vehicle', component: VehicleComponent},
  {path: 'technician', component: TechnicianComponent},
  {path: 'components/import-technician', component: ImportTechnicianComponent},
  {path: 'components/import-materials', component: ImportMaterialsComponent},
];
