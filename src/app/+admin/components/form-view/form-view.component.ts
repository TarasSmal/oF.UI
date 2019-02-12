import { map, switchMap, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Form } from '@app/core/models/form.model';
import { FormService } from '@app/core/services/form.service';
import { ViewService } from '@app/core/services/view.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './form-view.component.html',
    styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {
    title = 'online-forms';

    public form: Form;
    public views: any[] = [];
    formId: any;
    viewId: any;
    paramsSub: any;

    /**
     *
     */
    constructor(
        private formService: FormService,
        private viewService: ViewService,
        private route: ActivatedRoute,
        private router: Router, ) {
    }
    ngOnInit() {
        this.paramsSub = this.route.params.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.formId = params['id'];
                this.viewId = params['viewId'];

                this.initialize();
            }
        });
    }

    private initialize() {
        forkJoin(
            this.formService.get(this.formId),
            this.viewService.get(this.formId)
        ).subscribe(([form, views]) => {
            this.form = form;
            this.views = views;
        });
    }
}
