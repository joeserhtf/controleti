import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { ProjetosService } from './../../../../services/projetos.service';
import { projetosInterface } from './../../../../models/projetos-interface';
import { Component, OnInit } from '@angular/core';
import * as moment from "moment";
import { orcamentoInterface } from 'src/app/models/orcamento-interface';
import { logInterface } from 'src/app/models/log-interface';


@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  public orcamentos: orcamentoInterface;
  public projetos: projetosInterface;
  public logs: logInterface;
  public projetosd: projetosInterface;
  id = 1;

  constructor(private http: HttpClient, private authService: AuthService, public ProjetosService: ProjetosService) { }

  getProjetos(): void {
    this.ProjetosService.getAllProjetos().subscribe((projetos: projetosInterface) => {
      this.projetos = projetos;
    });
  }

  getProjeto(): void {
    this.ProjetosService.getProjetoD(this.id).subscribe((projetosd: projetosInterface) => {
      this.projetosd = projetosd;
    });
    this.ProjetosService.getOrçamento(this.id).subscribe((orcamentos: orcamentoInterface) => {
      this.orcamentos = orcamentos;
    });
    this.ProjetosService.getLogs(this.id).subscribe((logs: logInterface) => {
      this.logs = logs;
    });
    this.ProjetosService.orcamentoss.idprojeto = this.id;
    this.ProjetosService.logss.idprojeto = this.id;
    this.ProjetosService.logss.usuarioid = this.authService.getCurrentUser().id;
    
  }

  saveOrca(orcaForm: NgForm): void{
      this.ProjetosService.saveOrcamento(orcaForm.value).subscribe(orc => setTimeout(() => {
        location.reload();
      }, 500));
  }

  saveProjeto(projetoFrom: NgForm): void{
    this.ProjetosService.saveProjeto(projetoFrom.value).subscribe(proj => setTimeout(() => {
      location.reload();
    }, 500));
}

  saveLog(logForm: NgForm): void{
    this.ProjetosService.saveLog(logForm.value).subscribe(log => setTimeout(() => {
      location.reload();
    }, 500));
  }

  ngOnInit() {
    this.getProjetos();
    this.getProjeto();
  }

}
