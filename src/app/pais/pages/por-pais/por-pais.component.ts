import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        /* sirve para que el cursor cambie para que se pueda hacer click */
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ) {}

  buscar( termino: string ) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino; // aqui se le dice que el this.terimno es igual al termino que se recibe como argumento 

    this.paisService.buscarPais( this.termino )
      .subscribe( ( paises ) => {
        console.log( paises );
        this.paises = paises;
      }, ( err ) => {
        this.hayError = true;
        this.paises = [];
      } );
  }

  sugerencias( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais( termino )
      .subscribe( 
        paises => this.paisesSugeridos = paises.splice(0,4),
        (err) => this.paisesSugeridos = [] // con esto quitamos el error al buscar un termino que no existe
      );
  }

  buscarSugerencias( termino: string ) {
    this.buscar( termino );
  }
}
