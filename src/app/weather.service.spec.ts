import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // ✅ Provide mock HttpClient
      providers: [WeatherService]
    });
  });

  it('should be created', () => {
    const service: WeatherService = TestBed.inject(WeatherService);
    expect(service).toBeTruthy();
  });
});
