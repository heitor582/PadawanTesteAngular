import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../core/services/albumService/album.service';
import AlbumI from '../../core/models/albums.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: AlbumI[];
  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.reqAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }
}
