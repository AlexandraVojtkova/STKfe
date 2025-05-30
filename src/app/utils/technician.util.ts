import {TkDTO} from './tk.util';
import {KoDTO} from './ko.util';
import {EkDTO} from './ek.util';

export interface TechnicianDTO{
  id?: number;
  name: string;
  lastName: string;
  ekList: EkDTO[];
  tkList: TkDTO[];
  koList: KoDTO[];
}

export interface CreateTechnicianDTO{
  id?: number;
  name: string;
  lastName: string;
  identificators: TechnicianControlIdentificatorsDTO[];
}

export interface TechnicianControlIdentificatorsDTO{
  identificator: string;
  controlType: 'EK' | 'TK' | 'KO' ;
}
