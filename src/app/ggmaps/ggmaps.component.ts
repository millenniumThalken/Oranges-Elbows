import { Component, OnInit } from '@angular/core';
import { Locations } from './locations.model';

@Component({
    selector: 'app-ggmaps',
    templateUrl: './ggmaps.component.html',
    styleUrls: ['./ggmaps.component.scss']
})
export class GgmapsComponent implements OnInit {
    title: string = 'Areas We Serve';
    zoom: number = 8;
    start_lat: number = 41.661127700;
    start_long: number = -91.530168300
    public locations: Locations[] = [
        { "title": "Iowa City", "lat": 41.661127700, "long": -91.530168300 },
        { "title": "Coralville", "lat": 41.6978658, "long": -91.597952 },
        { "title": "West Branch", "lat": 41.6677297, "long": -91.347328 },
        { "title": "Riverside", "lat": 41.4829312, "long": -91.5725 },
        { "title": "North Liberty", "lat": 41.7439604, "long": -91.614671 },
        { "title": "Cedar Rapid", "lat": 41.9730566, "long": -91.669624 },
        { "title": "Solon", "lat": 41.8064789, "long": -91.497476 },
        { "title": "Marion", "lat": 42.0435228, "long": -91.585716 },
        { "title": "Mount Vernon", "lat": 41.9229729, "long": -91.42435 },
        { "title": "Oxford", "lat": 41.7230594, "long": -91.791287 },
        { "title": "Williamsburg", "lat": 41.6679856, "long": -92.009791 },
        { "title": "Amana", "lat": 41.8000, "long": -91.8681 }
    ];


    constructor() { }

    ngOnInit() {
    }

}
