(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t){function r(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=149},150:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(216))},151:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(218))},152:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(220))},153:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(154);var n=r(207),o=r(208);n.platformBrowserDynamic().bootstrapModule(o.AppModule)},154:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(155),r(178),r(206)},208:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=r(59),s=r(70),a=r(97),c=r(209),u=r(210),l=r(215),f=r(224),p=r(227),d=r(150),A=r(151),h=r(152),g=function(){function e(){}return e=n([o.NgModule({imports:[i.BrowserModule,s.ReactiveFormsModule,c.NgxCaptchaModule,a.HttpClientModule,l.routing],declarations:[u.AppComponent,f.AlertComponent,d.HomeComponent,A.LoginComponent,h.RegisterComponent],providers:[{provide:a.HTTP_INTERCEPTORS,useClass:p.JwtInterceptor,multi:!0},{provide:a.HTTP_INTERCEPTORS,useClass:p.ErrorInterceptor,multi:!0}],bootstrap:[u.AppComponent]})],e)}();t.AppModule=g},210:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(76),a=r(56),c=function(){function e(e,t){var r=this;this.router=e,this.authenticationService=t,this.authenticationService.currentUser.subscribe(function(e){return r.currentUser=e})}return e.prototype.logout=function(){this.authenticationService.logout(),this.router.navigate(["/login"])},e=n([i.Component({selector:"app",template:r(214)}),o("design:paramtypes",[s.Router,a.AuthenticationService])],e)}();t.AppComponent=c},211:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(76),a=r(57),c=function(){function e(e){var t=this;this.router=e,this.subject=new a.Subject,this.keepAfterNavigationChange=!1,e.events.subscribe(function(e){e instanceof s.NavigationStart&&(t.keepAfterNavigationChange?t.keepAfterNavigationChange=!1:t.subject.next())})}return e.prototype.success=function(e,t){void 0===t&&(t=!1),this.keepAfterNavigationChange=t,this.subject.next({type:"success",text:e})},e.prototype.error=function(e,t){void 0===t&&(t=!1),this.keepAfterNavigationChange=t,this.subject.next({type:"error",text:e})},e.prototype.getMessage=function(){return this.subject.asObservable()},e=n([i.Injectable({providedIn:"root"}),o("design:paramtypes",[s.Router])],e)}();t.AlertService=c},212:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(97),a=r(57),c=r(42),u=function(){function e(e){this.http=e,this.currentUserSubject=new a.BehaviorSubject(JSON.parse(localStorage.getItem("currentUser"))),this.currentUser=this.currentUserSubject.asObservable()}return Object.defineProperty(e.prototype,"currentUserValue",{get:function(){return this.currentUserSubject.value},enumerable:!0,configurable:!0}),e.prototype.login=function(e,t,r){var n=this;return this.http.post("https://3x7ebaoq9g.execute-api.us-east-1.amazonaws.com/Prod/users/authenticate",{username:e,password:t,totp:r}).pipe(c.map(function(e){return e&&e.token&&(localStorage.setItem("currentUser",JSON.stringify(e)),n.currentUserSubject.next(e)),e}))},e.prototype.logout=function(){localStorage.removeItem("currentUser"),this.currentUserSubject.next(null)},e=n([i.Injectable({providedIn:"root"}),o("design:paramtypes",[s.HttpClient])],e)}();t.AuthenticationService=u},213:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(97),a=function(){function e(e){this.http=e}return e.prototype.getAll=function(){return this.http.get("https://3x7ebaoq9g.execute-api.us-east-1.amazonaws.com/Prod/users")},e.prototype.getById=function(e){return this.http.get("https://3x7ebaoq9g.execute-api.us-east-1.amazonaws.com/Prod/users/"+e)},e.prototype.register=function(e){return this.http.post("https://3x7ebaoq9g.execute-api.us-east-1.amazonaws.com/Prod/users/register",e)},e.prototype.update=function(e){return this.http.put("https://3x7ebaoq9g.execute-api.us-east-1.amazonaws.com/Prod/users/"+e.id,e)},e.prototype.delete=function(e){return this.http.delete("https://3x7ebaoq9g.execute-api.us-east-1.amazonaws.com/Prod/users/"+e)},e=n([i.Injectable({providedIn:"root"}),o("design:paramtypes",[s.HttpClient])],e)}();t.UserService=a},214:function(e,t){e.exports='\x3c!-- nav --\x3e\n<nav class="navbar navbar-expand navbar-dark bg-dark" *ngIf="currentUser">\n    <div class="navbar-nav">\n        <a class="nav-item nav-link" routerLink="/">Home</a>\n        <a class="nav-item nav-link" (click)="logout()">Logout</a>\n    </div>\n</nav>\n\n\x3c!-- main app container --\x3e\n<div class="jumbotron">\n    <div class="container">\n        <div class="row">\n            <div class="col-sm-6 offset-sm-3">\n                <alert></alert>\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>\n\n\x3c!-- credits --\x3e\n<div class="text-center">\n    <p>\n        <a href="https://github.com/clovis-sensedia" target="_top">Sensedia Cliente TOTP em Angular 7</a>\n    </p> \n</div>'},215:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(76),o=r(150),i=r(151),s=r(152),a=r(222),c=[{path:"",component:o.HomeComponent,canActivate:[a.AuthGuard]},{path:"login",component:i.LoginComponent},{path:"register",component:s.RegisterComponent},{path:"**",redirectTo:""}];t.routing=n.RouterModule.forRoot(c)},216:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(42),a=r(56),c=function(){function e(e,t){var r=this;this.authenticationService=e,this.userService=t,this.users=[],this.currentUserSubscription=this.authenticationService.currentUser.subscribe(function(e){r.currentUser=e})}return e.prototype.ngOnInit=function(){this.loadAllUsers()},e.prototype.ngOnDestroy=function(){this.currentUserSubscription.unsubscribe()},e.prototype.deleteUser=function(e){var t=this;this.userService.delete(e).pipe(s.first()).subscribe(function(){t.loadAllUsers()})},e.prototype.loadAllUsers=function(){var e=this;this.userService.getAll().pipe(s.first()).subscribe(function(t){e.users=t})},e=n([i.Component({template:r(217)}),o("design:paramtypes",[a.AuthenticationService,a.UserService])],e)}();t.HomeComponent=c},217:function(e,t){e.exports='<h1>Hi {{currentUser.firstName}}!</h1>\n<p>You\'re logged in with Angular 7!!</p>\n<h3>All registered users:</h3>\n<ul>\n    <li *ngFor="let user of users">\n        {{user.username}}\n        - <a (click)="deleteUser(user.id)" class="text-danger">Delete</a>\n    </li>\n</ul>'},218:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(76),a=r(70),c=r(42),u=r(56),l=function(){function e(e,t,r,n,o){this.formBuilder=e,this.route=t,this.router=r,this.authenticationService=n,this.alertService=o,this.loading=!1,this.submitted=!1,this.authenticationService.currentUserValue&&this.router.navigate(["/"])}return e.prototype.ngOnInit=function(){this.loginForm=this.formBuilder.group({username:["",a.Validators.required],password:["",a.Validators.required],totp:["",a.Validators.required]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"},Object.defineProperty(e.prototype,"f",{get:function(){return this.loginForm.controls},enumerable:!0,configurable:!0}),e.prototype.onSubmit=function(){var e=this;this.submitted=!0,this.loginForm.invalid||(this.loading=!0,this.authenticationService.login(this.f.username.value,this.f.password.value,this.f.totp.value).pipe(c.first()).subscribe(function(t){e.router.navigate([e.returnUrl])},function(t){e.alertService.error(t),e.loading=!1}))},e=n([i.Component({template:r(219)}),o("design:paramtypes",[a.FormBuilder,s.ActivatedRoute,s.Router,u.AuthenticationService,u.AlertService])],e)}();t.LoginComponent=l},219:function(e,t){e.exports='<h2>Login</h2>\n<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n    <div class="form-group">\n        <label for="username">Username</label>\n        <input type="text" formControlName="username" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.username.errors }" />\n        <div *ngIf="submitted && f.username.errors" class="invalid-feedback">\n            <div *ngIf="f.username.errors.required">Username is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="password">Password</label>\n        <input type="password" formControlName="password" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.password.errors }" />\n        <div *ngIf="submitted && f.password.errors" class="invalid-feedback">\n            <div *ngIf="f.password.errors.required">Password is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="totp">Senha Google Authenticator</label>\n        <input type="text" formControlName="totp" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.totp.errors }" />\n        <div *ngIf="submitted && f.totp.errors" class="invalid-feedback">\n            <div *ngIf="f.totp.errors.required">Senha Google Authenticator é obrigatória</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <button [disabled]="loading" class="btn btn-primary">Login</button>\n        <img *ngIf="loading" class="pl-3" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />\n        <a routerLink="/register" class="btn btn-link">Register</a>\n    </div>\n</form>'},220:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(76),a=r(70),c=r(42),u=r(56),l=function(){function e(e,t,r,n,o){this.formBuilder=e,this.router=t,this.authenticationService=r,this.userService=n,this.alertService=o,this.loading=!1,this.submitted=!1,this.totpkeyUrl="",this.captchaExpired=!1,this.captchaSuccess=!1,this.siteKey="6LeTUpAUAAAAAHWMlqAIV6PJcU3Qt9cIINsApalP",this.authenticationService.currentUserValue&&this.router.navigate(["/"])}return e.prototype.ngOnInit=function(){this.registerForm=this.formBuilder.group({username:["",a.Validators.required],password:["",[a.Validators.required,a.Validators.minLength(6)]],totpkey:["",a.Validators.required],recaptcha:["",a.Validators.required]})},e.prototype.handleReset=function(){this.captchaExpired=!1,this.captchaSuccess=!1},e.prototype.handleSuccess=function(e){this.captchaSuccess=!0},e.prototype.handleLoad=function(){},e.prototype.handleExpire=function(){this.captchaExpired=!0},e.prototype.gerarKey=function(){var e=this;crypto.subtle.generateKey({name:"HMAC",hash:{name:"SHA-1"}},!0,["sign","verify"]).then(function(t){var r=e;window.crypto.subtle.exportKey("raw",t).then(function(e){var t=new Int8Array(e),n=r.toBase32(t);r.registerForm.patchValue({totpkey:n})})})},e.prototype.gerarQR=function(){this.totpkeyUrl="https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=200x200&chld=M|0&cht=qr&chl=otpauth://totp/SensediaTest%3Fsecret%3D"+this.registerForm.value.totpkey},Object.defineProperty(e.prototype,"f",{get:function(){return this.registerForm.controls},enumerable:!0,configurable:!0}),e.prototype.onSubmit=function(){var e=this;this.submitted=!0,this.registerForm.invalid||(this.loading=!0,this.userService.register(this.registerForm.value).pipe(c.first()).subscribe(function(t){e.alertService.success("Registration successful",!0),e.router.navigate(["/login"])},function(t){e.alertService.error(t),e.loading=!1}))},e.prototype.toBase32=function(e){var t,r,n="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",o=3,i=0,s="";for(r=0;r<e.length;r++)s+=n[31&(i|(t=e[r])>>o)],o>5&&(s+=n[31&t>>(o-=5)]),i=t<<(o=5-o),o=8-o;return 3!==o&&(s+=n[31&i]),s},e=n([i.Component({template:r(221)}),o("design:paramtypes",[a.FormBuilder,s.Router,u.AuthenticationService,u.UserService,u.AlertService])],e)}();t.RegisterComponent=l},221:function(e,t){e.exports='<h2>Register</h2>\n<form [formGroup]="registerForm" (ngSubmit)="onSubmit()">\n    <div class="form-group">\n        <label for="username">Username</label>\n        <input type="text" formControlName="username" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.username.errors }" />\n        <div *ngIf="submitted && f.username.errors" class="invalid-feedback">\n            <div *ngIf="f.username.errors.required">Username is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="password">Password</label>\n        <input type="password" formControlName="password" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.password.errors }" />\n        <div *ngIf="submitted && f.password.errors" class="invalid-feedback">\n            <div *ngIf="f.password.errors.required">Password is required</div>\n            <div *ngIf="f.password.errors.minlength">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <button [disabled]="!registerForm.value.username || registerForm.value.username.length < 6" type="button" (click)="gerarKey()" class="btn btn-primary">Gerar chave Google Authenticator</button>\n\t</div>\n    <div class="form-group">\n        <label for="totpkey">Chave para Google Authenticator</label>\n        <input type="text" formControlName="totpkey" class="form-control" readonly />\n    </div>\n    <div class="form-group">\n        <button [disabled]="!registerForm.value.totpkey || registerForm.value.totpkey.length < 8" type="button" (click)="gerarQR()" class="btn btn-primary">Obter QRCode</button>\n        <img *ngIf="totpkeyUrl.length > 1" [src]="totpkeyUrl" />\n\t</div>\n\t\n    <div class="form-group">\n  <ngx-recaptcha2 #captchaElem\n    [siteKey]="siteKey"\n    (reset)="handleReset()"\n    (expire)="handleExpire()"\n    (load)="handleLoad()"\n    (success)="handleSuccess($event)"\n    [useGlobalDomain]="false"\n    [size]="size"\n    [hl]="lang"\n    [theme]="theme"\n    [type]="type"\n    formControlName="recaptcha">\n  </ngx-recaptcha2>\n\t</div>\n\t\n\t\n    <div class="form-group">\n        <button [disabled]="loading || captchaExpired || !captchaSuccess" class="btn btn-primary">Register</button>\n        <img *ngIf="loading" class="pl-3" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />\n        <a routerLink="/login" class="btn btn-link">Cancel</a>\n    </div>\n</form>\n'},222:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(223))},223:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(76),a=r(56),c=function(){function e(e,t){this.router=e,this.authenticationService=t}return e.prototype.canActivate=function(e,t){return!!this.authenticationService.currentUserValue||(this.router.navigate(["/login"],{queryParams:{returnUrl:t.url}}),!1)},e=n([i.Injectable({providedIn:"root"}),o("design:paramtypes",[s.Router,a.AuthenticationService])],e)}();t.AuthGuard=c},224:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(225))},225:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(56),a=function(){function e(e){this.alertService=e}return e.prototype.ngOnInit=function(){var e=this;this.subscription=this.alertService.getMessage().subscribe(function(t){e.message=t})},e.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},e=n([i.Component({selector:"alert",template:r(226)}),o("design:paramtypes",[s.AlertService])],e)}();t.AlertComponent=a},226:function(e,t){e.exports="<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"},227:function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(228)),n(r(229)),n(r(230))},228:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(57),a=r(42),c=r(56),u=function(){function e(e){this.authenticationService=e}return e.prototype.intercept=function(e,t){var r=this;return t.handle(e).pipe(a.catchError(function(e){401===e.status&&(r.authenticationService.logout(),location.reload(!0));var t=e.error.message||e.statusText;return s.throwError(t)}))},e=n([i.Injectable(),o("design:paramtypes",[c.AuthenticationService])],e)}();t.ErrorInterceptor=u},229:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(56),a=function(){function e(e){this.authenticationService=e}return e.prototype.intercept=function(e,t){var r=this.authenticationService.currentUserValue;return r&&r.token&&(e=e.clone({setHeaders:{Authorization:"Bearer "+r.token}})),t.handle(e)},e=n([i.Injectable(),o("design:paramtypes",[s.AuthenticationService])],e)}();t.JwtInterceptor=a},230:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=r(97),a=r(57),c=r(42),u=function(){function e(){}return e.prototype.intercept=function(e,t){var r=JSON.parse(localStorage.getItem("users"))||[];return a.of(null).pipe(c.mergeMap(function(){if(e.url.endsWith("/users/authenticate")&&"POST"===e.method){var n=r.filter(function(t){return t.username===e.body.username&&t.password===e.body.password});if(n.length){var o={id:(l=n[0]).id,username:l.username,firstName:l.firstName,lastName:l.lastName,token:"fake-jwt-token"};return a.of(new s.HttpResponse({status:200,body:o}))}return a.throwError({error:{message:"Username or password is incorrect"}})}if(e.url.endsWith("/users")&&"GET"===e.method)return"Bearer fake-jwt-token"===e.headers.get("Authorization")?a.of(new s.HttpResponse({status:200,body:r})):a.throwError({status:401,error:{message:"Unauthorised"}});if(e.url.match(/\/users\/\d+$/)&&"GET"===e.method){if("Bearer fake-jwt-token"===e.headers.get("Authorization")){var i=e.url.split("/"),c=parseInt(i[i.length-1]),u=r.filter(function(e){return e.id===c}),l=u.length?u[0]:null;return a.of(new s.HttpResponse({status:200,body:l}))}return a.throwError({status:401,error:{message:"Unauthorised"}})}if(e.url.endsWith("/users/register")&&"POST"===e.method){var f=e.body;return r.filter(function(e){return e.username===f.username}).length?a.throwError({error:{message:'Username "'+f.username+'" is already taken'}}):(f.id=r.length+1,r.push(f),localStorage.setItem("users",JSON.stringify(r)),a.of(new s.HttpResponse({status:200})))}if(e.url.match(/\/users\/\d+$/)&&"DELETE"===e.method){if("Bearer fake-jwt-token"===e.headers.get("Authorization")){i=e.url.split("/");for(var p=parseInt(i[i.length-1]),d=0;d<r.length;d++){if((l=r[d]).id===p){r.splice(d,1),localStorage.setItem("users",JSON.stringify(r));break}}return a.of(new s.HttpResponse({status:200}))}return a.throwError({status:401,error:{message:"Unauthorised"}})}return t.handle(e)})).pipe(c.materialize()).pipe(c.delay(500)).pipe(c.dematerialize())},e=n([i.Injectable(),o("design:paramtypes",[])],e)}();t.FakeBackendInterceptor=u,t.fakeBackendProvider={provide:s.HTTP_INTERCEPTORS,useClass:u,multi:!0}},56:function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(211)),n(r(212)),n(r(213))}},[[153,1,2]]]);
//# sourceMappingURL=main.js.map