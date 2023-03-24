import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule),
		canLoad: [IntroGuard, AutoLoginGuard]},
	{
		path: 'intro',
		loadChildren: () => import('./pages/intro/intro.module').then((m) => m.IntroPageModule)
	},
	{
		path: 'tabs',
		loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule),
		canLoad: [AuthGuard]
	},
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'arcoslapa',
    loadChildren: () => import('./pages/content/arcoslapa/arcoslapa.module').then( m => m.ArcoslapaPageModule)
  },
  {
    path: 'copa',
    loadChildren: () => import('./pages/content/copa/copa.module').then( m => m.CopaPageModule)
  },
  {
    path: 'cristo',
    loadChildren: () => import('./pages/content/cristo/cristo.module').then( m => m.CristoPageModule)
  },
  {
    path: 'lavezzi',
    loadChildren: () => import('./pages/content/lavezzi/lavezzi.module').then( m => m.LavezziPageModule)
  },
  {
    path: 'maracana',
    loadChildren: () => import('./pages/content/maracana/maracana.module').then( m => m.MaracanaPageModule)
  },
  {
    path: 'paoacucar',
    loadChildren: () => import('./pages/content/paoacucar/paoacucar.module').then( m => m.PaoacucarPageModule)
  },
  {
    path: 'parquemadureira',
    loadChildren: () => import('./pages/content/parquemadureira/parquemadureira.module').then( m => m.ParquemadureiraPageModule)
  },
  {
    path: 'rioothonpalace',
    loadChildren: () => import('./pages/content/rioothonpalace/rioothonpalace.module').then( m => m.RioothonpalacePageModule)
  },

  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
];
@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule {}

