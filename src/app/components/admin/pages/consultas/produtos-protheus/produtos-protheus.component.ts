import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AuthService } from '../../../../../services/auth.service';
import { isNullOrUndefined } from 'util';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ConsultasService } from '../../../../../services/consultas.service';
import { DataApiService } from '../../../../../services/data-api.service';

@Component({
  selector: 'app-produtos-protheus',
  templateUrl: './produtos-protheus.component.html',
  styleUrls: ['./produtos-protheus.component.css']
})
export class ProdutosProtheusComponent implements OnInit {

  constructor(private http: HttpClient, private authservice: AuthService, public consultasService: ConsultasService,  private dataservice: DataApiService) { }

  public filial = '0101';
  public produtos;
  public loaded = true;
  public head = false;
  public error = false;
  public Dproduto = undefined;
  public Cprotheus = undefined;
  public Cbarras = undefined;
  public user;
  public isLogged;
  public detail;
  


  onCheckUser(): void{
    if(this.authservice.getCurrentUser() == null){
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
  }

  onAdmUser(): void{
    if(this.isLogged){
      this.user = this.authservice.getCurrentUser();
    }
  }

  myFunction(){
    document.getElementById("porque").setAttribute('data-toggle','modal');
  }

  reset(){
    this.head = false;
    this.error = false;
  }

  onDetail(produto, filial){
    this.consultasService.produto = {codigo: '',codbar: '',descricao: '',fornecedor: '',
                                     estoqlj: '',estoqcd: '',estoqdep:''}
    this.consultasService.getDetail(produto, this.user.codUser, filial).subscribe((detail) => {
      this.detail = detail
      this.consultasService.produto = Object.assign({}, this.detail[0]);
    })
   
    
  }

  getprod(dprod: NgForm){
    document.getElementById("busca").setAttribute('disabled', 'disabled');
    if((isNullOrUndefined(dprod.value.Dproduto) || dprod.value.Dproduto == "" )  && (isNullOrUndefined(dprod.value.Cprotheus) || dprod.value.Cprotheus == "" ) && (isNullOrUndefined(dprod.value.Cbarras) || dprod.value.Cbarras == "" )){
      this.error = true;
      this.head = false;
      document.getElementById("busca").removeAttribute('disabled') 
      setTimeout(() => {
        this.error = false;
       }, 3500);
    }else{
      this.error = false;
      this.head = true;
        if(!(isNullOrUndefined(dprod.value.Dproduto) || dprod.value.Dproduto == "" )){
          dprod.value.Dproduto = dprod.value.Dproduto.replace(" ", "%")
          dprod.value.Dproduto = dprod.value.Dproduto.toUpperCase();
        } 
        this.consultasService.getprod(dprod.value, this.user.codUser).subscribe((produtos) => {
          if(produtos == null || isNullOrUndefined(produtos[0])){
            this.produtos = [{B1_COD: "Sem Registro", B1_CODBAR: "Sem Registro", B1_DESC: "Sem Registro", B1_XDSCGRP: "Sem Registro"}];
          }else{
            this.produtos = produtos;
          }
            document.getElementById("busca").removeAttribute('disabled');
        })
      }
      
  }
  
  ngOnInit() {
    this.onCheckUser();
    this.onAdmUser();
  }

}
