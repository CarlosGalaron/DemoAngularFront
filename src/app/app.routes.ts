import { Routes } from '@angular/router';
import { EmpleListComponent } from './emple-list/emple-list.component';

export const routes: Routes = [
    { path: '/emple-list', element EmpleListComponent },
    { path: '/emple-create', element EmpleListComponent },
    
];
