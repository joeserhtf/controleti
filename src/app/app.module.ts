import { LojaServiceService } from './services/loja-service.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from 'ng-fullcalendar';
import { PipesModule } from 'w-ng5';

import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContentComponent } from './components/admin/content/content.component';
import { ControlSidebarComponent } from './components/admin/control-sidebar/control-sidebar.component';
import { FooterComponent } from './components/admin/footer/footer.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { LeftSideComponent } from './components/admin/left-side/left-side.component';

import { AdminHomeComponent } from './components/admin/pages/admin-home/admin-home.component';
import { AdminProgramsComponent } from './components/admin/pages/admin-programs/admin-programs.component';

import { LoginComponent } from './components/login/login.component';
import { ListagemComponent } from './components/admin/pages/listagem/listagem.component';
import { IncluirComponent } from './components/admin/pages/incluir/incluir.component';
import { ListagemimpComponent } from './components/admin/pages/listagemimp/listagemimp.component';
import { IncluirimpComponent } from './components/admin/pages/incluirimp/incluirimp.component';
import { HorarioComponent } from './components/admin/pages/horario/horario.component';
import { ColaboradorComponent } from './components/admin/pages/colaborador/colaborador.component';
import { FormsModule } from '@angular/forms';

//Service
import { DataApiService } from './services/data-api.service';
import { CustofixoDataService } from './services/custofixo-data.service';
import { AtendimentoDataService } from './services/atendimento-data.service';
import { InventarioDataService } from './services/inventario-data.service';
import { UsuarioimpDataService } from './services/usuarioimp-data.service';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/admin/pages/profile/profile.component';
import { InventarioComponent } from './components/admin/pages/inventario/inventario.component';
import { CustofixoComponent } from './components/admin/pages/custofixo/custofixo.component';
import { ModalComponent } from './components/admin/modal/modal.component';
import { ModalScComponent } from './components/admin/modal-sc/modal-sc.component';
import { ModalUserComponent } from './components/admin/modal-user/modal-user.component';
import { ModalCustoHistoricoComponent } from './components/admin/modal-custo-historico/modal-custo-historico.component';
import { ModalInvComponent } from './components/admin/modal-inv/modal-inv.component';
import { RamalComponent } from './components/admin/pages/ramal/ramal.component';
import { RecadoComponent } from './components/admin/pages/recado/recado.component';
import { ProjetosComponent } from './components/admin/pages/projetos/projetos.component';
import { TimesheetComponent } from './components/admin/pages/timesheet/timesheet.component';
import { TimesheetService } from './services/timesheet.service';
import { ProjetosService } from './services/projetos.service';
import { ColaboradorServiceService } from './services/colaborador-service.service';
import { LojaComponent } from './components/admin/pages/loja/loja.component';
import { CaixaComponent } from './components/admin/pages/caixa/caixa.component';
import { CaixasattComponent } from './components/admin/pages/caixasatt/caixasatt.component';
import { L1orcComponent } from './components/admin/pages/l1orc/l1orc.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ContentComponent,
    ControlSidebarComponent,
    FooterComponent,
    HeaderComponent,
    LeftSideComponent,
    AdminHomeComponent,
    AdminProgramsComponent,
    LoginComponent,
    ListagemComponent,
    IncluirComponent,
    ListagemimpComponent,
    IncluirimpComponent,
    HorarioComponent,
    RegisterComponent,
    ProfileComponent,
    InventarioComponent,
    CustofixoComponent,
    ModalComponent,
    ModalScComponent,
    ModalUserComponent,
    ModalCustoHistoricoComponent,
    ModalInvComponent,
    RamalComponent,
    RecadoComponent,
    ProjetosComponent,
    TimesheetComponent,
    ColaboradorComponent,
    LojaComponent,
    CaixaComponent,
    CaixasattComponent,
    L1orcComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    FullCalendarModule,
    PipesModule,
  ],
  providers: [HttpClient, HttpModule, HttpClientModule, DataApiService, CustofixoDataService, AtendimentoDataService, InventarioDataService, UsuarioimpDataService, TimesheetService, ProjetosService, ColaboradorServiceService, LojaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
