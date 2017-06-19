import { BrlDirective } from './commons/value/brlDiretive.directive';
import { MoneyMaskModule } from './diretive/money-mask.module';
import { MoneyMaskDirective } from './diretive/money-mask.directive';
import { MoneyInputService } from './diretive/money-input.service';
import { BrlPipe } from './commons/value/brlpipe';
import { CnpjPipe } from './my_agreement/cnpj.pipe';
import { CpfPipe } from './my_agreement/cpf.pipe';
import { SimulationComponents, SimulationModule } from './simulation/simulation.module';
import { MenuModule, MenuComponents } from './menu/menu.module';
import { Router } from '@angular/router';
import { AuthGuard } from './login/auth-guard.service';
import { FormLoginComponent } from "./login/form-login.component";
import { NgModule , CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { StepperComponent } from './stepper/stepper.component';
import { BrowserModule }                from '@angular/platform-browser';
import { HttpModule, JsonpModule }      from '@angular/http';
import { FormsModule, 
         ReactiveFormsModule }          from "@angular/forms";
import { FlexLayoutModule }             from '@angular/flex-layout';

import { MaterialModule, MdCardModule, 
    MdButtonModule, MdIconModule, 
    MdIconRegistry, MdDatepickerModule, 
    MdNativeDateModule,OverlayContainer }                from '@angular/material';

import {BrowserAnimationsModule}        from '@angular/platform-browser/animations';

import { AppComponent }                 from './app.component';
import { AppRoutingModule, AppRoutes }  from './app.routing';
import { AppService }                   from './app.service';
import { ToastrModule, ToastrService }  from 'ngx-toastr';
import { LoaderService }                from './app.spinner';
import { AppMessage }                   from './app.message';
import { LoginRoutingModule, 
            LoginRoutes }               from './login/login-routing.module';
import { PageNotFoundComponent }        from './not-found.component';
import { OmegaMaskDirective } from './diretive/mask.diretive'

import { NglModule }                    from 'ng-lightning/ng-lightning';


import { TRANSLATION_PROVIDERS, 
    TranslatePipe, TranslateService }   from './translate';
import { MenuAdminComponent } from './admin/menu/menu-admin.component';
import { QuillModule } from 'ngx-quill';

    
@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  ReactiveFormsModule, 
                  LoginRoutingModule,
                  MenuModule, 
                  SimulationModule,
                  AppRoutingModule, 
                  MaterialModule, 
                  HttpModule, 
                  JsonpModule, 
                  MdCardModule, 
                  MdButtonModule, 
                  MdIconModule, 
                  MdDatepickerModule, 
                  MdNativeDateModule, 
                  QuillModule,
                  FlexLayoutModule,
                  ToastrModule.forRoot({timeOut:0}),
                  BrowserAnimationsModule, NglModule], //other modules the app depends on
  declarations: [ AppComponent, 
                  TranslatePipe, 
                  AppRoutes.components, 
                  LoginRoutes.components,
                  FormLoginComponent,  
                  StepperComponent,
                  MenuAdminComponent,
                  OmegaMaskDirective,
                  CpfPipe,
                  CnpjPipe,
                  MenuComponents.components,
                  SimulationComponents.components
                ], // declare all directives and components
  providers:    [ AppService,
                  AuthGuard,
                  MdIconRegistry, 
                  TRANSLATION_PROVIDERS, 
                  TranslateService, 
                  AppMessage, 
                  ToastrService,
                  LoaderService ,BrlPipe],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap :   [ AppComponent ], // root component to bootstarp
  exports:      [
                  OmegaMaskDirective
                ]
})
export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
        //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}