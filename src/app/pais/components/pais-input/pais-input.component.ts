import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent {

  // a los eventos se les suele poner la palabra on antess para describir que es un evento
  // es importante especificar el tipo de evento que se va a emitir, 
  // en este caso el evento que se va a emitir es termino y el termino es de tipo string
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  termino: string = '';

  buscar() {
    // la siguiente linea llama al evento onEnter que fue inicializado como EvenEmitter
    // y como argumento se le entrega el termino que queremos enviar
    this.onEnter.emit( this.termino );
  }
}
