import { Component } from '@angular/core';
import { 
IonFab, IonFabButton, IonIcon, IonCard,  
IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { cloudUploadOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonFab, IonFabButton, IonIcon, IonCard, 
    IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  constructor() {
    /* Registre el ícono */
    addIcons({ cloudUploadOutline });
}}
