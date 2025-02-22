import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { SharedModule } from '../shared/shared.module';
import { ActivityCardComponent } from './activity-list/activity-card/activity-card.component';
import { CreateActivityModalComponent } from './activity-list/create-activity-modal/create-activity-modal.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material.module';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonCardComponent } from './person-list/person-card/person-card.component';
import { CreatePersonModalComponent } from './person-list/create-person-modal/create-person-modal.component';
import { LocationListComponent } from './location-list/location-list.component';
import { CreateLocationModalComponent } from './location-list/create-location-modal/create-location-modal.component';
import { LocationCardComponent } from './location-list/location-card/location-card.component';

const COMPONENTS = [
  ActivityListComponent,
  ActivityCardComponent,
  CreateActivityModalComponent,
  CreateLocationModalComponent,
  CreatePersonModalComponent,
  PersonCardComponent,
  PersonListComponent,
  LocationListComponent
];

@NgModule({
  declarations: [COMPONENTS, LocationCardComponent],
  imports: [CommonModule, FormsModule, MaterialModule, SharedModule],
  exports: [COMPONENTS],
})
export class PagesModule {}
