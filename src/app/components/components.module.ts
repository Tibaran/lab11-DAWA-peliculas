import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';
import { SimilaresSlideshowComponent } from './similares-slideshow/similares-slideshow.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    CastSlideshowComponent,
    SimilaresSlideshowComponent
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    CastSlideshowComponent,
    SimilaresSlideshowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ]
})
export class ComponentsModule { }
