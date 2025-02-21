import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MessageDashboardComponent } from './pages/admin/message-dashboard/message-dashboard.component';
import { StockAnalysisComponent } from './pages/stock-analysis/stock-analysis.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact-us', component: ContactUsComponent }, 
    { path: 'stock-analysis', component: StockAnalysisComponent },
    {
        path: 'admin',
        children: [
            { path: 'message-dashboard', component: MessageDashboardComponent },
        ]
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
