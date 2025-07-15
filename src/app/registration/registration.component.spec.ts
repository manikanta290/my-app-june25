import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'; // ✅ Import this
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ For HttpClient
import { RegistrationComponent } from './registration.component';
import { RegistrationService } from '../registration.service'; // Update path as needed

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [
        ReactiveFormsModule,     // ✅ Required for formGroup
        HttpClientTestingModule  // ✅ Required for HttpClient
      ],
      providers: [RegistrationService],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
