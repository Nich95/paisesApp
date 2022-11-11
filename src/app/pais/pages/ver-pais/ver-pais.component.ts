import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'; // permite ingresar un obsavable y regresa un observable

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais: Country[] = [] // le dice a typescript que confie en lo que hago y tratalo como situviera data aun que sea null
  
  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) {  } // el constrcutor actua antes de que el componente este inicializado

  ngOnInit(): void { // esta sección es cuando el componente ya esta inicializado 
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id ) ), // desestructuración de argumentos
        tap( console.log ) // el tap recibe el producto del observable lo imprime en consola
      )
      .subscribe( pais => this.pais = pais );

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
