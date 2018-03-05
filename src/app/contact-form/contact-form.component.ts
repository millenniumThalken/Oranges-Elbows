import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { MatSnackBar } from '@angular/material'

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
    form: FormGroup;
    constructor(private fb: FormBuilder, private db: AngularFireDatabase, private snackbar: MatSnackBar) { }



    ngOnInit() {
        this.createForm()
    }

    createForm() {
        this.form = this.fb.group({
            name: new FormControl(""),
            email: new FormControl(""),
            subject: new FormControl(""),
            message: new FormControl(""),
        });
    }

    onSubmit() {
        const { name, email, subject, message } = this.form.value;
        const date = Date();
        const html = `
            <div>From: ${name}</div>
            <div>Email: <a href="mailto:${email}">${email}</a></div>
            <div>Date Recieved: ${date}</div>
            <div>Subject: ${subject}</div>
            <div>Message: ${message}</div>
        `;

        let formRequest = { name, email, date, subject, message };

        this.db.list('/messages').push(formRequest);
        this.form.reset();
    }

    message: string = "Your Message Was Sent Successfully";

    showSnackbar(snackMessage: string) {
        this.snackbar.open(snackMessage = this.message, "Sent", {
            duration: 5000,
        });
    }


}
