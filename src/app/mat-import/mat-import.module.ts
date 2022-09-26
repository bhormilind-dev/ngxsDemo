import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

const matImport = [
  MatTableModule,
  MatPaginatorModule
]

@NgModule({
  imports: [ matImport ],
  exports: [ matImport ]
})
export class MatImportModule { }
