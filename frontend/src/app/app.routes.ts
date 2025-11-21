import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';

export const appRoutes: Routes = [
  // ---------- Auth layout (Sign in / Sign up) ----------
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },

  {
    path: '',
    // Auth layout - shows only auth-related pages (no sidebar)
    data: { layout: 'auth' },
    children: [
      {
        path: 'login',
        loadComponent: () => import('./auth/login/login')
          .then(m => m.Login),
        title: 'Sign In',
        data: { breadcrumb: 'Sign In' }
      },
      {
        path: 'register',
        loadComponent: () => import('./auth/register/register')
          .then(m => m.Register),
        title: 'Register',
        data: { breadcrumb: 'Register' }
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./auth/forgot-password/forgot-password')
          .then(m => m.ForgotPassword),
        title: 'Forgot Password',
        data: { breadcrumb: 'Forgot Password' }
      }
    ]
  },

  // ---------- App Shell (protected) ----------
  {
    path: '',
    canActivate: [AuthGuard],
    // ShellComponent is a standalone layout: header, sidebar, footer
    loadComponent: () => import('./core/layout/shell/shell').then(m => m.Shell),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard')
          .then(m => m.Dashboard),
        title: 'Dashboard',
        data: { breadcrumb: 'Dashboard', requiresAuth: true }
      },

      {
        path: 'users',
        title: 'Users',
        data: { breadcrumb: 'Users' },
        // Example: lazy-load a feature module that exports routes (could be a set of standalone components)
        loadChildren: () => import('./pages/users/users.routes')
          .then(m => m.userRoutes)
      },

      {
        path: 'tables',
        loadComponent: () => import('./pages/tables/tables')
          .then(m => m.Tables),
        title: 'Tables',
        data: { breadcrumb: 'Tables' }
      },

      {
        path: 'charts',
        loadComponent: () => import('./pages/charts/charts')
          .then(m => m.Charts),
        title: 'Charts',
        data: { breadcrumb: 'Charts' }
      },

      {
        path: 'settings',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/settings/profile-settings.component')
              .then(m => m.ProfileSettingsComponent),
            title: 'Settings',
            data: { breadcrumb: 'Profile Settings' }
          },
          {
            path: 'admin',
            canActivate: [AdminGuard],
            loadComponent: () => import('./pages/settings/admin-settings.component')
              .then(m => m.AdminSettingsComponent),
            title: 'Admin Settings',
            data: { breadcrumb: 'Admin Settings' }
          }
        ]
      }
    ]
  },

  // ---------- 404 ----------
  {
    path: 'not-found',
    loadComponent: () => import('./pages/not-found/not-found')
      .then(m => m.NotFound),
    title: '404 Not Found'
  },

  {
    path: '**',
    redirectTo: 'not-found'
  }
];