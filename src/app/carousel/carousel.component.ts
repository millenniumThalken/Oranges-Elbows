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
        { "title": "A Commitment to Being Green ", "message": "Oranges&Elbows is 100% committed to your health and the environment, check out our testimonials", "link": "/#", "url": "/assets/images/kitchen_one.jpg", "selected": false },
        { "title": "Contact Us", "message": "Free customized estimates, so contact us today!", "link": "/#", "url": "/assets/images/kitchen_two.jpg", "selected": false },
        { "title": "Service with a Smile", "message": "Our crew is the best in the business", "link": "/#", "url": "/assets/images/VinegarAndLemons.jpg", "selected": false },
        { "title": "Handmade Cleaning Products", "message": "utilizing HAWKEYE vodka, Go Hawks!", "link": "/#", "url": "/assets/images/YellowGlove.jpg", "selected": false }
    ];

    ngOnInit() {
    }

}
