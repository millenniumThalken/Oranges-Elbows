import { Component, OnInit } from '@angular/core';
import { Image } from './image.model';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

    constructor() { }

    //here I have created my own Image model and am using it here to populate an Object of type Image
    public images: Image[] = [
        { "title": "Detailed Services", "message": "Eco-friendly Cleaning That Keeps the Environment and you Healthy", "link": "/our-services", "url": "/assets/images/Lavender.jpg", "selected": false },
        { "title": "Proud to be Green ", "message": "Committed to your health and the environment, check out our testimonials", "link": "/testimonials", "url": "/assets/images/kitchen_one.jpg", "selected": false },
        { "title": "Contact Us", "message": "Free customized estimates, so contact us today!", "link": "/contact", "url": "/assets/images/kitchen_two.jpg", "selected": false },
        { "title": "Service with a Smile", "message": "Our crew is the best in the business", "link": "/meet-the-crew", "url": "/assets/images/VinegarAndLemons.jpg", "selected": false },
        { "title": "Handmade Products", "message": "utilizing safe quality ingredients", "link": "/our-services", "url": "/assets/images/YellowGlove.jpg", "selected": false }
    ];

    ngOnInit() {
    }

}
