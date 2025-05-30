import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkComponent } from './ek.component';

describe('EkComponent', () => {
  let component: EkComponent;
  let fixture: ComponentFixture<EkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
