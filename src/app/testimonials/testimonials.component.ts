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
        { "message": "Megan was here yesterday and my house is still sparkling from the phenomenal job they did! A true deep clean, these ladies don’t miss a thing! Im SO impressed with their all natural eco friendly cleaning products that they make themselves, I never knew I could get squeaky clean house without the yucky chemicals. If you’re looking for all natural cleaners who will work hard to clean your home, look no further, call Oranges and Elbows! Can’t wait for them to come back!", "author": "Alicia Diehl" },
        { "message": "We have been using Oranges and Elbows for over a year now and are very happy with their services. They do a great job cleaning our house (despite our endless clutter), working within and around the (dis)organization of our house. They rotate deep cleaning around various areas of our house and keep it looking great. They not only use natural cleaners, but they also do a great job with our aging dogs and scaredy cats. We were skeptical about hiring someone to clean our house, but after a year with O and E I doubt we will ever go back to DIY.", "author": "Sarah Heady" },
        { "message": "We have been very pleased with the service provided by Oranges and Elbows. Our house is well cleaned every time they come. Megan and her crew are friendly and professional. Even our dog, who hates the vacuum, gets excited to see the Oranges and Elbows crew. I highly recommend Oranges and Elbows.", "author": "Kate Durda" },
        { "message": "The products used by Oranges and Elbows are thoughtfully selected and safe. They followed the plan we set out and were willing to expand if I elected. The work was efficient and excellent. The staff is personable, well mannered and concerned about the quality of their workmanship. I recommend them.", "author": "Nancy L. Purington" },
        { "message": "Best cleaning service ever!! Megan and her staff are fantastic and my house always looks and smells great!! They go above and beyond to make my house sparkling clean. My doggy looks forward to their visits as well. Thank you Oranges and Elbows for making my life easier!", "author": "Sloane Batley Henry" },
        { "message": "Megan and the crew are wonderful! The house is always spotless when they leave and smells wonderful. They are very dependable. It is the best money that I spend all month to come home to a clean house.", "author": "Gina Sill Rogers" },
        { "message": "My house shines and smells wonderful after each clean. I look forward to coming into the house after they have been there and just relaxing, letting go and enjoying being HOME! Thank you all so much!", "author": "Susan Totten" },
        { "message": "I love Megan and her crew. I’ve used them every other week since I moved into my new house a year ago. I look forward to their visit each time!", "author": "Sarah Wood Lenger" },
        { "message": "We are so happy to have found this amazing crew. They are kind, respectful, dependable and do amazing work. We appreciate that they use non-toxic, safe products. Megan is an excellent communicator. If you want a reliable service and a sparkling home that smells fabulous and looks awesome - they are your people.", "author": "Lisa Parry Moenning" },
        { "message": "I look forward to my monthly cleaning. It's smells so fresh after Megan and her staff visit my home! It's so wonderful to have a little help with housekeeping, especially after the birth of my daughter.", "author": "Becca Horan" },
        { "message": "The best cleaning I have ever had. Everything was so clean and smelled fresh. I would recommend this cleaning service to everyone!", "author": "Dayna Willard" },
        { "message": "They are amazing!!! It’s so nice to come home to clean house. They do an excellent job.", "author": "Frances Denise Sernulka-George" },
        { "message": "I look forward to O&E visiting my home twice a month, as do my cats & dogs! And, because of the cats & dogs my home needs the thorough cleaning O&E provides to remove all the fur balls & paw prints, including moving my heavy furniture. When done, my house sparkles & smells wonderful. Great service, great value, great people.", "author": "Linda Couch" }
    ];

    constructor() { }

    ngOnInit() {
    }

}
