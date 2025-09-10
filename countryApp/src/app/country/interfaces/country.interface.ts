export interface Country {
  cca2: string;
  flag: string;
  flagSvg: string;
  name: string;
  capital: string;
  population: number;
}

//Es mejor tener una interfaz propia para la aplicación,
// en lugar de usar directamente la que viene de la API.

//Porque si la API cambia, no afectará a toda la aplicación
//Solo habría que cambiar el mapeo en el CountryMapper

//Y además, la interfaz de la API puede tener muchos más datos
// de los que realmente necesitamos en la aplicación.

//Por lo que es mejor tener una interfaz propia con solo los datos
// que realmente vamos a usar.
//Esto hace que la aplicación sea más ligera y eficiente.
