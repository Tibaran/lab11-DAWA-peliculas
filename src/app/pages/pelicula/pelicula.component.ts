import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { PeliculasService } from '../../services/peliculas.service';
import { MovieResponse } from '../../interfaces/movie-response';
import { Cast } from '../../interfaces/credits-response';
import { Movie } from '../../interfaces/cartelera-response';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: MovieResponse;
  public cast: Cast[] = [];
  public movies: Movie[] = []

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService,
               private location: Location,
               private router: Router ) { }

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([

      this.peliculasService.getPeliculaDetalle( id ),
      this.peliculasService.getCast( id ),
      this.peliculasService.getPeliculasSimilares( id )

    ]).subscribe( ( [pelicula, cast, movies] ) => {

      if ( !pelicula ) {
        this.router.navigateByUrl('/home');
        return;
      }

      this.pelicula = pelicula;
      this.cast = cast.filter( actor => actor.profile_path !== null );
      this.movies = movies.filter( movie => movie.poster_path !== null);
    });



    // this.peliculasService.getPeliculaDetalle( id ).subscribe( movie => {
      // if ( !movie ) {
      //   this.router.navigateeByUrl('/home');
      //   return;
      // }
      // this.pelicula = movie;
    // });

    // this.peliculasService.getCast( id ).subscribe( cast => {
    //   console.log(cast)
    //   this.cast = cast.filter( actor => actor.profile_path !== null );
    // });



  }

  onRegresar() {
    this.location.back();
  }

}
