import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-countries';
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);

  /* VERSION EXPERIMENTAL - ANGULAR 19+ */
  query = signal(''); // Señal que almacena el valor del input de búsqueda

  countryResource = resource({
    // countryResource es un recurso reactivo que tiene muchas properties
    request: () => ({ query: this.query() }), // La request es una fx que devuelve un objeto [recomendable por si se debe expandir], tambien puede regresar el valor de una señal
    loader: async ({ request }) => { // La fx loader es asíncrona y devuelve una promesa
      // CONDICION DE SEGURIDAD
      if (!request.query) return []; // Si el query está vacío, retornar un array vacío para no hacer la petición a la API

      return await firstValueFrom(
        this.countryService.searchByCapital(request.query) // Si hay un query, llamar al servicio para buscar países por capital
      );
    },
  });
  
  /* VERSION ESTABLE DE REACTIVIDAD CON SIGNALS - MANEJO DE ERRORES EN EL COMPONENTE
  isLoading = signal(false);
  isError = signal<string | null>(null); // El error puede ser un string o null cuando no hay error
  countries = signal<Country[]>([]);

  onSearch(query: string) {
    if (this.isLoading()) return; // Si isLoading está en true = ya está cargando, entonces no hacer nada xq no quiero hacer un montón de peticiones y bombardear a la API

    this.isLoading.set(true);
    this.isError.set(null); // Cada vez que hago una nueva búsqueda, limpio el error anterior

    this.countryService.searchByCapital(query).subscribe({
      // Si la petición es exitosa, entra en el next
      next: (countries) => {
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: (error) => { // Si la petición falla, entra en el error
        this.isLoading.set(false);
        this.countries.set([]); // Limpio el array de países para que no muestre resultados anteriores
        this.isError.set(error); // Mensaje de error personalizado
      }
    });
  }
  */
}
