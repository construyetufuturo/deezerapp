"use strict";(self.webpackChunkexamen_angular_castillo=self.webpackChunkexamen_angular_castillo||[]).push([[457],{2457:(k,p,a)=>{a.r(p),a.d(p,{MusicModule:()=>P});var r=a(2382),s=a(9808),t=a(1223);var f=a(520);let u=(()=>{class n{constructor(e){this.http=e,this.url_api="https://api.deezer.com/"}callMusicFromDeezer(e){return this.http.get(`${this.url_api}/search?q=${e}`)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(f.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var c=a(8118);const h=function(){return["/music/home"]};let d=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-top-bar"]],decls:7,vars:2,consts:[["rel","stylesheet","href","/assets/fontawesome/css/font-awesome.min.css"],[1,"container"],[1,"button-box"],[3,"routerLink"],["aria-hidden","true",1,"fa","fa-arrow-left"],["aria-hidden","true","id","user",1,"fa","fa-user"],[1,"logo-box"]],template:function(e,o){1&e&&(t._UZ(0,"link",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"button",3),t._UZ(4,"i",4),t._UZ(5,"i",5),t.qZA(),t.qZA(),t._UZ(6,"div",6),t.qZA()),2&e&&(t.xp6(3),t.Q6J("routerLink",t.DdM(1,h)))},directives:[c.rH],styles:["*[_ngcontent-%COMP%]{vertical-align:baseline;font-weight:inherit;font-family:inherit;font-style:inherit;font-size:100%;border:0 none;outline:0;padding:0;margin:0}.container[_ngcontent-%COMP%]{width:100%;height:50px}.button-box[_ngcontent-%COMP%]{width:135px;height:100%;float:left;padding-top:5px}.button-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:40px;width:100px;border-radius:8px;cursor:pointer;background-color:#0275d8;font-weight:600;font-family:Arial,Helvetica,sans-serif}.logo-box[_ngcontent-%COMP%]{width:200px;height:100%;background-image:url(https://1000marcas.net/wp-content/uploads/2021/04/Deezer-logo.png);background-size:contain;background-repeat:no-repeat;float:left}i[_ngcontent-%COMP%]{float:left;padding-left:8px}#user[_ngcontent-%COMP%]{float:right;padding-right:16px}"]}),n})(),g=(()=>{class n{constructor(){this.itemtitle="",this.artistPicture="",this.albumTitle="",this.artistName="",this.duration=0,this.trackmp3="",this.minseg=""}ngOnInit(){this.minseg=Math.trunc(this.duration/60)+":"+Math.trunc(100*(this.duration/60-Math.trunc(this.duration/60)))}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-item-artista"]],inputs:{itemtitle:"itemtitle",artistPicture:"artistPicture",albumTitle:"albumTitle",artistName:"artistName",duration:"duration",trackmp3:"trackmp3"},decls:21,vars:6,consts:[["rel","stylesheet","href","/assets/fontawesome/css/font-awesome.min.css"],[1,"datum-container"],[1,"picture-container"],["alt","artist",3,"src"],[1,"detalle-container"],[1,"detalle-contenido"],[1,"titulos"],[1,"artista-tiempo"],["id","artistname"],["aria-hidden","true",1,"fa","fa-toggle-on"],["controls",""],["type","audio/mpeg",3,"src"]],template:function(e,o){1&e&&(t._UZ(0,"link",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"h2"),t._uU(8),t.qZA(),t.TgZ(9,"h3"),t._uU(10),t.qZA(),t.qZA(),t.TgZ(11,"div",7),t.TgZ(12,"h3",8),t._uU(13),t.qZA(),t.TgZ(14,"p"),t._UZ(15,"i",9),t._uU(16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"audio",10),t._UZ(18,"source",11),t._uU(19," Your browser does not support the audio element. "),t.qZA(),t._UZ(20,"audio"),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("src",o.artistPicture,t.LSH),t.xp6(5),t.hij("",o.itemtitle," "),t.xp6(2),t.Oqu(o.albumTitle),t.xp6(3),t.Oqu(o.artistName),t.xp6(3),t.hij(" ",o.minseg,""),t.xp6(2),t.Q6J("src",o.trackmp3,t.LSH))},styles:['*[_ngcontent-%COMP%]{vertical-align:baseline;font-weight:inherit;font-family:inherit;font-style:inherit;font-size:100%;border:0 none;outline:0;padding:0;margin:0}.datum-container[_ngcontent-%COMP%]{width:250px;height:420px;margin-bottom:18px;margin-top:18px}.picture-container[_ngcontent-%COMP%]{width:100%;height:250px;background-color:#00f;border-top-right-radius:7px;border-top-left-radius:7px}.picture-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;height:100%}.detalle-container[_ngcontent-%COMP%]{width:100%;height:170px;border-bottom-right-radius:7px;border-bottom-left-radius:7px;background:#fefefd;background:linear-gradient(to bottom,#fefefd 0%,#dce3c4 42%,#aebf76 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#fefefd",endColorstr="#aebf76",GradientType=0)}.detalle-contenido[_ngcontent-%COMP%]{width:100%;height:130px;font-family:Arial,Helvetica,sans-serif}audio[_ngcontent-%COMP%]{width:250px}h2[_ngcontent-%COMP%]{font-size:1.2em;font-weight:700;padding:8px}h3[_ngcontent-%COMP%]{font-size:small;padding:8px}.artista-tiempo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:small;padding:8px;float:right}.artista-tiempo[_ngcontent-%COMP%]{width:245px;height:30px}#artistname[_ngcontent-%COMP%]{float:left}.titulos[_ngcontent-%COMP%]{height:80px;width:100%}']}),n})();function _(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",6),t.TgZ(1,"button",7),t.NdJ("click",function(){const y=t.CHM(e).$implicit;return t.oxw().showBox(y)}),t._uU(2),t.qZA(),t.qZA()}if(2&n){const e=i.$implicit;t.xp6(2),t.Oqu(e)}}function b(n,i){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-item-artista",10),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("itemtitle",e.title)("artistPicture",e.artist.picture_medium)("albumTitle",e.album.title)("artistName",e.artist.name)("duration",e.duration)("trackmp3",e.preview)}}function x(n,i){if(1&n&&(t.TgZ(0,"div",8),t.YNc(1,b,2,6,"div",9),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.arregloDatum)}}function C(n,i){1&n&&(t.TgZ(0,"div",11),t.TgZ(1,"p"),t._uU(2,"No hay datos para mostrar"),t.qZA(),t.qZA())}let Z=(()=>{class n{constructor(e){this.servicioApi=e,this.letra="",this.mostrar=!1,this.arregloDatum=[],this.DatoRespuesta={data:this.arregloDatum,total:0,next:""},this.letras=["A","B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]}ngOnInit(){}showBox(e){this.letra=e,console.log(this.letra),this.mostrar=!0,this.loadApiData()}loadApiData(){this.servicioApi.callMusicFromDeezer(this.letra).subscribe({next:e=>{this.DatoRespuesta=e,this.arregloDatum=this.DatoRespuesta.data,console.log(e)},error:e=>{console.log(e)}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-buscarporletra"]],decls:9,vars:3,consts:[[1,"container-alfabeto"],[1,"title"],[1,"container-lyrics"],["class","letter",4,"ngFor","ngForOf"],["class","container-songs",4,"ngIf"],["id","sindatos",4,"ngIf"],[1,"letter"],[3,"click"],[1,"container-songs"],[4,"ngFor","ngForOf"],[3,"itemtitle","artistPicture","albumTitle","artistName","duration","trackmp3"],["id","sindatos"]],template:function(e,o){1&e&&(t._UZ(0,"app-top-bar"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"h1"),t._uU(4,"Buscador Por Letras"),t.qZA(),t.qZA(),t.TgZ(5,"div",2),t.YNc(6,_,3,1,"div",3),t.qZA(),t.YNc(7,x,2,1,"div",4),t.YNc(8,C,3,0,"div",5),t.qZA()),2&e&&(t.xp6(6),t.Q6J("ngForOf",o.letras),t.xp6(1),t.Q6J("ngIf",o.mostrar),t.xp6(1),t.Q6J("ngIf",!o.mostrar))},directives:[d,s.sg,s.O5,g],styles:["*[_ngcontent-%COMP%]{vertical-align:baseline;font-weight:inherit;font-family:inherit;font-style:inherit;font-size:100%;border:0 none;outline:0;padding:0;margin:0}.container-alfabeto[_ngcontent-%COMP%]{width:80%;margin:0 auto}.container-lyrics[_ngcontent-%COMP%]{width:100%;height:30px}.letter[_ngcontent-%COMP%]{width:30px;height:30px;float:left}.letter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:25px;height:25px;border-radius:3px;background-color:#5cb85c;color:#f7f7f7;font-weight:600;font-family:Arial,Helvetica,sans-serif;cursor:pointer}.container-songs[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;margin:0;padding:0}#sindatos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:25px;font-family:Times New Roman,Times,serif}h1[_ngcontent-%COMP%]{display:block;font-size:2em;margin:.67em 0;font-weight:700;font-family:Times New Roman,Times,serif}"]}),n})();function M(n,i){if(1&n&&(t.TgZ(0,"div"),t.TgZ(1,"span",10),t._uU(2),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.artistForm.value.artistName)}}function T(n,i){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-item-artista",13),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("itemtitle",e.title)("artistPicture",e.artist.picture_medium)("albumTitle",e.album.title)("artistName",e.artist.name)("duration",e.duration)("trackmp3",e.preview)}}function A(n,i){if(1&n&&(t.TgZ(0,"div",11),t.YNc(1,T,2,6,"div",12),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.arregloDatum)}}const O=[{path:"home",component:(()=>{class n{constructor(e){this.router=e}ngOnInit(){}closeSession(){this.router.navigateByUrl("/auth/login")}enviarBuscadorLetra(){this.router.navigateByUrl("/music/buscar-por-letra")}enviarBuscadorArtista(){this.router.navigateByUrl("/music/buscar-por-artista")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:16,vars:0,consts:[[1,"container"],[1,"title"],[1,"options"],["id","alfabeto",3,"click"],["id","buscador",3,"click"],[1,"img"],[1,"close"],["id","cerrar",3,"click"],["aria-hidden","true",1,"fa","fa-sign-out"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h2"),t._uU(3,"Te damos la Bienvenida"),t.qZA(),t.qZA(),t.TgZ(4,"div",2),t.TgZ(5,"h3"),t._uU(6,"Busca tus artistas y m\xfasica"),t.qZA(),t.TgZ(7,"button",3),t.NdJ("click",function(){return o.enviarBuscadorLetra()}),t._uU(8,"Alfabeto"),t.qZA(),t.TgZ(9,"button",4),t.NdJ("click",function(){return o.enviarBuscadorArtista()}),t._uU(10,"Buscador"),t.qZA(),t.qZA(),t._UZ(11,"div",5),t.TgZ(12,"div",6),t.TgZ(13,"button",7),t.NdJ("click",function(){return o.closeSession()}),t._uU(14,"Cerrar Sesion "),t._UZ(15,"i",8),t.qZA(),t.qZA(),t.qZA())},styles:["*[_ngcontent-%COMP%]{vertical-align:baseline;font-weight:inherit;font-family:inherit;font-style:inherit;font-size:100%;border:0 none;outline:0;padding:0;margin:0}.container[_ngcontent-%COMP%]{width:800px;margin:0 auto;text-align:center;font-family:Oswald,sans-serif;font-weight:200}.img[_ngcontent-%COMP%]{width:auto;height:355px;background-image:url(https://1000marcas.net/wp-content/uploads/2021/04/Deezer-logo.png);background-size:cover}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:105px;height:50px;margin:12px;border-radius:8px;cursor:pointer;font-size:16px;font-family:Arial,Helvetica,sans-serif;color:#fff;font-weight:600}.title[_ngcontent-%COMP%]{background-color:#284257;border-radius:12px}.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:25px;padding:12px;color:#fff}.options[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;padding:12px;font-style:italic}.close[_ngcontent-%COMP%]{margin-top:18px}#cerrar[_ngcontent-%COMP%]{background-color:#292b2c;width:135px}#alfabeto[_ngcontent-%COMP%]{background-color:#0275d8}#buscador[_ngcontent-%COMP%]{background-color:#e66236}@media screen and (max-width: 800px){.container[_ngcontent-%COMP%]{width:100%}.img[_ngcontent-%COMP%]{width:100%;background-size:contain;background-repeat:no-repeat}}"]}),n})()},{path:"buscar-por-letra",component:Z},{path:"buscar-por-artista",component:(()=>{class n{constructor(e){this.servicioapi=e,this.show=!1,this.arregloDatum=[],this.DatoRespuesta={data:this.arregloDatum,total:0,next:""},this.artistForm=new r.cw({artistName:new r.NI("",[r.kI.required])})}ngOnInit(){}loadDataApi(){this.servicioapi.callMusicFromDeezer(this.artistForm.value.artistName).subscribe({next:e=>{this.DatoRespuesta=e,this.arregloDatum=this.DatoRespuesta.data,console.log(e)},error:e=>{console.error(e)}}),this.show=!0}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-buscarpor-artista"]],decls:14,vars:3,consts:[[1,"buscar-por-artista-container"],[1,"encabezado-container"],[1,"title"],[4,"ngIf"],[1,"formulario-container"],["action","","id","form-principal",3,"formGroup","ngSubmit"],["type","text","id","search-input","name","search","placeholder","artist or musical group","formControlName","artistName"],["type","submit","id","submit"],["aria-hidden","true",1,"fa","fa-search"],["class","container-songs",4,"ngIf"],["id","userwriteen"],[1,"container-songs"],[4,"ngFor","ngForOf"],[3,"itemtitle","artistPicture","albumTitle","artistName","duration","trackmp3"]],template:function(e,o){1&e&&(t._UZ(0,"app-top-bar"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"h1"),t._uU(5,"Buscar por Artista "),t.YNc(6,M,3,1,"div",3),t.qZA(),t.qZA(),t.TgZ(7,"div",4),t.TgZ(8,"form",5),t.NdJ("ngSubmit",function(){return o.loadDataApi()}),t._UZ(9,"input",6),t.TgZ(10,"button",7),t._UZ(11,"i",8),t._uU(12," search"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(13,A,2,1,"div",9),t.qZA()),2&e&&(t.xp6(6),t.Q6J("ngIf",!o.artistForm.invalid),t.xp6(2),t.Q6J("formGroup",o.artistForm),t.xp6(5),t.Q6J("ngIf",o.show))},directives:[d,s.O5,r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,s.sg,g],styles:['*[_ngcontent-%COMP%]{vertical-align:baseline;font-weight:inherit;font-family:inherit;font-style:inherit;font-size:100%;border:0 none;outline:0;padding:0;margin:0}h1[_ngcontent-%COMP%]{display:block;font-size:2em;margin:.67em 0;font-weight:700;font-family:Times New Roman,Times,serif}.title[_ngcontent-%COMP%]{padding:12px}.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{border-bottom:2px solid #d6aec7;width:74%}.buscar-por-artista-container[_ngcontent-%COMP%]{width:80%;margin:0 auto}input[type=text][_ngcontent-%COMP%]{width:70%;margin:2px auto;display:inline-block;border-bottom:2px solid #5bc0de;border-radius:5px;height:37px;box-sizing:content-box;padding:0 20px}input[type=text][_ngcontent-%COMP%]:focus{border-bottom:3px solid #0275d8}#submit[_ngcontent-%COMP%]{cursor:pointer;width:84px;height:37px;background-color:#0275d8;color:#f2f2f2;border-radius:5px;margin-left:7px}.encabezado-container[_ngcontent-%COMP%]{background:#ffffff;background:linear-gradient(to bottom,#ffffff 0%,#f6f6f6 47%,#ededed 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ededed",GradientType=0)}#form-principal[_ngcontent-%COMP%]{padding:12px}.container-songs[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;margin:0;padding:0}#userwriteen[_ngcontent-%COMP%]{display:block;font-size:1em;font-family:Times New Roman,Times,serif;float:right}']}),n})()}];let w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(O)],c.Bz]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.ez,w,r.UX]]}),n})()}}]);