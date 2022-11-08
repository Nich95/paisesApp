import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [ // esto es un arreglo de objetos
  {
    // esta es la ruta principal, es el primer componente que se va a mostrar cuando alguien entre a la app
    path: '',
    // se ponen los componentes a utilizar
    component: PorPaisComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  {
    // esta ruta necesita de un argumento, el argumento seria el id del país
    path: 'pais/:id', // el nombre puede ser cualquiera en es este es id
    component: VerPaisComponent
  },
  // en caso que el usuario navegue a una ruta que no está definida se crea la ruta de excepcion
  {
    // en este caso lo vamos a redireccionar al a la ruta inicial,
    // tambien se puede redireccionar a un componente
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    // forRoot es rutas principales y forChild es para las rutas hijas
    // solo se tiene un forRoot en la app, si hay otra ruta entonces seria una ruta hija
    RouterModule.forRoot( routes ) // el argumento son las rutas definidas
  ],
  exports: [
    // se tiene que exportar para poder utilizarlo
    RouterModule
  ]
})
export class AppRoutingModule {

}
