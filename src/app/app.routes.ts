import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'users', // <-- SOLO CAMBIAS ESTO (antes ponía 'home')
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadComponent: () => import('./pages/users/users.page').then(m => m.UsersPage)
  },
];
