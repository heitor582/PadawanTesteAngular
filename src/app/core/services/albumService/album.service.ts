import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import AlbumI from '../../models/albums.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  baseUrl = `${environment.API_SERVER}/albums`;
  constructor(private http: HttpClient) {}
  reqAlbums(filtro?:string): Observable<AlbumI[]> {
    if(filtro === undefined) return this.http.get<AlbumI[]>(this.baseUrl);
    return this.http.get<AlbumI[]>(this.baseUrl + `?${filtro}`);
  }
}
