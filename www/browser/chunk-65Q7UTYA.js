import{a as J}from"./chunk-CSJNSMV5.js";import{$a as be,A as F,Aa as M,B as x,Ba as N,Ca as pe,Da as j,Ea as de,Eb as Ne,Fa as he,Fb as je,G as s,Ga as R,Gb as Re,H as q,Hb as Ae,I as c,Ib as W,J as Q,Jb as $e,K as ne,L as T,La as ue,M as L,N as a,O as l,Oa as fe,P as m,Pa as A,Q as k,R as C,Ra as ge,S as Z,Sa as $,T as ae,Ta as Ce,U as se,Ua as ye,V as le,Va as B,W as d,Wa as ve,Y as b,Z as V,_ as ce,ab as Se,bb as Ie,cb as _e,db as we,eb as Fe,g as _,gb as xe,hb as G,ia as K,ib as O,j as te,ja as me,k as ie,kb as Te,lb as Le,m as oe,mb as ke,n as re,nb as U,ob as P,p as v,pb as Ve,qb as f,rb as De,tb as Ee,v as u,xa as X,xb as Me,y as n,ya as D,yb as y,z as w,za as E}from"./chunk-6EXSEE2M.js";import"./chunk-W24DN3KC.js";import"./chunk-KRUBFCQF.js";import"./chunk-QHMZK47R.js";import"./chunk-67DUN5SY.js";import"./chunk-4HBWAO4S.js";import"./chunk-G3CV3VGG.js";import"./chunk-2AGMVNYJ.js";import"./chunk-FFC3LYJY.js";import"./chunk-HNULSZ7G.js";import"./chunk-4WFVMWDK.js";import"./chunk-V6UEUHQD.js";import"./chunk-NMYJD6OP.js";import"./chunk-B43CU5JX.js";import"./chunk-TQEIIVVC.js";import"./chunk-LF5XB4YN.js";import{a as g,b as Y,g as ee}from"./chunk-PM2M367S.js";var z=(()=>{let e=class e{constructor(){this.httpClient=n(me),this.apiUrl=`${J.backendURL}/categories`,this.apiV2Url=`${J.backendURL}/v2/categories`,this.getCategories=t=>this.httpClient.get(this.apiUrl,{params:new K({fromObject:g({},t)})}),this.getAllCategories=t=>this.httpClient.get(this.apiV2Url,{params:new K({fromObject:g({},t)})}),this.upsertCategory=t=>this.httpClient.put(this.apiUrl,t),this.deleteCategory=t=>this.httpClient.delete(`${this.apiUrl}/${t}`)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var Be=(()=>{let e=class e{constructor(){this.loadingController=n(Le),this.showLoadingIndicator=t=>_(this.loadingController.create(t).then(i=>(i.present(),i)))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var H=(()=>{let e=class e{constructor(){this.toastController=n(ke),this.displaySuccessToast=t=>this.displayToast({message:t,duration:2e3,position:"bottom",color:"success",icon:"checkmark",buttons:[{icon:"close",role:"cancel"}]}),f({checkmark:Me,close:y,warning:$e})}displayWarningToast(t,i){console.error(t,i),this.displayToast({message:`${t}. ${i.error?.message||""}`,duration:3e3,position:"bottom",color:"warning",icon:"warning",buttons:[{icon:"close",role:"cancel"}]})}displayToast(t){this.toastController.create(t).then(i=>i.present())}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var Ge=(()=>{let e=class e{constructor(){this.actionSheetCtrl=n(Te),this.showDeletionConfirmation=t=>this.showActionSheet({header:"Confirm Deletion",subHeader:t,buttons:[{text:"Delete",role:"destructive",data:{action:"delete"},icon:"trash"},{text:"Cancel",role:"cancel",data:{action:"cancel"},icon:"close"}]},"delete"),this.showActionSheet=(t,i)=>_(this.actionSheetCtrl.create(t).then(r=>(r.present(),r.onDidDismiss())).then(({data:r})=>r?.action)).pipe(oe(r=>r===i)),f({close:y,trash:W})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var Pe=["nameInput"],Oe=(()=>{let e=class e{constructor(){this.categoryService=n(z),this.formBuilder=n(de),this.loadingIndicatorService=n(Be),this.modalCtrl=n(O),this.toastService=n(H),this.actionSheetService=n(Ge),this.categoryForm=this.formBuilder.group({id:[null],name:["",[X.required,X.maxLength(40)]]}),this.category={},f({close:y,save:Ne,text:Ae,trash:W})}ionViewDidEnter(){this.nameInput?.setFocus()}ionViewWillEnter(){this.categoryForm.patchValue(this.category)}cancel(){this.modalCtrl.dismiss(null,"cancel")}save(){this.loadingIndicatorService.showLoadingIndicator({message:"Saving category"}).subscribe(t=>{let i=this.categoryForm.value;this.categoryService.upsertCategory(i).pipe(v(()=>t.dismiss())).subscribe({next:()=>{this.toastService.displaySuccessToast("Category saved"),this.modalCtrl.dismiss(null,"refresh")},error:r=>this.toastService.displayWarningToast("Could not save category",r)})})}delete(){this.actionSheetService.showDeletionConfirmation("Are you sure you want to delete this category?").pipe(te(()=>this.loadingIndicatorService.showLoadingIndicator({message:"Deleting category"}))).subscribe(t=>{this.categoryService.deleteCategory(this.category.id).pipe(v(()=>t.dismiss())).subscribe({next:()=>{this.toastService.displaySuccessToast("Category deleted"),this.modalCtrl.dismiss(null,"refresh")},error:i=>this.toastService.displayWarningToast("Could not delete category",i)})})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=w({type:e,selectors:[["app-category-modal"]],viewQuery:function(i,r){if(i&1&&ae(Pe,5),i&2){let p;se(p=le())&&(r.nameInput=p.first)}},inputs:{category:"category"},standalone:!0,features:[V],decls:13,vars:3,consts:[["nameInput",""],[1,"ion-padding",3,"formGroup"],["name","text","slot","start"],["formControlName","name","maxlength","40","placeholder","Name","required","true"],[3,"click","disabled"],["slot","start","name","save"]],template:function(i,r){if(i&1){let p=k();d(0,`Category Modal
`),a(1,"ion-content",1)(2,"ion-item"),m(3,"ion-icon",2)(4,"ion-input",3,0),l()(),a(6,"ion-button",4),C("click",function(){return F(p),x(r.save())}),m(7,"ion-icon",5),d(8,` Save
`),l(),a(9,"ion-header")(10,"ion-toolbar")(11,"ion-title"),d(12),l()()()}i&2&&(s(),c("formGroup",r.categoryForm),s(5),c("disabled",r.categoryForm.pristine||r.categoryForm.invalid),s(6),b("",r.category.id?"Edit":"Add"," category"))},dependencies:[R,D,E,pe,j,M,N,ue,U,A,B,P,$,G,xe],encapsulation:2});let o=e;return o})();var We=(o,e)=>e.label,ze=(o,e)=>e.id,He=()=>[0,1,2,3,4,5,6,7,8,9];function qe(o,e){o&1&&m(0,"ion-progress-bar",0)}function Qe(o,e){o&1&&(a(0,"ion-item")(1,"ion-label"),m(2,"ion-skeleton-text",11),l()()),o&2&&(s(2),c("animated",!0))}function Ze(o,e){o&1&&T(0,Qe,3,1,"ion-item",null,ne),o&2&&L(ce(0,He))}function Je(o,e){o&1&&(a(0,"ion-item"),m(1,"ion-icon",12),a(2,"ion-label"),d(3," No categories found "),l()())}function Ke(o,e){if(o&1){let h=k();a(0,"ion-item",14),C("click",function(){F(h);let i=Z(2);return x(i.openModal())}),a(1,"ion-label"),d(2),l()()}if(o&2){let h=e.$implicit;c("detail",!0),s(2),b(" ",h.name," ")}}function Xe(o,e){if(o&1&&T(0,Ke,3,2,"ion-item",13,ze),o&2){let h=Z();L(h.categories)}}function Ye(o,e){if(o&1&&(a(0,"ion-select-option",8),d(1),l()),o&2){let h=e.$implicit;c("value",h.value),s(),b(" ",h.label," ")}}var Yt=(()=>{let e=class e{constructor(){this.modalCtrl=n(O),this.categoryService=n(z),this.toastService=n(H),this.formBuilder=n(he),this.categories=null,this.initialSort="name,asc",this.lastPageReached=!1,this.loading=!1,this.searchCriteria={page:0,size:25,sort:this.initialSort},this.sortOptions=[{label:"Created at (newest first)",value:"createdAt,desc"},{label:"Created at (oldest first)",value:"createdAt,asc"},{label:"Name (A-Z)",value:"name,asc"},{label:"Name (Z-A)",value:"name,desc"}],this.searchForm=this.formBuilder.group({name:[""],sort:[this.initialSort]}),f({swapVertical:Re,search:je,alertCircleOutline:Ee,add:De})}openModal(){return ee(this,null,function*(){let t=yield this.modalCtrl.create({component:Oe});t.present();let{role:i}=yield t.onWillDismiss();i==="refresh"&&this.reloadCategories()})}loadCategories(t){this.searchCriteria.name||delete this.searchCriteria.name,this.loading=!0,this.categoryService.getCategories(this.searchCriteria).pipe(v(()=>{this.loading=!1,t&&t()})).subscribe({next:i=>{(this.searchCriteria.page===0||!this.categories)&&(this.categories=[]),this.categories.push(...i.content),this.lastPageReached=i.last},error:i=>{this.toastService.displayWarningToast("Could not load categories",i)}})}ionViewDidEnter(){this.searchFormSubscription=this.searchForm.valueChanges.pipe(re(t=>ie(t.name?.length?400:0))).subscribe(t=>{this.searchCriteria=Y(g(g({},this.searchCriteria),t),{page:0}),this.loadCategories()})}ionViewWillLeave(){this.searchFormSubscription&&this.searchFormSubscription.unsubscribe()}ionViewDidLeave(){this.searchFormSubscription?.unsubscribe(),this.searchFormSubscription=void 0}loadNextCategoryPage(t){this.searchCriteria.page++,this.loadCategories(()=>{t.target.complete()})}reloadCategories(t){this.searchCriteria.page=0,this.categories=null,this.loadCategories(()=>{t.target.complete()})}onSortChange(t){this.searchCriteria.sort=t,this.reloadCategories({target:{}})}onSearchSubmit(){let{name:t,sort:i}=this.searchForm.value;this.searchCriteria.name=t,i!=null&&(this.searchCriteria.sort=i),this.reloadCategories({target:{}})}ngOnDestroy(){this.searchFormSubscription&&this.searchFormSubscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=w({type:e,selectors:[["app-category-list"]],standalone:!0,features:[V],decls:30,vars:6,consts:[["type","indeterminate"],[1,"ion-padding"],[3,"ionInfinite","disabled"],["slot","fixed",3,"ionRefresh","disabled"],[1,"ion-padding",3,"formGroup"],["size","12","size-sm","6"],["name","swap-vertical","slot","start"],["interface","popover","formControlName","sort"],[3,"value"],["name","search","slot","start"],["maxlength","40","placeholder","Search","formControlName","name",3,"clearInput"],[2,"width","80px",3,"animated"],["slot","start","name","alert-circle-outline"],["button","true",3,"detail"],["button","true",3,"click","detail"]],template:function(i,r){if(i&1&&(d(0,`Category List
`),a(1,"ion-header")(2,"ion-toolbar"),q(3,qe,1,0,"ion-progress-bar",0),l()(),a(4,"ion-content")(5,"ion-grid",1)(6,"ion-row")(7,"ion-col"),q(8,Ze,2,1)(9,Je,4,0,"ion-item")(10,Xe,2,0),l()()()(),a(11,"ion-content")(12,"ion-infinite-scroll",2),C("ionInfinite",function(I){return r.loadNextCategoryPage(I)}),m(13,"ion-infinite-scroll-content"),l()(),a(14,"ion-content")(15,"ion-refresher",3),C("ionRefresh",function(I){return r.reloadCategories(I)}),m(16,"ion-refresher-content"),l()(),a(17,"ion-content")(18,"ion-grid",4)(19,"ion-row")(20,"ion-col",5)(21,"ion-item"),m(22,"ion-icon",6),a(23,"ion-select",7),T(24,Ye,2,2,"ion-select-option",8,We),l()()(),a(26,"ion-col",5)(27,"ion-item"),m(28,"ion-icon",9)(29,"ion-input",10),l()()()()()),i&2){let p;s(3),Q(r.loading?3:-1),s(5),Q((p=r.categories==null?null:r.categories.length)===null?8:p===0?9:10),s(4),c("disabled",r.lastPageReached||r.loading),s(3),c("disabled",r.loading),s(3),c("formGroup",r.searchForm),s(6),L(r.sortOptions),s(5),c("clearInput",!0)}},dependencies:[R,D,E,j,M,N,$,G,be,_e,fe,B,ve,Fe,ge,A,U,Ce,ye,Se,Ie,Ve,P,we],encapsulation:2});let o=e;return o})();export{Yt as default};
