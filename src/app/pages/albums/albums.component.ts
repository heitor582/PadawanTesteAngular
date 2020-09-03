import { Component, OnInit, ViewChild } from '@angular/core';
import { AlbumService } from '../../core/services/albumService/album.service';
import AlbumI from '../../core/models/albums.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'id', 'title'];
  dataSource: MatTableDataSource<AlbumI>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this._getData();
  }
  _getData(): void {
    this.albumService.reqAlbums().subscribe((albums) => {
      this.dataSource = new MatTableDataSource<AlbumI>(albums);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
