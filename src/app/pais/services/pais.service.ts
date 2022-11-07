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
}
