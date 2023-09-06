import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector:'app-job-card',
    templateUrl:'./job-card.component.html',
    styleUrls:['./job-card.component.scss']
})
export class JobCardComponent implements OnInit, OnChanges {

    @Input() job:any;
    constructor(){}

    ngOnInit(): void {
        
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        // if(this.job.subTrade.length>5){
        //    this.job.subTrade=this.job.subTrade.splice(0,3);
        // }
        
    }
}