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
import { AgmCoreModule } from '@agm/core';





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
import { GgmapsComponent } from './ggmaps/ggmaps.component';
import { AreasWeServiceComponent } from './areas-we-service/areas-we-service.component';
import { MeetTheCrewComponent } from './meet-the-crew/meet-the-crew.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';




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
        ContactFormComponent,
        GgmapsComponent,
        AreasWeServiceComponent,
        MeetTheCrewComponent,
        TestimonialsComponent
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
        MDBBootstrapModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAw_G4z70opYSIbFHwe1ftzsW8tiybhBCc'
        })


    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
