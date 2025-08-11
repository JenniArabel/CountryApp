import { HomePageComponent } from './../shared/pages/home-page/home-page.component';
import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLayoutComponent } from './layouts/CountryLayout/CountryLayout.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
  // {
  //   path: 'country',
  //   // Aun no definido
  // },
];

export default countryRoutes;
