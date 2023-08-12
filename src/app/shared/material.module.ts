import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  exports: [
    MatSidenavModule,  
    MatToolbarModule,
    MatListModule,  
    MatIconModule,    
  ]
})
export class MaterialModule { }
