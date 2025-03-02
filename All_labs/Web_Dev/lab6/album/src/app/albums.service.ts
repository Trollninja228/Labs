import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
  // Локальный массив альбомов
  private albums: Album[] = [
    { id: 1, title: 'Первый альбом' },
    { id: 2, title: 'Второй альбом' }
  ];
  private nextAlbumId = 3;

  // Локальное хранилище фотографий для каждого альбома
  private albumPhotos: { [albumId: number]: Photo[] } = {
    1: [
      {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      },
      {
        albumId: 1,
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796"
      },
      {
        albumId: 1,
        id: 3,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://via.placeholder.com/600/24f355",
        thumbnailUrl: "https://via.placeholder.com/150/24f355"
      },
      {
        albumId: 1,
        id: 4,
        title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        url: "https://via.placeholder.com/600/d32776",
        thumbnailUrl: "https://via.placeholder.com/150/d32776"
      },
      {
        albumId: 1,
        id: 5,
        title: "natus nisi omnis corporis facere molestiae rerum in",
        url: "https://via.placeholder.com/600/f66b97",
        thumbnailUrl: "https://via.placeholder.com/150/f66b97"
      }
    ]
  };
  // Для генерации id для новых фото по каждому альбому
  private nextPhotoId: { [albumId: number]: number } = {
    1: 6
  };

  constructor() {}

  // Методы для альбомов
  getAlbums(): Observable<Album[]> {
    return of(this.albums);
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
      // Удаляем все фото, если есть
      delete this.albumPhotos[id];
      delete this.nextPhotoId[id];
      return of(true);
    }
    return of(false);
  }

  // Методы для фотографий
  getPhotosForAlbum(albumId: number): Observable<Photo[]> {
    return of(this.albumPhotos[albumId] || []);
  }


  addPhotoToAlbum(albumId: number, photoUrl: string): Observable<Photo> {
    if (!this.nextPhotoId[albumId]) {
      this.nextPhotoId[albumId] = 1;
    }
    const newId = this.nextPhotoId[albumId]++;  // Получаем новый id и инкрементируем счетчик
    const newPhoto: Photo = {
      albumId: albumId,
      id: newId,
      title: `Фото ${newId}`,  // Формируем название на основе id
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
