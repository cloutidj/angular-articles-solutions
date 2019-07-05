import { Component } from '@angular/core';

@Component({
	selector: 'app-router-reuse',
	template: `
		<div class="container-fluid">
			<div class="row">
				<div class="col-auto">
					<nav class="nav flex-column">
						<a class="nav-link" [routerLink]="['/router-reuse','parent']" routerLinkActive="active">Parent-Child</a>
						<a class="nav-link" [routerLink]="['/router-reuse','search']" routerLinkActive="active">Search-Result</a>
					</nav>
				</div>
				<div class="col">
					<router-outlet></router-outlet>
				</div>
			</div>
		</div>
	`
})
export class RouterReuseComponent {}
