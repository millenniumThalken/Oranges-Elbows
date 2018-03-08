import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactFormComponent } from './contact-form/contact-form.component'
import { AreasWeServiceComponent } from './areas-we-service/areas-we-service.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
