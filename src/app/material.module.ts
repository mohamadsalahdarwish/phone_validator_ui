import { NgModule } from '@angular/core';

import {
  MatPaginatorModule,
  MatInputModule,
  MatSelectModule,MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports: [
    MatPaginatorModule,
    MatInputModule,MatSelectModule,MatFormFieldModule
  ]
})
export class MaterialModule { }
