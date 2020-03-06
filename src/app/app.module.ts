import { AuthService } from './../services/auth.service';
import { EspecialidadeService } from './../services/domain/especialidade.service';
import { HttpClientModule } from '@angular/common/http';
import { MedicoService } from '../services/domain/medico.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptors';
import { StorageService } from '../services/storage.service';
import { AuthInterceptorProvider } from '../interceptors/auth-interceptors';
import { PacienteService } from '../services/domain/paciente.service';
import { TelaMenuPage } from '../pages/tela-menu/tela-menu';

@NgModule({
  declarations: [
    MyApp,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MedicoService, EspecialidadeService,AuthInterceptorProvider,ErrorInterceptorProvider,
    AuthService,StorageService,PacienteService
  ]
})
export class AppModule {}
