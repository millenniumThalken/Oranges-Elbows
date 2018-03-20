import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactFormComponent } from './contact-form/contact-form.component'
import { AreasWeServiceComponent } from './areas-we-service/areas-we-service.component';
import { MeetTheCrewComponent } from './meet-the-crew/meet-the-crew.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
    {
        path: 'homepage',
        component: HomepageComponent
    },
    {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full'

    },
    {
        path: 'our-services',
        component: OurServicesComponent
    },
    {
        path: 'areas-we-service',
        component: AreasWeServiceComponent
    },
    {
        path: 'contact',
        component: ContactFormComponent
    },
    {
        path: 'meet-the-crew',
        component: MeetTheCrewComponent
    },
    {
        path: 'testimonials',
        component: TestimonialsComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
