import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InternationalComponent } from './international/international.component';
import { BrazilianComponent } from './brazilian/brazilian.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule } from '@angular/router/src/router_module';

const APP_ROUTES: Routes = [
    { path:'', component: HomeComponent },
    { path:'international', component:InternationalComponent },
    { path:'brazilian', component:BrazilianComponent }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);