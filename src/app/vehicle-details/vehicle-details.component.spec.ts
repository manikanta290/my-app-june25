import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleDetailsComponent } from './vehicle-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'; // For mocking observables
import { HttpClientTestingModule } from '@angular/common/http/testing'; // For VehiclesService if it uses HttpClient

describe('VehicleDetailsComponent', () => {
  let component: VehicleDetailsComponent;
  let fixture: ComponentFixture<VehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleDetailsComponent],
      imports: [HttpClientTestingModule], // If your VehiclesService uses HttpClient
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }) // ✅ mock route param
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
