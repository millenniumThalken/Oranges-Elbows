import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ggmaps',
    templateUrl: './ggmaps.component.html',
    styleUrls: ['./ggmaps.component.scss']
})
export class GgmapsComponent implements OnInit {
    title: string = 'Areas We Serve';
    iowa_city_lat: number = 41.661127700;
    iowa_city_long: number = -91.530168300;

    constructor() { }

    ngOnInit() {
    }

}
