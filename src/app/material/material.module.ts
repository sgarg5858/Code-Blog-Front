import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';

const materialModules=[
  MatButtonModule,MatCardModule,MatCheckboxModule,MatChipsModule,MatDatepickerModule,MatDialogModule,
  MatDividerModule,MatExpansionModule,MatFormFieldModule,MatIconModule,MatInputModule,MatListModule,
  MatMenuModule,MatPaginatorModule,MatSidenavModule,MatSelectModule,MatSlideToggleModule,
  MatSnackBarModule,MatTableModule,MatTabsModule,MatToolbarModule,MatTooltipModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules
  ],
  exports:[materialModules]
})
export class MaterialModule { }
