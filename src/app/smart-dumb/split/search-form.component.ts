import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchInterface } from '../../shared/search.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-search-form',
	template: `
		<form [formGroup]="searchForm">
			<div class="form-group">
				<label for="searchTerm">Search</label>
				<input type="text" class="form-control" id="searchTerm" formControlName="searchTerm"/>
			</div>

			<<button class="btn btn-primary" type="submit" (click)="searchClick()">Search</button>>
		</form>`
})
export class SearchFormComponent implements OnInit {
	@Input() default: SearchInterface;
	@Output() search: EventEmitter<SearchInterface> = new EventEmitter<SearchInterface>();
	public searchForm: FormGroup;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.searchForm = this.formBuilder.group({
			searchTerm: [ this.default.searchTerm, Validators.required ]
		});
	}

	searchClick() {
		if (this.searchForm.valid) {
			this.search.emit(this.searchForm.value);
		}
	}
}
