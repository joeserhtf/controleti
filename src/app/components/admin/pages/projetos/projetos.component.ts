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
  nome = "Projeto Teste";

  constructor(private http: HttpClient, private authService: AuthService, public ProjetosService: ProjetosService) { }

  getProjetos(): void {
    this.ProjetosService.getAllProjetos().subscribe((projetos: projetosInterface) => {
      this.projetos = projetos;
    });
  }

  getProjeto(): void {
    this.ProjetosService.getProjetoD(this.nome).subscribe((projetosd: projetosInterface) => {
      this.projetosd = projetosd;
    });
    this.ProjetosService.getOrçamento(this.nome).subscribe((orcamentos: orcamentoInterface) => {
      this.orcamentos = orcamentos;
    });
    this.ProjetosService.getLogs(this.nome).subscribe((logs: logInterface) => {
      this.logs = logs;
    });
    this.ProjetosService.orcamentoss.nameprojeto = this.nome;
    this.ProjetosService.logss.nameprojeto = this.nome;
  }

  saveOrca(orcaForm: NgForm): void{
      this.ProjetosService.saveOrcamento(orcaForm.value).subscribe();
      this.getProjeto();
  }

  saveProjeto(projetoFrom: NgForm): void{
    this.ProjetosService.saveProjeto(projetoFrom.value).subscribe();
    this.getProjeto();
    window.close();
}

  saveLog(logForm: NgForm): void{
    this.ProjetosService.saveLog(logForm.value).subscribe();
    this.getProjeto();
  }

  ngOnInit() {
    this.getProjetos();
    this.getProjeto();
  }

}
