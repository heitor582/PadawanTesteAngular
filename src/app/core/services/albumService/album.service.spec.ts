import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { AlbumService } from './album.service';

describe('AlbumService', () => {
  let service: AlbumService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumService],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getData function', () => {
    service = TestBed.inject(AlbumService);
    expect(service.reqAlbums).toBeTruthy();
  });
});
