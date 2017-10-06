import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CapitalizePipe } from './capitalize.pipe';
import { FilterTextboxComponent } from './filter-textbox.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ CapitalizePipe, FilterTextboxComponent, PaginationComponent ],
    exports: [ CapitalizePipe, FilterTextboxComponent, PaginationComponent ]
})
export class SharedModule { }