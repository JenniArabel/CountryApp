import type { Country } from '../interfaces/country.interface';
import type { RESTCountry } from '../interfaces/rest-countries';

export class CountryMapper {
  // Mapea un objeto de tipo RESTCountry a un objeto de tipo Country
  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      capital: restCountry.capital.join(', '), // Un pais puede tener múltiples capitales, las unimos en una cadena separada por comas
      cca2: restCountry.cca2, // Código de país de 2 letras
      flag: restCountry.flag, // Icono de la bandera del país
      flagSvg: restCountry.flags.svg, // Bandera del país en formato SVG
      name: restCountry.name.common, // Nombre común del país
      population: restCountry.population, // Población del país
    };
  }

  // Mapea un array de objetos de tipo RESTCountry a un array de objetos de tipo Country
  static mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(this.mapRestCountryToCountry); // Usamos el método de mapeo para cada país en el array
  }
}

// Qué es un mapper?

// Un mapper es una clase o función que se encarga de transformar datos de un formato a otro.
// El CountryMapper transforma datos de la API (RESTCountry) a un formato más sencillo y manejable (Country).
// Esto es útil para separar la lógica de transformación de datos del resto de la aplicación,
// haciendo el código más limpio y fácil de mantener.
