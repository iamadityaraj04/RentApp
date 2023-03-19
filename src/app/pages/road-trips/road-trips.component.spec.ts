import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTripsComponent } from './road-trips.component';

describe('RoadTripsComponent', () => {
  let component: RoadTripsComponent;
  let fixture: ComponentFixture<RoadTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadTripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
