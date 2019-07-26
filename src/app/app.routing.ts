import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './smart-dumb/combined/combined-search.component';
import { ReportComponent } from './component-testing/report.component';
import { SampleComponent } from './content-projection/sample.component';
import { RouterReuseComponent } from './router-reuse/router-reuse.component';
import { ComponentScopeComponent } from './component-scope/component-scope.component';
//import { SearchComponent } from './smart-dumb/split/split-search.component';

const routes: Routes = [
	{
		path: 'smart-dumb',
		component: SearchComponent
	},
	{
		path: 'component-testing',
		component: ReportComponent
	},
	{
		path: 'content-projection',
		component: SampleComponent
	},
	{
		path: 'router-resuse',
		component: RouterReuseComponent
	},
	{
		path: 'component-scope',
		component: ComponentScopeComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRouting {}
