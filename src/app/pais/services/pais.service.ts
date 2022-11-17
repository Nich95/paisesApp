import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v3.1';

  // propiedad para la llamada facil
  // get httpParams () {
  //   return new HttpParams().set( 'fields', 'name:capital;altSpelling:flags:population' )
  // }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> { // el Observable emite un arreglo de pais
    const url = `${ this._apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url ); // typescript con esta linea sabe que regresa un Obsevable de tipo pais
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this._apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>(url);
    
    // con la llamada optimizada el return quedaria de la siguiente manera
    // return this.http.get<Country[]>(url, { params: this.httpParams } );
  }

  getPaisPorAlpha( id: string): Observable<Country> { // Country va sin los corchetes porque estoy retornando un solo país
    const url = `${ this._apiUrl }/alpha/${ id }`;
    return this.http.get<Country>(url);
  }

  buscarRegion( region: string ): Observable<Country[]> {
    // en esta parte es mejor optimizar utilizando los fields para traer solo la info necesaria para una llamada optimizada
    const url = `https://restcountries.com/v2/regionalbloc/${ region }`
    return this.http.get<Country[]>(url);
  }
}
