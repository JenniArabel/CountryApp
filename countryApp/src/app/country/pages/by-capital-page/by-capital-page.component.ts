import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-countries';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);

  isLoading = signal(false);
  isError = signal<string | null>(null); // El error puede ser un string o null cuando no hay error
  countries = signal<RESTCountry[]>([]);

  onSearch(query: string) {
     if ( this.isLoading() ) return; // Si isLoading está en true = ya está cargando, entonces no hacer nada xq no quiero hacer un montón de peticiones y bombardear a la API

     this.isLoading.set(true);
     this.isError.set(null); // Cada vez que hago una nueva búsqueda, limpio el error anterior

    this.countryService.searchByCapital(query).subscribe((countries) => { //proceso de verificación de errores dentro del subscribe
       this.isLoading.set(false);
       this.countries.set(countries);

      console.log(countries);
    });
  }
}
