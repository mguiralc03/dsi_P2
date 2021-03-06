import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import { NgxColorsModule } from 'ngx-colors';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker'
import { FullCalendarModule} from '@fullcalendar/angular'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import rrulePlugin from '@fullcalendar/rrule';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TramitarComponent } from './tramitar/tramitar.component';
import { UserComponent } from './user/user.component';
import { RecordatoriosComponent } from './recordatorios/recordatorios.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';
import { MedicamentosService } from './medicamentos.service';
import { LoggedService } from './logged.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SearchFilterPipe } from './search-filter.pipe';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  rrulePlugin
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
    MisPedidosComponent,
    SearchFilterPipe
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
    FullCalendarModule,
    MatDatepickerModule,
    NgxColorsModule,
    NgxMaterialTimepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    FormsModule,
    MatProgressBarModule
  ],
  providers: [MedicamentosService, LoggedService, { provide: MAT_DATE_LOCALE, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
