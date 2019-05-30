import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartDumbSplitModule } from './smart-dumb/split/split.module';
import { SmartDumbCombinedModule } from './smart-dumb/combined/combined.module';
import { ComponentTestingModule } from './component-testing/component-testing.module';
import { ContentProjectionModule } from './content-projection/content-projection.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentTestingModule,
    ContentProjectionModule,
    SmartDumbCombinedModule
    //SmartDumbSplitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
