import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { Tradie } from "src/app/models/tradie";

@Component({
    selector:'app-tradie-card',
    templateUrl:'./tradie-card.component.html',
    styleUrls:['./tradie-card.component.scss']
})
export class TradieCardComponent implements OnInit, OnChanges {

    @Input() tradies:Tradie[];
    @Input() selectedSubTrade:string[]=[];
    @Output() selectUnselect=new EventEmitter<any>();
    @Output() selectSubTrade= new EventEmitter<any>();

    selectedSubTradies:String[]=[];
    subSet=new Set();

    constructor(){}

    ngOnInit(): void {
        
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('changes',changes);
        this.tradies.forEach((trade)=>{
            if(trade.checked){
               
                this.selectedSubTradies=trade.subTrade;
            }
        })
    }

    itemClicked(tradie){
        this.selectedSubTradies=tradie.subTrade; 
      this.selectUnselect.next(tradie);
      
    }

    selectSub(value){
        if(this.subSet.has(value)){
            this.subSet.delete(value);
        }else {
            this.subSet.add(value);
        }

        this.selectSubTrade.next(this.subSet);

     
    }

}