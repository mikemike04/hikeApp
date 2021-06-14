import { FlipCardModule } from './flip-card/flip-card.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/home/profile/profile.component';

import { MatCardModule } from '@angular/material/card'
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainPageComponent } from './components/home/main-page/main-page.component';
import { TripsComponent } from './components/home/trips/trips.component';
import { MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddElementComponent } from './components/home/add-element/add-element.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FirebaseService } from './services/firebase.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { ValidatorService } from './services/validator-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MainPageComponent,
    TripsComponent,
    AddElementComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatListModule,
    MatSidenavModule,
    FlipCardModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatFormFieldModule,

  ],
  providers: [FirebaseService, ValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
