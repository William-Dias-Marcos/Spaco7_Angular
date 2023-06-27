import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationOfServicesComponent } from './presentation-of-services.component';

describe('PresentationOfServicesComponent', () => {
  let component: PresentationOfServicesComponent;
  let fixture: ComponentFixture<PresentationOfServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentationOfServicesComponent]
    });
    fixture = TestBed.createComponent(PresentationOfServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
