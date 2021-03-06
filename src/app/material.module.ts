import { NgModule } from '@angular/core';

import {
  MatPaginatorModule,
  MatInputModule,
  MatSelectModule,MatFormFieldModule,MatIconModule,MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,MatIconModule,MatButtonModule
  ],
  exports: [
    MatPaginatorModule,
    MatInputModule,MatSelectModule,MatFormFieldModule,MatIconModule,MatButtonModule
  ]
})
export class MaterialModule { }
