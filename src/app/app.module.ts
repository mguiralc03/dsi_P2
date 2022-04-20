import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule} from '@angular/material/button'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TramitarComponent } from './tramitar/tramitar.component';
import { UserComponent } from './user/user.component';
import { RecordatoriosComponent } from './recordatorios/recordatorios.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TramitarComponent,
    UserComponent,
    RecordatoriosComponent,
    FavoritosComponent,
    MisPedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
