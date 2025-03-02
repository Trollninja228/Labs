import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumsService, Album } from '../albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe((data: Album[]) => {
      this.albums = data;
    });
  }

  onDelete(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }

  onSelect(album: Album): void {
    this.router.navigate(['/albums', album.id]);
  }
  onCreateAlbum(newAlbum: Album): void {
    this.albumsService.createAlbum(newAlbum).subscribe((createdAlbum) => {
      this.albums.push(createdAlbum);
    });
  }
  
}
