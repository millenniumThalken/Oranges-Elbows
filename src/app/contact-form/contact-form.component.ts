import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { MatSnackBar } from '@angular/material'

//this component is responsible for capturing the data entered into the contact form and sending it the
//the real-time database Firebase. There at Firebase is a function that looks for a new entry being written to the database
//a trigger is then tripped and Firebase will send an email to the Oranges&Elbows email address with the info the
//customer had enter into the form
//Angular is client side so without a server we would not be able to send out mail. which is why we paired this app
//with Google Firebase

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
    //initiating a FormGroup and assigning it to the variable 'form'
    form: FormGroup;
    //using dependency injection to inject FormBuilder, AngularFireDatabase, and MatSnackBar into this component
    constructor(private fb: FormBuilder, private db: AngularFireDatabase, private snackbar: MatSnackBar) { }

    ngOnInit() {
        //the Form Group was created within a method and that method is being called here in the ngOnInit section
        //so that the form is created as soon as the page is created
        this.createForm()
    }

    //I decided to go the Reactive Forms route because I believe it to be the more Angular way
    //here we are setting up each field for the form group. we are giving it a new Form Control so that we can add validation
    //we are not setting any placeholder text and all fields are required before the form can be submitted
    createForm() {
        this.form = this.fb.group({
            name: new FormControl("", Validators.required),
            email: new FormControl("", Validators.required),
            subject: new FormControl("", Validators.required),
            message: new FormControl("", Validators.required),
        });
    }

    //when the user submits the form the data is captured an put into an array and organized in html elements
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
        //then the data is pushed to the Firebase database under the 'messages' object
        this.db.list('/messages').push(formRequest);
        this.form.reset();
    }

    //this is just a simple little notification bar that appears when a form has been submitted, it is just there
    //so the users have some sort of feedback
    message: string = "Your Message Was Sent Successfully";
    showSnackbar(snackMessage: string) {
        this.snackbar.open(snackMessage = this.message, "Sent", {
            duration: 5000,
        });
    }


}
