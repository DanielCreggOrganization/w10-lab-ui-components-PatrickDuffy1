import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonModal, IonInput, IonLabel, IonItem, ModalController } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonButtons, IonModal, IonInput, IonLabel, IonItem],
})
export class Tab3Page {
  constructor(private modalController: ModalController) {}

  // Close the modal
  async closeModal() {
    const modal = await this.modalController.getTop(); // Get the top modal (the one that is currently open)
    if (modal) {
      await modal.dismiss();  // Dismiss the modal
    }
  }
}

 

