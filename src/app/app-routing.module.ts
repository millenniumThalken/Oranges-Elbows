import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactFormComponent } from './contact-form/contact-form.component'

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
        path: 'contact',
        component: ContactFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
