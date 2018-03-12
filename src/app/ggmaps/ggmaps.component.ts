import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ggmaps',
    templateUrl: './ggmaps.component.html',
    styleUrls: ['./ggmaps.component.scss']
})
export class GgmapsComponent implements OnInit {
    title: string = 'Areas We Serve';
    zoom: number = 8;
    iowa_city_lat: number = 41.661127700;
    iowa_city_long: number = -91.530168300;
    west_branch_lat: number = 41.6677297;
    west_branch_long: number = -91.347328;
    coralville_lat: number = 41.6978658;
    coralville_long: number = -91.597952;
    riverside_lat: number = 41.4829312;
    riverside_long: number = -91.5725;


    constructor() { }

    ngOnInit() {
    }

}
