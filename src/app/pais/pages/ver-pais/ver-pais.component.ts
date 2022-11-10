import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'; // permite ingresar un obsavable y regresa un observable

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { } // el constrcutor actua antes de que el componente este inicializado

  ngOnInit(): void { // esta sección es cuando el componente ya esta inicializado 
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id ) ) // desestructuración de argumentos
    )  
    .subscribe( resp => {
        console.log( resp );
      } );
    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log( id );
    //     this.paisService.getPaisPorAlpha( id )
    //       .subscribe( pais => {
    //         console.log( pais );
    //       } );
    //   } );
  }
}
