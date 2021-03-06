import { Form } from './../../../core/models/form.model';
import { Component, OnInit } from '@angular/core';
import { FormService } from '@app/core/services/form.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-admin-nav',
    templateUrl: './admin-nav.html',
    styleUrls: ['./admin-nav.scss']
})
export class AdminNavComponent implements OnInit {

    public forms: Form[];
    public selectedForm: Form;

    constructor(
        private formService: FormService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.formService.get().subscribe(forms => this.forms = forms);
    }

    public selectFormClick(form: Form) {
        this.selectedForm = form;
        this.router.navigate([`admin/form/${this.selectedForm.id}/1`]);
    }
}
