import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumsService, Album } from '../albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  newAlbumTitle: string = '';

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumsService.getAlbums().subscribe(data => this.albums = data);
  }

  createAlbum(): void {
    if (this.newAlbumTitle.trim()) {
      this.albumsService.createAlbum({ title: this.newAlbumTitle }).subscribe(album => {
        this.newAlbumTitle = '';
        this.loadAlbums();
      });
    }
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(success => {
      if (success) {
        this.loadAlbums();
      }
    });
  }

  selectAlbum(album: Album): void {
    this.router.navigate(['/albums', album.id]);
  }
}
