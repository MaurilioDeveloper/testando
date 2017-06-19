import { NoticeComponent } from './home/notice/notice.component';
import { NoticeListComponent } from './home/notice/notice-list.component';
import { ModelComponent } from './model/model.component';
import { NewsAdminComponent } from './admin/news/news_admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component'; //import home components
import { PageNotFoundComponent } from './not-found.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './login/auth-guard.service';
import { SubmissaoComponent } from './submissao/submissao.component';
import { CommissionLevelComponent } from './commission_level/commission_level.component';
import { MandatoryComponent } from './services/mandatory/mandatory.component';
import { AvailableComponent } from './services/available/available.component';
import { MyAgreementComponent } from './my_agreement/my_agreement.component';
import { MyProfileComponent } from './profile/my_profile.component';
import { ResetPasswordComponent } from './reset_password/reset_password.component';
import { SimulationComponent } from './simulation/simulation.component';

import { PromotionalImagesComponent } from './promotional_images/promotional_images.component';
import { ProposalUpdateComponent } from './proposal_update/proposal_update.component';
import { DealerProposalComponent } from './dealer_proposal/dealer_proposal.component';

const appRoutes: Routes = [
    {
        path: 'simulation',
        component: SimulationComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'model',
        component: ModelComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'dealer_proposal',
        component: DealerProposalComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'proposal_update',
        component: ProposalUpdateComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'promotional_images',
        component: PromotionalImagesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'news_admin',
        component: NewsAdminComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'reset_password',
        component: ResetPasswordComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'available',
        component: AvailableComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'submissao',
        component: SubmissaoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'commission_level',
        component: CommissionLevelComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'mandatory',
        component: MandatoryComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'my_agreement',
        component: MyAgreementComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: MyProfileComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'notice/:id',
        component: NoticeComponent,        
        canActivate: [AuthGuard]
    },
    
    { path: '**', component: PageNotFoundComponent }


];

export const AppRoutes = {
    //  routes: RouterModule.forRoot(appRoutes),
    components: [
        HomeComponent,
        NewsAdminComponent,
        AvailableComponent,
        CommissionLevelComponent,
        MyAgreementComponent,
        MyProfileComponent,
        MandatoryComponent,
        SimulationComponent,
        PageNotFoundComponent,
        ResetPasswordComponent,
        SubmissaoComponent,
        PromotionalImagesComponent,
        ModelComponent,
        ProposalUpdateComponent,
        DealerProposalComponent,
        NoticeListComponent,
        NoticeComponent
    ]
};

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            //    { preloadingStrategy: SelectivePreloadingStrategy }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CanDeactivateGuard,
        //   SelectivePreloadingStrategy
    ]
})
export class AppRoutingModule { }