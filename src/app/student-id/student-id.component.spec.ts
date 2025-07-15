import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentIdComponent } from './student-id.component';
import { FormsModule } from '@angular/forms'; // ✅ Add this
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Add this for service
import { StudentIdService } from '../student-id.service'; // adjust path as needed

describe('StudentIdComponent', () => {
  let component: StudentIdComponent;
  let fixture: ComponentFixture<StudentIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentIdComponent],
      imports: [
        FormsModule,               // ✅ Required for [(ngModel)]
        HttpClientTestingModule    // ✅ Required for StudentIdService
      ],
      providers: [StudentIdService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
