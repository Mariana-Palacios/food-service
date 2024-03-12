import { Component, inject, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { UserPhoto } from '@interfaces/photos'; 
import { PhotoService } from '@services/photo.service';

@Component({
  selector: 'app-gallery',
  //standalone: true,
  templateUrl: 'gallery.page.html',
  styleUrls: ['gallery.page.scss'],
})
export class GalleryPage implements OnInit{

  public photoService = inject(PhotoService)
  public actionSheetController = inject(ActionSheetController)

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }
}
