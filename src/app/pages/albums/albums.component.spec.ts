import { AlbumService } from './../../core/services/albumService/album.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsComponent } from './albums.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumsComponent],
      imports: [HttpClientTestingModule],
      providers: [AlbumService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
  });
});
