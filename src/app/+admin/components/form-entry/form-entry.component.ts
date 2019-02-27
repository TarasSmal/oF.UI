import { map, switchMap, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Form } from '@app/core/models/form.model';
import { FormService } from '@app/core/services/form.service';
import { ViewService } from '@app/core/services/view.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
    selector: 'app-root',
    templateUrl: './form-view.component.html',
    styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {
    title = 'online-forms';

    gridIsLoading = false;
    public form: Form;
    public views: any[] = [];
    formId: any;
    viewId: any;
    paramsSub: any;
    loadedColumns: string[];
    loadedData: any;

    selection = new SelectionModel<any>(true, []);

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.loadedData.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.loadedData.forEach(row => this.selection.select(row));
    }

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
        this.gridIsLoading = true;

        forkJoin(
            this.formService.get(this.formId),
            this.viewService.get(this.formId)
        ).subscribe(([form, views]) => {
            this.form = form;
            this.views = views;

            this.viewService.getData(views[0].id).subscribe(data => {
                this.loadedData = data;
                this.loadedColumns = Object.keys(data[0]);
                this.loadedColumns.push('select');

                this.gridIsLoading = false;
            });
        });
    }
}
