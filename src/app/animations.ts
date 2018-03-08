//I don't actually think I am using this for my image carousel, but I am keeping it in the project as reference
import { animate, animation, style } from '@angular/animations';

export var slideAnimation = animation([
    style({ opacity: 0, transform: 'translate3d(-100%,0,0)' }),
    animate('2000ms ease-in-out', style({ opacity: 1, transform: 'translate3d(0%,0,0)' }))
])