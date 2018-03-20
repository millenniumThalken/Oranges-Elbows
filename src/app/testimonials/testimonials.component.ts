import { Component, OnInit } from '@angular/core';
import { Testimonials } from './testimonials.model'

@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

    testimonial: Testimonials[] = [
        { "message": "Oranges and Elbows save me from the, I just worked all week, and now I have to clean my house blues! The ladies thoroughly cleaned my house top to bottom! They don’t miss a ceiling fan or corner! They saw things I’ve ignored for years!! I love walking in the door after oranges and elbows comes over, the house smells like a provinciallavender field!! Thank you Oranges and Elbows, I love you!", "author": "Annie Isabelle" },
        { "message": "The products used by Oranges and Elbows are thoughtfully selected and safe. They followed the plan we set out and were willing to expand if I elected. The work was efficient and excellent. The staff is personable, well mannered and concerned about the quality of their workmanship. I recommend them.", "author": "Nancy Purington" },
        { "message": "Megan was here yesterday and my house is still sparkling from the phenomenal job they did! A true deep clean, these ladies don’t miss a thing! Im SO impressed with their all natural eco friendly cleaning products that they make themselves, I never knew I could get squeaky clean house without the yucky chemicals. If you’re looking for all natural cleaners who will work hard to clean your home, look no further, call Oranges and Elbows! Can’t wait for them to come back!", "author": "Alicia Diehl" }
    ];

    constructor() { }

    ngOnInit() {
    }

}
