import { Component } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent {

  termino: string = '';

  buscar() {
    console.log('hola mundo' );
    console.log( this.termino );
  }
}
