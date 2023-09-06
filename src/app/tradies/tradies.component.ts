import { Component, OnInit } from "@angular/core";
import { TradiesService } from "../service/tradies.service";
import { Tradie } from "../models/tradie";
import { AppStateInterface } from "../types/appState.interface";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import * as TradieActions from '../store/actions/tradie.action'
import { errorSelector, isLoadingSelector, locationSelector, tradeSelector, tradieSelector } from "../store/selectors/tradie.selector";

@Component({
    selector: 'app-tradies',
    templateUrl: './tradies.component.html',
    styleUrls: ['./tradies.component.scss']
})
export class TradiesComponent implements OnInit {

    tradies: Tradie[] = [];
    subTradies = [];
    location: string = "";
    selectedTrade=new Set<string>();
    jobCards:any[]=[];
    filteredJobs=[];

    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;

    constructor(private tradieService: TradiesService,private store: Store<AppStateInterface>) { 
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));
        this.store.pipe(select(tradeSelector)).subscribe((res)=>{
            this.tradies=res;
        });
        this.store.pipe(select(locationSelector)).subscribe((res)=>{
            this.location=res;
        })
        this.store.pipe(select(tradieSelector)).subscribe((res)=>{
          this.jobCards=res;
         
            this.filterJobs();
         
          
        })
    }

    ngOnInit(): void {
        if(this.tradies.length===0){
            this.store.dispatch(TradieActions.getTrades());
        }
        

    }

    tradieChanged(event) {
        const tr=[...this.tradies];

        tr.forEach((trade) => {
            if (trade._id === event._id) {
                this.store.dispatch(TradieActions.getTradesUpdateSuccess({trade:trade}));
           
                this.selectedTrade.add(event.name);
            } else {
                if(this.selectedTrade.has(trade.name)){
                    this.selectedTrade.delete(trade.name);
                }
               
            }
        });
        
    }

    subTradie(event) {
       this.subTradies=[];
        event.forEach((res) => {
            this.subTradies.push(res);
        });
        this.filterJobs();
    }
    change(event) { 
        console.log(event.target.value);
        this.location=event.target.value;
     }
    searchTradie() {
        this.store.dispatch(TradieActions.getLocationSuccess({location:this.location}));
        this.store.dispatch(TradieActions.getTradies({location:this.location,trades:Array.from(this.selectedTrade)}));
        
        // this.tradieService.searchTradie(this.location,Array.from( this.selectedTrade)).subscribe((res:any[])=>{
        //     console.log(res);
        //     this.jobCards=res;
        // })
    }
    filterJobs(){
        if(this.subTradies.length===0){
            this.filteredJobs=this.jobCards;
        }else {
            this.filteredJobs=[];
            this.jobCards.forEach((job)=>{
                for(let i=0;i<this.subTradies.length;i++){
                        if(job.subTrade.includes(this.subTradies[i])){
                            this.filteredJobs.push(job);
                            break;
                        }
                }
            });
        }
       


    }
}