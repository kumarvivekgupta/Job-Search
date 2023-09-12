"use strict";(self.webpackChunkjob_search=self.webpackChunkjob_search||[]).push([[263],{4263:(pe,x,d)=>{d.r(x),d.d(x,{TradiesModule:()=>de});var p=d(6895),_=d(4875),r=d(2997);const m=(0,r.PH)("[Tradie] Get Tradies",(0,r.Ky)()),f=(0,r.PH)("[Tradie] Get Tradies success",(0,r.Ky)()),b=(0,r.PH)("[Tradie] Get Tradies failure",(0,r.Ky)()),u=(0,r.PH)("[Trade] Get Trades"),T=(0,r.PH)("[Trade] Get Trades success",(0,r.Ky)()),j=(0,r.PH)("[Trade] Get Trades failure",(0,r.Ky)()),C=(0,r.PH)("[Trade] Get Location success",(0,r.Ky)()),w=(0,r.PH)("[Trade] Get Trades Update success",(0,r.Ky)()),l=t=>t.tradies,k=(0,r.P1)(l,t=>t.isLoading),S=(0,r.P1)(l,t=>t.tradies),J=(0,r.P1)(l,t=>t.trades),U=(0,r.P1)(l,t=>t.error),A=(0,r.P1)(l,t=>t.location);var e=d(4650),v=d(2340),F=d(529);let O=(()=>{var t;class o{constructor(n){this.http=n}getTrades(){return this.http.get(`${v.N.API_HOST}/free-view/trades`)}searchTradie(n,s){return this.http.post(`${v.N.API_HOST}/free-view/find-tradie`,{data:{location:n,trade:s}})}}return(t=o).\u0275fac=function(n){return new(n||t)(e.LFG(F.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),o})();const I=function(t){return{selected:t}};function N(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"div",3),e.NdJ("click",function(){const a=e.CHM(i).$implicit,c=e.oxw();return e.KtG(c.itemClicked(a))}),e._UZ(1,"img",4),e.TgZ(2,"p",5),e._uU(3),e.qZA()()}if(2&t){const i=o.$implicit;e.Q6J("ngClass",e.VKq(3,I,i.checked)),e.xp6(1),e.s9C("src",i.svg,e.LSH),e.xp6(2),e.Oqu(i.name)}}function q(t,o){1&t&&e._UZ(0,"img",11)}const E=function(t){return{"select-sub":t}};function Y(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"div",8),e.NdJ("click",function(){const a=e.CHM(i).$implicit,c=e.oxw(2);return e.KtG(c.selectSub(a))}),e.TgZ(1,"p",9),e._uU(2),e.YNc(3,q,1,0,"img",10),e.qZA()()}if(2&t){const i=o.$implicit,n=e.oxw(2);e.Q6J("ngClass",e.VKq(3,E,n.subSet.has(i))),e.xp6(2),e.hij(" ",i," "),e.xp6(1),e.Q6J("ngIf",n.subSet.has(i))}}function Q(t,o){if(1&t&&(e.TgZ(0,"div",6),e.YNc(1,Y,4,5,"div",7),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.selectedSubTradies)}}let L=(()=>{var t;class o{constructor(){this.selectedSubTrade=[],this.selectUnselect=new e.vpe,this.selectSubTrade=new e.vpe,this.selectedSubTradies=[],this.subSet=new Set}ngOnInit(){}ngOnChanges(n){console.log("changes",n),this.tradies.forEach(s=>{s.checked&&(this.selectedSubTradies=s.subTrade)})}itemClicked(n){this.selectedSubTradies=n.subTrade,this.selectUnselect.next(n)}selectSub(n){this.subSet.has(n)?this.subSet.delete(n):this.subSet.add(n),this.selectSubTrade.next(this.subSet)}}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tradie-card"]],inputs:{tradies:"tradies",selectedSubTrade:"selectedSubTrade"},outputs:{selectUnselect:"selectUnselect",selectSubTrade:"selectSubTrade"},features:[e.TTD],decls:3,vars:2,consts:[[1,"tradies-list"],["class","card",3,"ngClass","click",4,"ngFor","ngForOf"],["class","tradies-sub",4,"ngIf"],[1,"card",3,"ngClass","click"],[1,"card-img",3,"src"],[1,"text"],[1,"tradies-sub"],["style"," padding-left: 15px; padding-right: 15px; padding-top: 5px; padding-bottom: 5px; border-radius: 36px; border: 0.50px #909090 solid; justify-content: center; align-items: center; gap: 10px; display: inline-flex;height: 30px;cursor: pointer;",3,"ngClass","click",4,"ngFor","ngForOf"],[2,"padding-left","15px","padding-right","15px","padding-top","5px","padding-bottom","5px","border-radius","36px","border","0.50px #909090 solid","justify-content","center","align-items","center","gap","10px","display","inline-flex","height","30px","cursor","pointer",3,"ngClass","click"],[2,"color","#595959","font-size","14px","font-family","Roboto","font-weight","400","word-wrap","break-word","white-space","nowrap"],["style","padding-left: 8px;","src","././assets/images/tick.svg",4,"ngIf"],["src","././assets/images/tick.svg",2,"padding-left","8px"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0),e.YNc(1,N,4,5,"div",1),e.qZA(),e.YNc(2,Q,2,1,"div",2)),2&n&&(e.xp6(1),e.Q6J("ngForOf",s.tradies),e.xp6(1),e.Q6J("ngIf",s.selectedSubTradies.length>0))},dependencies:[p.mk,p.sg,p.O5],styles:[".card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.card-img[_ngcontent-%COMP%]{width:34px;height:34px}.text[_ngcontent-%COMP%]{color:#595959;font-size:13px;font-family:Roboto;font-weight:500;word-wrap:break-word;width:80px;text-align:center;margin:0}.selected[_ngcontent-%COMP%]{background:#084B66;border-radius:8px}.selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff!important}.tradies-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;overflow-x:scroll;gap:33px;padding:10px 40px 8px;border-bottom:1px solid #E2E2E2;height:83px;background:white}.tradies-sub[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:15px;overflow-x:scroll;padding:10px 40px;border-bottom:1px solid #E2E2E2;background-color:#fff}.select-sub[_ngcontent-%COMP%]{background-color:#009ae0;display:flex!important}.select-sub[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff!important;display:flex;margin:0;align-items:center}"]}),o})();function z(t,o){1&t&&(e.TgZ(0,"span",15),e._UZ(1,"img",16),e._uU(2,"Licensed"),e.qZA())}function G(t,o){1&t&&(e.TgZ(0,"span",15),e._UZ(1,"img",16),e._uU(2,"ABN"),e.qZA())}function $(t,o){1&t&&(e.TgZ(0,"span",15),e._UZ(1,"img",16),e._uU(2,"GST"),e.qZA())}function H(t,o){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(1),e.Oqu(i)}}function K(t,o){if(1&t&&(e.ynx(0),e.YNc(1,H,2,1,"span",17),e.BQk()),2&t){const i=o.index;e.xp6(1),e.Q6J("ngIf",i<3)}}function R(t,o){if(1&t&&e._UZ(0,"img",20),2&t){const i=e.oxw().$implicit;e.s9C("src",i,e.LSH)}}function B(t,o){if(1&t&&(e.ynx(0),e.YNc(1,R,1,1,"img",19),e.BQk()),2&t){const i=o.index;e.xp6(1),e.Q6J("ngIf",i<3)}}function D(t,o){if(1&t&&(e.TgZ(0,"div",18),e.YNc(1,B,2,1,"ng-container",12),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.job.workImages)}}function W(t,o){1&t&&(e.TgZ(0,"span",26),e._uU(1,"|"),e.qZA())}function X(t,o){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"titlecase"),e.YNc(3,W,2,0,"span",27),e.qZA()),2&t){const i=o.$implicit,n=o.index,s=e.oxw(2);e.xp6(1),e.hij("",e.lcZ(2,2,i)," "),e.xp6(2),e.Q6J("ngIf",n<s.job.workTypeArr.length-1)}}function V(t,o){if(1&t&&(e.TgZ(0,"div",21)(1,"div",22),e._UZ(2,"img",23),e.TgZ(3,"div")(4,"p"),e._uU(5,"Job Types"),e.qZA(),e.YNc(6,X,4,4,"span",12),e.qZA()(),e.TgZ(7,"div",24),e._UZ(8,"img",25),e.TgZ(9,"div")(10,"p"),e._uU(11,"Resources"),e.qZA(),e.TgZ(12,"span")(13,"span"),e._uU(14),e.qZA(),e.TgZ(15,"span",26),e._uU(16,"|"),e.qZA(),e.TgZ(17,"span"),e._uU(18),e.qZA(),e.TgZ(19,"span",26),e._uU(20,"|"),e.qZA(),e.TgZ(21,"span"),e._uU(22),e.qZA()()()()()),2&t){const i=e.oxw();e.xp6(6),e.Q6J("ngForOf",i.job.workTypeArr),e.xp6(8),e.hij(" Tradesman: ",i.job.crewMakeUp.tradesman," "),e.xp6(4),e.hij(" Apprentice: ",i.job.crewMakeUp.apprentice," "),e.xp6(4),e.hij(" Labourer: ",i.job.crewMakeUp.labourer," ")}}let ee=(()=>{var t;class o{constructor(){}ngOnInit(){}ngOnChanges(n){console.log(n)}}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-job-card"]],inputs:{job:"job"},features:[e.TTD],decls:24,vars:11,consts:[[1,"job-card"],[1,"header"],["src","././assets/images/user.svg",1,"user"],[1,"name"],["src","././assets/images/star.svg"],[1,"rating"],[2,"padding","0 0 0 17px","display","flex","justify-content","space-between","flex-direction","column","height","calc(100% - 72px)"],[1,"address"],["src","././assets/images/location.svg"],[2,"display","flex","flex-direction","row","gap","25px"],["class","checks",4,"ngIf"],[1,"sub-trades"],[4,"ngFor","ngForOf"],["class","work-images",4,"ngIf"],["class","without-image",4,"ngIf"],[1,"checks"],["src","././assets/images/check.svg"],[4,"ngIf"],[1,"work-images"],["class","image",3,"src",4,"ngIf"],[1,"image",3,"src"],[1,"without-image"],[1,"job-type",2,"padding-top","7.5px"],["src","././assets/images/job-type.svg"],[1,"job-type"],["src","././assets/images/resource.svg"],[2,"padding","0 5px"],["style","padding: 0 5px;",4,"ngIf"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"p",3),e._uU(4),e.qZA(),e._UZ(5,"img",4),e.TgZ(6,"p",5),e._uU(7),e.qZA()(),e.TgZ(8,"div",6)(9,"div")(10,"p",7),e._UZ(11,"img",8),e._uU(12),e.qZA(),e.TgZ(13,"p",7),e._UZ(14,"img",8),e._uU(15),e.qZA(),e.TgZ(16,"div",9),e.YNc(17,z,3,0,"span",10),e.YNc(18,G,3,0,"span",10),e.YNc(19,$,3,0,"span",10),e.qZA(),e.TgZ(20,"div",11),e.YNc(21,K,2,1,"ng-container",12),e.qZA()(),e.YNc(22,D,2,1,"div",13),e.YNc(23,V,23,4,"div",14),e.qZA()()),2&n&&(e.xp6(4),e.AsE("",s.job.firstName," ",s.job.lastName," "),e.xp6(3),e.Oqu(s.job.currentAverageRating),e.xp6(5),e.hij(" ",s.job.address," "),e.xp6(3),e.hij(" ",s.job.address," "),e.xp6(2),e.Q6J("ngIf",s.job.isLicenced),e.xp6(1),e.Q6J("ngIf",s.job.hasAbn),e.xp6(1),e.Q6J("ngIf",s.job.isRegisteredForGST),e.xp6(2),e.Q6J("ngForOf",s.job.subTrade),e.xp6(1),e.Q6J("ngIf",s.job.workImages.length>0),e.xp6(1),e.Q6J("ngIf",0===s.job.workImages.length))},dependencies:[p.sg,p.O5,p.rS],styles:[".job-card[_ngcontent-%COMP%]{width:375px;height:360px;background:white;border-radius:28px}.job-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:22px 0 0 17px;display:flex;gap:5px;flex-direction:row}.job-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{width:50px;height:50px}.job-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{padding-left:10px;color:#222;font-size:14px;font-weight:500;line-height:21.24px;word-wrap:break-word}.job-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]{color:#595959;font-size:14px;font-weight:400;line-height:21.24px;word-wrap:break-word}.job-card[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]{display:flex;gap:10px;flex-direction:row;color:#595959;font-size:14px;font-weight:400;word-wrap:break-word}.job-card[_ngcontent-%COMP%]   .checks[_ngcontent-%COMP%]{color:#595959;font-size:14px;font-weight:400;word-wrap:break-word}.job-card[_ngcontent-%COMP%]   .checks[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15px;height:15px;padding-right:7px}.job-card[_ngcontent-%COMP%]   .sub-trades[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:11px;margin-top:15.5px}.job-card[_ngcontent-%COMP%]   .sub-trades[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:3px 5px;background:#DFF5FF;border-radius:32px;justify-content:center;align-items:center;color:#222;font-size:12px;font-weight:400;word-wrap:break-word}.job-card[_ngcontent-%COMP%]   .work-images[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px;margin-bottom:18px}.job-card[_ngcontent-%COMP%]   .work-images[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:97px;height:87px;border-radius:6px}.job-card[_ngcontent-%COMP%]   .job-type[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:7px;padding:2.5px 17px}.job-card[_ngcontent-%COMP%]   .job-type[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#222;font-size:12px;font-weight:500;word-wrap:break-word;margin:0}.job-card[_ngcontent-%COMP%]   .job-type[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#595959;font-size:12px;font-weight:400;word-wrap:break-word}.job-card[_ngcontent-%COMP%]   .job-type[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding-bottom:15px}.job-card[_ngcontent-%COMP%]   .without-image[_ngcontent-%COMP%]{background:#F5F5F5;border-radius:14px;margin-right:18px;margin-bottom:18px;height:90px}"]}),o})();function te(t,o){1&t&&e._UZ(0,"app-job-card",13),2&t&&e.Q6J("job",o.$implicit)}function ne(t,o){if(1&t&&(e.TgZ(0,"div")(1,"p",10),e._uU(2,"100+ Tradies Available"),e.qZA(),e.TgZ(3,"div",11),e.YNc(4,te,1,1,"app-job-card",12),e.qZA()()),2&t){const i=e.oxw();e.xp6(4),e.Q6J("ngForOf",i.filteredJobs)}}const oe=[{path:"",component:(()=>{var t;class o{constructor(n,s){this.tradieService=n,this.store=s,this.tradies=[],this.subTradies=[],this.location="",this.selectedTrade=new Set,this.jobCards=[],this.filteredJobs=[],this.isLoading$=this.store.pipe((0,r.Ys)(k)),this.error$=this.store.pipe((0,r.Ys)(U)),this.store.pipe((0,r.Ys)(J)).subscribe(a=>{this.tradies=a}),this.store.pipe((0,r.Ys)(A)).subscribe(a=>{this.location=a}),this.store.pipe((0,r.Ys)(S)).subscribe(a=>{this.jobCards=a,this.filterJobs()})}ngOnInit(){0===this.tradies.length&&this.store.dispatch(u())}tradieChanged(n){[...this.tradies].forEach(a=>{a._id===n._id?(this.store.dispatch(w({trade:a})),this.selectedTrade.add(n.name)):this.selectedTrade.has(a.name)&&this.selectedTrade.delete(a.name)})}subTradie(n){this.subTradies=[],n.forEach(s=>{this.subTradies.push(s)}),this.filterJobs()}change(n){console.log(n.target.value),this.location=n.target.value}searchTradie(){this.store.dispatch(C({location:this.location})),this.store.dispatch(m({location:this.location,trades:Array.from(this.selectedTrade)}))}filterJobs(){0===this.subTradies.length?this.filteredJobs=this.jobCards:(this.filteredJobs=[],this.jobCards.forEach(n=>{for(let s=0;s<this.subTradies.length;s++)if(n.subTrade.includes(this.subTradies[s])){this.filteredJobs.push(n);break}}))}}return(t=o).\u0275fac=function(n){return new(n||t)(e.Y36(O),e.Y36(r.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tradies"]],decls:12,vars:3,consts:[[3,"tradies","selectUnselect","selectSubTrade"],[1,"search-container"],[1,"inputWithIcon"],["type","text","placeholder","Search by location",1,"location-input",3,"value","keyup"],["src","././assets/images/location.svg",1,"input-icon"],[1,"search",3,"click"],["src","././assets/images/search.svg"],[2,"width","20px","height","0","transform","rotate(-90deg)","border","0.50px #E0E0E0 solid"],[2,"color","#595959","font-size","14px","font-family","Roboto","font-weight","500","word-wrap","break-word","cursor","pointer"],[4,"ngIf"],[1,"count"],[1,"cards"],[3,"job",4,"ngFor","ngForOf"],[3,"job"]],template:function(n,s){1&n&&(e.TgZ(0,"app-tradie-card",0),e.NdJ("selectUnselect",function(c){return s.tradieChanged(c)})("selectSubTrade",function(c){return s.subTradie(c)}),e.qZA(),e.TgZ(1,"div",1)(2,"div",2)(3,"input",3),e.NdJ("keyup",function(c){return s.change(c)}),e.qZA(),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"button",5),e.NdJ("click",function(){return s.searchTradie()}),e._UZ(6,"img",6),e._uU(7," Search "),e.qZA(),e._UZ(8,"div",7),e.TgZ(9,"div",8),e._uU(10,"Reset All"),e.qZA()(),e.YNc(11,ne,5,1,"div",9)),2&n&&(e.Q6J("tradies",s.tradies),e.xp6(3),e.Q6J("value",s.location),e.xp6(8),e.Q6J("ngIf",s.jobCards.length>0))},dependencies:[p.sg,p.O5,L,ee],styles:[".tradies-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;overflow-x:scroll;gap:33px;margin-top:13px;padding:0 40px;border-bottom:1px solid #E2E2E2;height:77px}.inputWithIcon[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{padding-left:30px;border-radius:59px;border:.5px solid #D6D6D6}.inputWithIcon[_ngcontent-%COMP%]{position:relative}.inputWithIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;left:10;top:8px;padding:9px 8px;color:#aaa;transition:.3s}.location-input[_ngcontent-%COMP%]{height:36px;width:360px}.input-icon[_ngcontent-%COMP%]{position:absolute;left:5px;top:10px}.search[_ngcontent-%COMP%]{background:#611F69;box-shadow:0 2px 8px #7777778c;border-radius:58px;width:260px;height:36.5px;color:#fff;cursor:pointer}.search-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px;justify-content:center;align-items:center;height:60px;border-bottom:1px solid #E2E2E2;background-color:#fff}.count[_ngcontent-%COMP%]{color:#797979;font-size:14px;font-family:Roboto;font-weight:400;word-wrap:break-word;padding:22px 0 14px 40px}.cards[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:16px;padding-bottom:20px;padding-left:40px}"]}),o})()}];let ie=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[_.Bz.forChild(oe),_.Bz]}),o})();var se=d(4466);const ae=(0,r.Lq)({isLoading:!1,tradies:[],error:null,trades:[],location:"",selectedTrades:[]},(0,r.on)(f,(t,o)=>({...t,isLoading:!1,tradies:o.tradies})),(0,r.on)(b,(t,o)=>({...t,isLoading:!1,error:o.error})),(0,r.on)(u,t=>({...t,isLoading:!0})),(0,r.on)(T,(t,o)=>({...t,trades:o.trades,isLoading:!1})),(0,r.on)(C,(t,o)=>({...t,location:o.location})),(0,r.on)(f,(t,o)=>({...t,isLoading:!1,tradies:o.tradies})),(0,r.on)(w,(t,o)=>({...t,trades:t.trades.map((i,n)=>i._id===o.trade._id?{...i,checked:!0}:{...i,checked:!1})})));var g=d(2655),Z=d(5577),P=d(4004),M=d(262),y=d(9646);let ce=(()=>{var t;class o{constructor(n,s,a){this.actions$=n,this.tradieService=s,this.store=a,this.getTradies$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(m),(0,Z.z)(c=>this.tradieService.searchTradie(c.location,c.trades).pipe((0,P.U)(h=>f({tradies:h})),(0,M.K)(h=>(0,y.of)(b({error:h.message}))))))),this.getTrades$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(u),(0,Z.z)(()=>this.tradieService.getTrades().pipe((0,P.U)(c=>T({trades:c})),(0,M.K)(c=>(0,y.of)(j({error:c.message})))))))}}return(t=o).\u0275fac=function(n){return new(n||t)(e.LFG(g.eX),e.LFG(O),e.LFG(r.yh))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),o})(),de=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,ie,se.m,r.Aw.forFeature("tradies",ae),g.sQ.forFeature([ce])]}),o})()}}]);