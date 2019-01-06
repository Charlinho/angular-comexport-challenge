import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HttpParams } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

const environment = {
  production: false,
  apiUrl: 'https://swapi.co/api',
};

describe('Api Service', () => {
  let service: ApiService;
  let mockReq: TestRequest;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ]
    });

    service = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it('deve fazer uma chamada http utilizando o método GET', (done) => {
    service.get<Observable<any>>
    ('people').subscribe((data: any) => {
      expect(data.name).toEqual('name');
      done();
    });

    mockReq = httpMock.expectOne(data => data.url === `${environment.apiUrl}/people`);

    expect(mockReq.request.method).toBe('GET');
    expect(mockReq.request.responseType).toEqual('json');

    mockReq.flush({
      name: 'name',
    });
  });

  it('deve fazer uma chamada http utilizando o método POST', (done) => {
    const params = new HttpParams().set('name', name);

    service.post<Observable<any>>
    ('people', params).subscribe((data: any) => {
      expect(data.name).toEqual('name');
      done();
    });

    mockReq = httpMock.expectOne(data => data.url === `${environment.apiUrl}/people`);

    expect(mockReq.request.method).toBe('POST');
    expect(mockReq.request.responseType).toEqual('json');

    mockReq.flush({
      name: 'name',
    });
  });
});
