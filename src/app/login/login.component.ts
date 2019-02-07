import { LoginModel } from './../core/models/login.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '@app/core/services/auth.service';
// import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    // animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    public loginFormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    });
    public hide = true;

    constructor(
        public router: Router,
        private authService: AuthenticationService,
    ) { }

    ngOnInit() { }

    public onSubmit() {
        debugger;
        const loginData: LoginModel = this.loginFormGroup.value;

        this.authService.login(loginData).subscribe(d => {
            debugger;
        });
    }
}
