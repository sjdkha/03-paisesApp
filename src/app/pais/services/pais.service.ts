import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams(){
    return new HttpParams().set('fields','name,capital,cca2,flags,population,alpha2Code');
  }

  constructor( private http: HttpClient ) { }

  buscarPais ( pais: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ pais }`;
    return this.http.get<Country[]>( url, { params: this.httpParams });
  }

  buscarCapital ( capital: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ capital }`;
    return this.http.get<Country[]>( url, { params: this.httpParams });
  }

  getPaisPorId ( id: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country[]>( url );
  }

  buscarPorRegion( region: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>( url, { params: this.httpParams }).pipe(tap(console.log));
  }
}
