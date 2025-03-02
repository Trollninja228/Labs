import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService, Album } from '../albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;
  updatedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe((data: Album | undefined) => {
      this.album = data;
      if (this.album) {
        this.updatedTitle = this.album.title;
      }
    });
  }

  save(): void {
    if (this.album) {
      this.album.title = this.updatedTitle;
      this.albumsService.updateAlbum(this.album).subscribe(updated => {
        if (updated) {
          alert('Название альбома обновлено!');
        } else {
          alert('Ошибка обновления!');
        }
      });
    }
  }

  returnToList(): void {
    this.router.navigate(['/albums']);
  }
  goToPhotos(): void {
    if (this.album) {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
  }
  
}
