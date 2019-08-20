import { Component } from '@angular/core';

@Component({
    selector: 'app-spinner',
    template: ` 
    <div class="d-flex justify-content-center" id="spinner-div">
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    `,
    styles:[ `
        #spinner-div{
            margin-top: 90px;
        }
    `]
})
export class SpinnerComponent {
    constructor() { }
}