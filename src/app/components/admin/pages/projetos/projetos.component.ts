import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { ProjetosService } from './../../../../services/projetos.service';
import { projetosInterface } from './../../../../models/projetos-interface';
import { Component, OnInit } from '@angular/core';
import * as moment from "moment";


@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  public projetos: projetosInterface;

  constructor(private http: HttpClient, private authService: AuthService, private ProjetosService: ProjetosService) { }

  getDays(): void {
    this.ProjetosService.getAllProjetos().subscribe((projetos: projetosInterface) => {
      this.projetos = projetos;
    });
  }

  ngOnInit() {

  }

}
