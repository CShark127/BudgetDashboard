import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NewRecordComponent } from './new-record.component';

const routes: Routes = [{ path: '', component: NewRecordComponent }];

@NgModule({
  declarations: [NewRecordComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NewRecordModule {}
