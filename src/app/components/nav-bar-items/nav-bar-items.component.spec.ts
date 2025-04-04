import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarItemsComponent } from './nav-bar-items.component';

describe('NavBarItemsComponent', () => {
  let component: NavBarItemsComponent;
  let fixture: ComponentFixture<NavBarItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
