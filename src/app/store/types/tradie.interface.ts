import { Tradie } from "src/app/models/tradie";


export interface TradieStateInterface {
  isLoading: boolean;
  trades: Tradie[];
  error: string | null;
  tradies:any[];
  location:string;
  selectedTrades:string[];
}