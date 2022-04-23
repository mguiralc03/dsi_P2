import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';
import { RecordatoriosComponent } from './recordatorios/recordatorios.component';
import { TramitarComponent } from './tramitar/tramitar.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'mis-pedidos', component: MisPedidosComponent },
  { path: 'recordatorios', component: RecordatoriosComponent },
  { path: 'tramitar', component: TramitarComponent },
  { path: 'mi-cuenta', component: UserComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
