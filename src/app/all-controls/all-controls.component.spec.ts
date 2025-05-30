import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllControlsComponent } from './all-controls.component';

describe('AllControlsComponent', () => {
  let component: AllControlsComponent;
  let fixture: ComponentFixture<AllControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
