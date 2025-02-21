import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { WhatWeOfferComponent } from './pages/what-we-offer/what-we-offer.component';
import { WhyChooseUsComponent } from './pages/why-choose-us/why-choose-us.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { MessageDashboardComponent } from './pages/admin/message-dashboard/message-dashboard.component';
import { StockAnalysisComponent } from './pages/admin/stock-analysis/stock-analysis.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'what-we-offer', component: WhatWeOfferComponent },
    { path: 'why-choose-us', component: WhyChooseUsComponent },
    { path: 'insurance', component: InsuranceComponent },
    {
        path: 'admin',
        children: [
            { path: 'message-dashboard', component: MessageDashboardComponent },
            { path: 'stock-analysis', component: StockAnalysisComponent },
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
