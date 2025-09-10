import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries';
import { map, Observable } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  // query para que se pueda buscar una letra, dos letras, no necesariamente una capital

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      // Aquí puedes agregar operadores de RxJS si es necesario
      // El map de RxJS. Nos permite transformar la data que viene del observable.
      map((countries) => CountryMapper.mapRestCountryArrayToCountryArray(countries))
      // Si tenemos mas de un map, las transformaciones que haga el 1er map, las va a recibir el 2do map y asi sucesivamente
    );
  }
}
