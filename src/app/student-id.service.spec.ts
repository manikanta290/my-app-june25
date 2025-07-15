import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudentIdService } from './student-id.service';

describe('StudentIdService', () => {
  let service: StudentIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudentIdService]
    });

   
  });

  it('should be created', () => {
    const service = TestBed.inject(StudentIdService);
    expect(service).toBeTruthy();
  });
});
