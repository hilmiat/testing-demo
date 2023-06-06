import { Component, Input } from "@angular/core";

@Component({
    selector: 'cobakomponen',
    template: `
        <h2>Ini adalah komponen baru berapakali?{{berapakali}}</h2>
        <img [src]="imageUrl" />
        <img src="{{imageUrl}}" />
        <img bind-src="imageUrl" />
        <img [src]="imageUrl" (click)="dipencet(1)" />
        <img src="{{imageUrl}}" on-click="dipencet(2)" />
    `
})
export class CobaKomponen {
    //input
    @Input()
    berapakali!: number;

    //property binding
    imageUrl = "https://angular.io/assets/images/logos/angular/angular.png";
    //event binding
    dipencet(e: number) {
        console.log("dipencet", e);
    }
}