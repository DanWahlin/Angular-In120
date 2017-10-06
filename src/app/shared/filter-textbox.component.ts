import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'filter-textbox',
    template: `    
        {{ title }}: <input type="text" (input)="filterChanged($event)" />
        <!--<input type="text" [(ngModel)]="filter" />-->
    `
})
export class FilterTextboxComponent implements OnInit {

    @Input() title = 'Filter:'
    @Output() changed: EventEmitter<string> = new EventEmitter<string>();
    
    //Can intercept value being assigned to filter property using set block
    //Uncomment code below if using ngModel
    //private _filter = '';

    // get filter() { return this._filter; }
    // set filter(value: string) { 
    //     this._filter = value; 
    //     this.filterChanged(event);
    // }

    constructor() { }

    ngOnInit() { 

    }

    filterChanged(event: any) {
      //Comment out if using ngModel
      this.changed.emit(event.target.value);

      //Uncomment when using ngModel 
      //this.changed.emit(this.filter);
    }

}