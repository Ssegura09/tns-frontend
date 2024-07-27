import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component'; // Import the NavBar component
import { UserService } from './services/user.service';

// Import the generated components
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

// Define your routes here
const routes: Routes = [
  { path: '', component: HomeComponent }, // Add your components
  { path: 'about', component: AboutComponent }, // Add your components
  { path: 'contact', component: ContactComponent }, // Add your components
  // Add other routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
