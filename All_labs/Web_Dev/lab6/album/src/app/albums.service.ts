import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Album {
  id: number;
  title: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'localhost:8000'; // URL для альбомов

  private albums: Album[] = [];
  private nextAlbumId = 1;

  private albumPhotos: { [albumId: number]: Photo[] } = {};
  private nextPhotoId: { [albumId: number]: number } = {};

  constructor(private http: HttpClient) {
    // Вместо загрузки из жестко закодированного массива, мы можем сразу попытаться загрузить альбомы с сервера.
    this.fetchAlbums().subscribe();
  }

  // Метод, который делает HTTP-запрос для загрузки альбомов
  fetchAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl).pipe(
      tap((data: Album[]) => {
        // Сохраняем полученные альбомы в локальном массиве
        this.albums = data;
        if (data.length > 0) {
          // Определяем следующий доступный ID
          this.nextAlbumId = Math.max(...data.map(a => a.id)) + 1;
        } else {
          this.nextAlbumId = 1;
        }
        console.log('Загруженные альбомы:', this.albums);
      })
    );
  }

  // Если нужно вернуть альбомы как Observable
  getAlbums(): Observable<Album[]> {
    // Если альбомы уже загружены, возвращаем их; иначе можно вызвать fetchAlbums()
    if (this.albums.length > 0) {
      return of(this.albums);
    } else {
      return this.fetchAlbums();
    }
  }

  getAlbum(id: number): Observable<Album | undefined> {
    return of(this.albums.find(a => a.id === id));
  }

  createAlbum(album: Partial<Album>): Observable<Album> {
    const newAlbum: Album = {
      id: this.nextAlbumId++,
      title: album.title || 'Новый альбом'
    };
    this.albums.push(newAlbum);
    return of(newAlbum);
  }

  updateAlbum(updatedAlbum: Album): Observable<Album | undefined> {
    const index = this.albums.findIndex(a => a.id === updatedAlbum.id);
    if (index !== -1) {
      this.albums[index] = updatedAlbum;
      return of(updatedAlbum);
    }
    return of(undefined);
  }

  deleteAlbum(id: number): Observable<boolean> {
    const index = this.albums.findIndex(a => a.id === id);
    if (index !== -1) {
      this.albums.splice(index, 1);
      delete this.albumPhotos[id];
      delete this.nextPhotoId[id];
      return of(true);
    }
    return of(false);
  }

  getPhotosForAlbum(albumId: number): Observable<Photo[]> {
    return of(this.albumPhotos[albumId] || []);
  }

  addPhotoToAlbum(albumId: number, photoUrl: string): Observable<Photo> {
    if (!this.nextPhotoId[albumId]) {
      this.nextPhotoId[albumId] = 1;
    }
    const newId = this.nextPhotoId[albumId]++;
    const newPhoto: Photo = {
      albumId: albumId,
      id: newId,
      title: `Фото ${newId}`,
      url: photoUrl,
      thumbnailUrl: photoUrl
    };
    if (!this.albumPhotos[albumId]) {
      this.albumPhotos[albumId] = [];
    }
    this.albumPhotos[albumId].push(newPhoto);
    return of(newPhoto);
  }
}
