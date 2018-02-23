import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Image } from './image.model';

@Component({
    selector: 'app-image-carousel',
    templateUrl: './image-carousel.component.html',
    styleUrls: ['./image-carousel.component.scss'],

})
export class ImageCarouselComponent implements OnInit, OnDestroy {

    constructor() { }



    private loopTimeout: any;

    public currentIndex: number = 0;

    public images: Image[] = [
        { "title": "First Slide", "url": "/assets/images/Lavender.jpg", "selected": false },
        { "title": "Second Slide", "url": "/assets/images/kitchen_one.jpg", "selected": false },
        { "title": "Third Slide", "url": "/assets/images/kitchen_two.jpg", "selected": false },
        { "title": "Forth Slide", "url": "/assets/images/VinegarAndLemons.jpg", "selected": false },
        { "title": "Fifth Slide", "url": "/assets/images/YellowGlove.jpg", "selected": false }
    ];



    ngOnInit() {
        //targeting the first image in the image array, targeting the selected property and setting it to true.
        this.images[this.currentIndex].selected = true;

        //using the built in setInterval method and applying it to the next method to automate the moving of the slides every 4 seconds
        this.loopTimeout = setInterval(() => this.next(), 4000);


    }



    //resets the looping after 4 seconds
    ngOnDestroy(): void {
        if (this.loopTimeout) {
            clearInterval(this.loopTimeout);
        }
    }

    //add one to the currentIndex to get the next image inline in the image array
    //if the currentIndex is equal or greater than the array length then you know your at the last slide already and need to set the currentIndex
    //to zero, then you call the updateCarousel method to so the actual switching of slides
    next() {
        this.currentIndex++;
        if (this.currentIndex >= this.images.length) {
            this.currentIndex = 0;
        }
        this.updateCarousel();
    }

    //same kind of logic as the next method, just in reverse
    previous() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.images.length - 1;
        }
        this.updateCarousel();
    }

    //changing the picture, first you loop through each image in the image array and then set all the selected properties to false
    //by setting the selected properties to false means all images with a property of false will not be displayed
    //then take the image that is currently being selected by the currentIndex variable. This method will be called for each movement of the slide
    updateCarousel() {
        this.images.forEach(img => img.selected = false);
        this.images[this.currentIndex].selected = true;
    }


}
