import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoComponent } from './ko.component';

describe('KoComponent', () => {
  let component: KoComponent;
  let fixture: ComponentFixture<KoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
