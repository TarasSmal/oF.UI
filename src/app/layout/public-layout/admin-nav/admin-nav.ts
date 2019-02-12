import { Form } from './../../../core/models/form.model';
import { Component, OnInit } from '@angular/core';
import { FormService } from '@app/core/services/form.service';

@Component({
    selector: 'app-admin-nav',
    templateUrl: './admin-nav.html',
    styleUrls: ['./admin-nav.scss']
})
export class AdminNavComponent implements OnInit {

    public forms: Form[];
    public selectedForm: Form;

    constructor(private formService: FormService) { }

    ngOnInit() {
        this.formService.get().subscribe(forms => this.forms = forms);
    }
}
