import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FullCalendarModule} from '@fullcalendar/angular'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

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
import { MedicamentosService } from './medicamentos.service';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin
])

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
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    FullCalendarModule
  ],
  providers: [MedicamentosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
