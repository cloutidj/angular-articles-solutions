import { Component } from '@angular/core';

@Component({
	selector: 'app-component-children',
	template: `
		<div class="container-fluid">
			<div class="row">
				<div class="col-auto">
					<nav class="nav flex-column">
						<a class="nav-link" [routerLink]="['/component-children','view-child']" routerLinkActive="active">ViewChild</a>
						<a class="nav-link" [routerLink]="['/component-children','content-child']" routerLinkActive="active">ContentChild</a>
					</nav>
				</div>
				<div class="col">
					<router-outlet></router-outlet>
				</div>
			</div>
		</div>`
})
export class ComponentChildrenComponent { }
