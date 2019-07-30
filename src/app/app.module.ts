import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { SmartDumbSplitModule } from './smart-dumb/split/split.module';
import { SmartDumbCombinedModule } from './smart-dumb/combined/combined.module';
import { ComponentTestingModule } from './component-testing/component-testing.module';
import { ContentProjectionModule } from './content-projection/content-projection.module';
import { RouterReuseModule } from './router-reuse/router-reuse.module';
import { ComponentScopeModule } from './component-scope/component-scope.module';
import { ComponentChilrenModule } from './component-children/component-chilren.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRouting,
		NgbModule,
		ComponentChilrenModule,
		ComponentTestingModule,
		ComponentScopeModule,
		ContentProjectionModule,
		RouterReuseModule,
		SmartDumbCombinedModule
		//SmartDumbSplitModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

