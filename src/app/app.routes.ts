import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component:AboutComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'history', loadChildren: () => import('./modules/history/history.module').then(m => m.HistoryModule) },
  { path: 'wildlife', loadChildren: () => import('./modules/wildlife/wildlife.module').then(m => m.WildlifeModule) },
  { path: 'adventure', loadChildren: () => import('./modules/adventure/adventure.module').then(m => m.AdventureModule) },
  { path: 'eco-tourism', loadChildren: () => import('./modules/eco-tourism/eco-tourism.module').then(m => m.EcoTourismModule) },
  { path: 'budget-planner', loadChildren: () => import('./modules/budget-planner/budget-planner.module').then(m => m.BudgetPlannerModule) },
  { path: 'shopping', loadChildren: () => import('./modules/shopping/shopping.module').then(m => m.ShoppingModule) },
  { path: 'map', loadChildren: () => import('./modules/map/map.module').then(m => m.MapModule) },
  { path: '**', redirectTo: 'home' }
];

// import { Routes } from '@angular/router';

// export const routes: Routes = [
//   { 
//     path: 'home', 
//     loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) 
//   },
//   { 
//     path: 'history', 
//     loadChildren: () => import('./modules/history/history.module').then(m => m.HistoryModule) 
//   },
//   { 
//     path: 'wildlife', 
//     loadChildren: () => import('./modules/wildlife/wildlife.module').then(m => m.WildlifeModule) 
//   },
//   { 
//     path: 'adventure', 
//     loadChildren: () => import('./modules/adventure/adventure.module').then(m => m.AdventureModule) 
//   },
//   { 
//     path: 'eco-tourism', 
//     loadChildren: () => import('./modules/eco-tourism/eco-tourism.module').then(m => m.EcoTourismModule) 
//   },
//   { 
//     path: 'budget-planner', 
//     loadChildren: () => import('./modules/budget-planner/budget-planner.module').then(m => m.BudgetPlannerModule) 
//   },
//   { 
//     path: 'shopping', 
//     loadChildren: () => import('./modules/shopping/shopping.module').then(m => m.ShoppingModule) 
//   },
//   { 
//     path: 'map', 
//     loadChildren: () => import('./modules/map/map.module').then(m => m.MapModule) 
//   },
//   { 
//     path: '', 
//     redirectTo: 'home', 
//     pathMatch: 'full' 
//   },
//   { 
//     path: '**', 
//     redirectTo: 'home' 
//   }
// ];
