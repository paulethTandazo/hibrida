import { Component } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent,IonSelect, IonSelectOption, IonTextarea,IonButton,IonList,IonItem,IonLabel,IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [ IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonSelect, IonSelectOption, IonTextarea,IonButton,
    IonList, IonItem, IonLabel,IonHeader, IonToolbar, ReactiveFormsModule, IonTitle, IonContent, ExploreContainerComponent]


  })
export class Tab2Page {

  constructor() {}

}
