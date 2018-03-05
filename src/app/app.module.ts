import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';





import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SocialMediaHeaderComponent } from './social-media-header/social-media-header.component';
import { FooterComponent } from './footer/footer.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { CarouselComponent } from './carousel/carousel.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { environment } from '../environments/environment';


@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        NavbarComponent,
        HeaderComponent,
        SocialMediaHeaderComponent,
        FooterComponent,
        ImageCarouselComponent,
        CarouselComponent,
        OurServicesComponent,
        ContactFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        ReactiveFormsModule,
        FormsModule,
        MDBBootstrapModule.forRoot()


    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
