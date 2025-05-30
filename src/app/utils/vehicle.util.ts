import {EkDTO} from './ek.util';
import {TkDTO} from './tk.util';
import {KoDTO} from './ko.util';

export interface VehicleDTO{
  VINID: string;
  ECV: string;
  model: string;
  brand: string;
  ekList: EkDTO[];
  tkList: TkDTO[];
  koList: KoDTO[];
}
