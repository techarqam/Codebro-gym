import { FormGroup, FormControl, Validators } from '@angular/forms';
export class ModelsService {

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