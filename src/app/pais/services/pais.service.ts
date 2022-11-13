import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> { // el Observable emite un arreglo de pais
    const url = `${ this._apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url ); // typescript con esta linea sabe que regresa un Obsevable de tipo pais
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this._apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha( id: string): Observable<Country> { // Country va sin los corchetes porque estoy retornando un solo país
    const url = `${ this._apiUrl }/alpha/${ id }`;
    return this.http.get<Country>(url);
  }

  buscarRegion( region: string ): Observable<Country[]> {
    const url = `https://restcountries.com/v2/regionalbloc/${ region }`
    return this.http.get<Country[]>(url);
  }
}
