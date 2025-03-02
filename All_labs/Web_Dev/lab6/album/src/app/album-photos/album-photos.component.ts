import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService, Photo } from '../albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  newPhotoUrl: string = '';
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.albumsService.getPhotosForAlbum(this.albumId).subscribe(data => {
      this.photos = data;
    });
  }

  addPhoto(): void {
    if (this.newPhotoUrl.trim()) {
      this.albumsService.addPhotoToAlbum(this.albumId, this.newPhotoUrl).subscribe(newPhoto => {
        this.newPhotoUrl = '';
        this.loadPhotos();
      });
    }
  }

  onReturn(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}
