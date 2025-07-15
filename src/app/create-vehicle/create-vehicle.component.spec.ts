import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { CreateVehicleComponent } from './create-vehicle.component';
beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [CreateVehicleComponent],
    imports: [
      ReactiveFormsModule,
      HttpClientTestingModule
    ],
    providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          params: of({ id: '1' }), // 👈 simulate a route param
          snapshot: {
            paramMap: {
              get: () => '1' // 👈 simulate param access from snapshot
            }
          }
        }
      }
    ]
  }).compileComponents();
});
