import { Routes } from '@angular/router';

import { DirectivesComponent } from './MyComponents/directives/directives.component';
import { CommunicationComponent } from './MyComponents/communication/communication.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { VueComponent } from './MyComponents/vue/vue.component';
import { ReactComponent } from './MyComponents/react/react.component';
import { AngularComponent } from './MyComponents/angular/angular.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'communication', component: CommunicationComponent },
    { path: 'angular', component: AngularComponent },
    { path: 'react', component: ReactComponent },
    { path: 'vue', component: VueComponent },
    { path: '', redirectTo: '/angular', pathMatch: 'full' }
];