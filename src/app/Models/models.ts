import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

export class ModelsService {

    /*Sessions*/
    sessions = new FormGroup({
        name: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(6)
        ])),
        startTime: new FormControl("", Validators.compose([
            Validators.required,
        ])),
        endTime: new FormControl("", Validators.compose([
            Validators.required,
        ])),
        timestamp: new FormControl(moment().format(), Validators.required)
    });



    /*Discount*/
    discount = new FormGroup({
        name: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(6)
        ])),
        percentage: new FormControl("", Validators.compose([
            Validators.required,
            Validators.min(1),
            Validators.max(100),
            Validators.minLength(1)
        ])),
        timestamp: new FormControl(moment().format(), Validators.required)
    });

    /*Member*/
    member = new FormGroup({
        name: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(6)
        ])),
        membership: new FormControl("", Validators.compose([
            Validators.required,
        ])),
        discount: new FormControl("", Validators.compose([
            // Validators.required,
        ])),
        session: new FormControl("", Validators.compose([
            Validators.required,
        ])),
        startDate: new FormControl("", Validators.compose([
            Validators.required,
        ])),
        timestamp: new FormControl(moment().format(), Validators.required)
    });


    /*Membership*/
    membership = new FormGroup({
        name: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(6)
        ])),
        months: new FormControl("", Validators.compose([
            Validators.required,
            Validators.min(1),
            Validators.minLength(1)
        ])),
        pricing: new FormControl("", Validators.compose([
            Validators.required,
            Validators.min(1),
            Validators.minLength(1)
        ])),
        timestamp: new FormControl(moment().format(), Validators.required)
    });


    //Login
    signIn = new FormGroup({
        email: new FormControl("", Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        pass: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(6)
        ])),
    });
    //Sign Up
    signUp = new FormGroup({
        adminName: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(6)
        ])),
        companyName: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(4)
        ])),
        email: new FormControl("", Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        timestamp: new FormControl("", Validators.compose([
            Validators.required,
        ])),
    });


}