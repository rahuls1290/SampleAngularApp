import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, NotFoundComponent]
})
export class SharedModule { }
