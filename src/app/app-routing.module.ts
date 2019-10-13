import { LojaComponent } from './components/admin/pages/loja/loja.component';
import { ColaboradorComponent } from './components/admin/pages/colaborador/colaborador.component';
import { RamalComponent } from './components/admin/pages/ramal/ramal.component';
import { ModalScComponent } from './components/admin/modal-sc/modal-sc.component';
import { AuthGuard } from './guards/auth.guard';
import { CustofixoComponent } from './components/admin/pages/custofixo/custofixo.component';
import { InventarioComponent } from './components/admin/pages/inventario/inventario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHomeComponent } from './components/admin/pages/admin-home/admin-home.component';
import { AdminProgramsComponent } from './components/admin/pages/admin-programs/admin-programs.component';
import { LoginComponent } from './components/login/login.component';
import { ListagemComponent } from './components/admin/pages/listagem/listagem.component';
import { IncluirComponent } from './components/admin/pages/incluir/incluir.component';
import { IncluirimpComponent } from './components/admin/pages/incluirimp/incluirimp.component';
import { ListagemimpComponent } from './components/admin/pages/listagemimp/listagemimp.component';
import { HorarioComponent } from './components/admin/pages/horario/horario.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/admin/pages/profile/profile.component';
import { ModalCustoHistoricoComponent } from './components/admin/modal-custo-historico/modal-custo-historico.component';
import { TimesheetComponent } from './components/admin/pages/timesheet/timesheet.component';
import { ProjetosComponent } from './components/admin/pages/projetos/projetos.component';
import { CaixasattComponent } from './components/admin/pages/caixasatt/caixasatt.component';
import { L1orcComponent } from './components/admin/pages/l1orc/l1orc.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin/unidades',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'unidades',
        component: LojaComponent
      },
      {
        path: 'caixas',
        component: CaixasattComponent, canActivate:[AuthGuard]
      },
      {
        path: 'l1s',
        component: L1orcComponent, canActivate:[AuthGuard]
      },
      {
        path: 'admin-home',
        component: AdminHomeComponent
      },
      {
        path: 'admin-programs',
        component: AdminProgramsComponent, canActivate:[AuthGuard]
      },
      {
        path: 'listagem',
        component: ListagemComponent, canActivate:[AuthGuard]
      },
      {
        path: 'incluir/:id',
        component: IncluirComponent, canActivate:[AuthGuard]
      },
      {
        path: 'incluirimp',
        component: IncluirimpComponent, canActivate:[AuthGuard]
      },
      {
        path: 'listagemimp',
        component: ListagemimpComponent, canActivate:[AuthGuard]
      },
      {
        path: 'horario',
        component: HorarioComponent, canActivate:[AuthGuard]
      },
      {
        path: 'inventario',
        component: InventarioComponent, canActivate:[AuthGuard]
      },
      {
        path: 'custofixo',
        component: CustofixoComponent, canActivate:[AuthGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent, canActivate:[AuthGuard]
      },
      {
        path: 'ramal',
        component: RamalComponent, canActivate:[AuthGuard]
      },
      {
        path: 'modalsc',
        component: ModalScComponent, canActivate:[AuthGuard]
      },
      {
        path: 'cfhistorico/:id',
        component: ModalCustoHistoricoComponent, canActivate:[AuthGuard]
      },
      {
        path: 'projetos',
        component: ProjetosComponent, canActivate:[AuthGuard]
      },
      {
        path: 'timesheet',
        component: TimesheetComponent, canActivate:[AuthGuard]
      },
      {
        path: 'colaborador',
        component: ColaboradorComponent, canActivate:[AuthGuard]
      },
      { 
        path: 'login',
        component: LoginComponent 
      },
      { 
        path: '',
        redirectTo: 'admin-home',
        pathMatch: 'full'
      },
    ]
  },
  { path: 'register', component: RegisterComponent, canActivate:[AuthGuard]},
  {
    path: '**',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
