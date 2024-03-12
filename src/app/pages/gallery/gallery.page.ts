import { Component, inject } from '@angular/core';
import { PhotoService } from '@services/photo.service';

@Component({
  selector: 'app-gallery',
  //standalone: true,
  templateUrl: 'gallery.page.html',
  styleUrls: ['gallery.page.scss'],
})
export class GalleryPage {

  public photoService = inject(PhotoService)
  constructor() {}
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
