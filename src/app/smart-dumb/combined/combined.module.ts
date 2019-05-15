import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './combined-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        NgbModule
    ],
    exports: [
        SearchComponent,
        BrowserModule,
        ReactiveFormsModule,
        NgbModule
    ],
    providers: []
})
export class SmartDumbCombinedModule { }
