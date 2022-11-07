import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {

  // a los eventos se les suele poner la palabra on antess para describir que es un evento
  // es importante especificar el tipo de evento que se va a emitir, 
  // en este caso el evento que se va a emitir es termino y el termino es de tipo string
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject(); // este se emite cuando el usuario deja de escribir, para esto necesitamos el OnInit
  termino: string = '';

  ngOnInit() { // este evento se dispara una unica vez cuando el componente es creado y ya esta inicializado
    this.debouncer
      .pipe( // permite modificar la salida del subscribe
        debounceTime(300) // entonces esto le dice no emitas el subscribe hasta que este observable deje de emitir valores po los siguientes 300 milseima de segundo
      )
      .subscribe( valor => { // valor es lo mismo que termino
        this.onDebounce.emit( valor );
      });
  }

  buscar() {
    // la siguiente linea llama al evento onEnter que fue inicializado como EvenEmitter
    // y como argumento se le entrega el termino que queremos enviar
    this.onEnter.emit( this.termino );
  }

  teclaPrecionada() {
    this.debouncer.next( this.termino ); // next envia el valor que se le ingrese por parametro
  }
}
