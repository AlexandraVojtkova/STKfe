import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TkComponent } from './tk.component';

describe('TkComponent', () => {
  let component: TkComponent;
  let fixture: ComponentFixture<TkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
