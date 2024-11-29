import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AlertController, ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton],
})
export class Tab4Page {
  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  // async showAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Alert',
  //     subHeader: 'Important message',
  //     message: 'This is an alert message.',
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  // }

  // async showToast() {
  //   const toast = await this.toastController.create({
  //     message: 'This is a toast message',
  //     duration: 2000,
  //     position: 'bottom'
  //   });
  //   await toast.present();
  // }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm Action',
      message: 'Are you sure you want to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelled');
          }
        },
        {
          text: 'Delete',
          cssClass: 'danger',
          handler: () => {
            console.log('Deleted');
          }
        },
        {
          text: 'Save',
          cssClass: 'primary',
          handler: () => {
            console.log('Saved');
          }
        }
      ]
    });
    await alert.present();
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'Task completed successfully',
      duration: 3000,
      buttons: [
        {
          text: 'UNDO',
          role: 'cancel',
          handler: () => { console.log('Undo clicked'); }
        }
      ]
    });
    await toast.present();
  }

}
