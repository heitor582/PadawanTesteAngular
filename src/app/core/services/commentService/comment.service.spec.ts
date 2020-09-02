import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { CommentsService } from './comment.service';

describe('CommentService', () => {
  let service: CommentsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentsService],
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject(
    [CommentsService],
    (service: CommentsService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should have getData function', () => {
    service = TestBed.get(CommentsService);
    expect(service.reqComments).toBeTruthy();
  });
});
