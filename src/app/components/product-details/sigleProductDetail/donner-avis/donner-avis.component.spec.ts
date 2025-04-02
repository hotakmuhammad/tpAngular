import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnerAvisComponent } from './donner-avis.component';

describe('DonnerAvisComponent', () => {
  let component: DonnerAvisComponent;
  let fixture: ComponentFixture<DonnerAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonnerAvisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonnerAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
