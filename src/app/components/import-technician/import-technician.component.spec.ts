import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTechnicianComponent } from './import-technician.component';

describe('ImportTechnicianComponent', () => {
  let component: ImportTechnicianComponent;
  let fixture: ComponentFixture<ImportTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportTechnicianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
