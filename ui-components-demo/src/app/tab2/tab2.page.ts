import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonItemOptions, IonItemOption, IonLabel, IonItem, IonItemSliding, IonBadge, IonList } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { trash, heart } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonIcon, IonItemOptions, IonItemOption, IonLabel, IonItem, IonItemSliding, IonBadge, IonList]
})
export class Tab2Page {

  constructor() {
    addIcons({ trash, heart });
  }

}
