import { Component, OnInit } from '@angular/core';
import { ModalService } from 'ng-bootstrap-modal';

@Component({
    selector: 'app-modal-dialog',
    templateUrl: './modal-dialog.component.html',
    styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {

    constructor(private modalService: ModalService) { }

    ngOnInit() {
    }

    submit() {
        this.modalService.ok();
    }

    cancel() {
        this.modalService.cancel();
    }

    close() {
        this.modalService.close();
    }

}
