import { Component } from '@angular/core';
import { ROUTER_CONFIGURATION } from '@angular/router';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[`
   /* este css se aplica unicamente a este componente, en este caso a los botones */
    button {
      margin-right: 5px;
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private paisservice: PaisService ) { }

  gerClaseCSS( region: string ): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion( region: string ) {
    if ( region === this.regionActiva ) { return; } // si esto se cumple el metodo llega hasta aqui

    this.regionActiva = region;
    this.paises = [];

    this.paisservice.buscarRegion( this.regionActiva )
      .subscribe( ( paises ) => {
        this.paises = paises;
      }, ( err ) => {
        this.paises = [];
      } )
  }
}
