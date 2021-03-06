import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@Angular/forms';
import { ListComponent } from './main/list/list.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RegistrationComponent } from './auth/registration/registration.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './main/list/detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    RegistrationComponent,
    MainComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
