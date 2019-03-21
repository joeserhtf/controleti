import { Time } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from './../../../../models/user-interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { portugues } from './../../../../../interfaces/datatables.es';
import { Subject, Observable } from 'rxjs';
import * as moment from "moment";
import { Horariointerface } from './../../../../models/horario-interface';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})

export class TimesheetComponent implements OnInit {

  tt: number;
  range = [];
  dtOptions: any = {};
  dtLanguage: any = portugues;
  dtTrigger: Subject<any> = new Subject();
  array = [0,1,2,3]

  public horario: Horariointerface = {
      [0]:{
        total: 0,
        e1: 0,
        s1: 0,   
        e2: 0,
        s2: 0,
        e3: 0,                
        s3: 0,
        obs: ''
        },
        [1]:{
          total: 0,
          e1: 0,
          s1: 0,   
          e2: 0,
          s2: 0,
          e3: 0,                
          s3: 0,
          obs: ''
          },
          [2]:{
            total: 0,
            e1: 0,
            s1: 0,   
            e2: 0,
            s2: 0,
            e3: 0,                
            s3: 0,
            obs: ''
            },
            [3]:{
              total: 0,
              e1: 0,
              s1: 0,   
              e2: 0,
              s2: 0,
              e3: 0,                
              s3: 0,
              obs: ''
              }, 
                [4]:{
                  total: 0,
                  e1: 0,
                  s1: 0,   
                  e2: 0,
                  s2: 0,
                  e3: 0,                
                  s3: 0,
                  obs: ''
                  }, 
                  [5]:{
                    total: 0,
                    e1: 0,
                    s1: 0,   
                    e2: 0,
                    s2: 0,
                    e3: 0,                
                    s3: 0,
                    obs: ''
                    }, 
                    [6]:{
                      total: 0,
                      e1: 0,
                      s1: 0,   
                      e2: 0,
                      s2: 0,
                      e3: 0,                
                      s3: 0,
                      obs: ''
                      }, 
                      [7]:{
                        total: 0,
                        e1: 0,
                        s1: 0,   
                        e2: 0,
                        s2: 0,
                        e3: 0,                
                        s3: 0,
                        obs: ''
                        }, 
                        [8]:{
                          total: 0,
                          e1: 0,
                          s1: 0,   
                          e2: 0,
                          s2: 0,
                          e3: 0,                
                          s3: 0,
                          obs: ''
                          }, 
                          [9]:{
                            total: 0,
                            e1: 0,
                            s1: 0,   
                            e2: 0,
                            s2: 0,
                            e3: 0,                
                            s3: 0,
                            obs: ''
                            }, 
                            [10]:{
                              total: 0,
                              e1: 0,
                              s1: 0,   
                              e2: 0,
                              s2: 0,
                              e3: 0,                
                              s3: 0,
                              obs: ''
                              },     
                              [11]:{
                                total: 0,
                                e1: 0,
                                s1: 0,   
                                e2: 0,
                                s2: 0,
                                e3: 0,                
                                s3: 0,
                                obs: ''
                                },
                                [12]:{
                                  total: 0,
                                  e1: 0,
                                  s1: 0,   
                                  e2: 0,
                                  s2: 0,
                                  e3: 0,                
                                  s3: 0,
                                  obs: ''
                                  },  
                                [13]:{
                                  total: 0,
                                  e1: 0,
                                  s1: 0,   
                                  e2: 0,
                                  s2: 0,
                                  e3: 0,                
                                  s3: 0,
                                  obs: ''
                                  }, 
                                  [14]:{
                                    total: 0,
                                    e1: 0,
                                    s1: 0,   
                                    e2: 0,
                                    s2: 0,
                                    e3: 0,                
                                    s3: 0,
                                    obs: ''
                                    }, 
                                    [15]:{
                                      total: 0,
                                      e1: 0,
                                      s1: 0,   
                                      e2: 0,
                                      s2: 0,
                                      e3: 0,                
                                      s3: 0,
                                      obs: ''
                                      }, 
                                      [16]:{
                                        total: 0,
                                        e1: 0,
                                        s1: 0,   
                                        e2: 0,
                                        s2: 0,
                                        e3: 0,                
                                        s3: 0,
                                        obs: ''
                                        }, 
                                        [17]:{
                                          total: 0,
                                          e1: 0,
                                          s1: 0,   
                                          e2: 0,
                                          s2: 0,
                                          e3: 0,                
                                          s3: 0,
                                          obs: ''
                                          }, 
                                          [18]:{
                                            total: 0,
                                            e1: 0,
                                            s1: 0,   
                                            e2: 0,
                                            s2: 0,
                                            e3: 0,                
                                            s3: 0,
                                            obs: ''
                                            }, 
                                            [19]:{
                                              total: 0,
                                              e1: 0,
                                              s1: 0,   
                                              e2: 0,
                                              s2: 0,
                                              e3: 0,                
                                              s3: 0,
                                              obs: ''
                                              }, 
                                              [20]:{
                                                total: 0,
                                                e1: 0,
                                                s1: 0,   
                                                e2: 0,
                                                s2: 0,
                                                e3: 0,                
                                                s3: 0,
                                                obs: ''
                                                }, 
                                                [21]:{
                                                  total: 0,
                                                  e1: 0,
                                                  s1: 0,   
                                                  e2: 0,
                                                  s2: 0,
                                                  e3: 0,                
                                                  s3: 0,
                                                  obs: ''
                                                  }, 
                                                  [22]:{
                                                    total: 0,
                                                    e1: 0,
                                                    s1: 0,   
                                                    e2: 0,
                                                    s2: 0,
                                                    e3: 0,                
                                                    s3: 0,
                                                    obs: ''
                                                    }, 
                                                    [23]:{
                                                      total: 0,
                                                      e1: 0,
                                                      s1: 0,   
                                                      e2: 0,
                                                      s2: 0,
                                                      e3: 0,                
                                                      s3: 0,
                                                      obs: ''
                                                      }, 
                                                      [24]:{
                                                        total: 0,
                                                        e1: 0,
                                                        s1: 0,   
                                                        e2: 0,
                                                        s2: 0,
                                                        e3: 0,                
                                                        s3: 0,
                                                        obs: ''
                                                        }, 
                                                        [25]:{
                                                          total: 0,
                                                          e1: 0,
                                                          s1: 0,   
                                                          e2: 0,
                                                          s2: 0,
                                                          e3: 0,                
                                                          s3: 0,
                                                          obs: ''
                                                          }, 
                                                          [26]:{
                                                            total: 0,
                                                            e1: 0,
                                                            s1: 0,   
                                                            e2: 0,
                                                            s2: 0,
                                                            e3: 0,                
                                                            s3: 0,
                                                            obs: ''
                                                            }, 
                                                            [27]:{
                                                              total: 0,
                                                              e1: 0,
                                                              s1: 0,   
                                                              e2: 0,
                                                              s2: 0,
                                                              e3: 0,                
                                                              s3: 0,
                                                              obs: ''
                                                              }, 
                                                              [28]:{
                                                                total: 0,
                                                                e1: 0,
                                                                s1: 0,   
                                                                e2: 0,
                                                                s2: 0,
                                                                e3: 0,                
                                                                s3: 0,
                                                                obs: ''
                                                                }, 
                                                                [29]:{
                                                                  total: 0,
                                                                  e1: 0,
                                                                  s1: 0,   
                                                                  e2: 0,
                                                                  s2: 0,
                                                                  e3: 0,                
                                                                  s3: 0,
                                                                  obs: ''
                                                                  }, 
                                                                  [30]:{
                                                                    total: 0,
                                                                    e1: 0,
                                                                    s1: 0,   
                                                                    e2: 0,
                                                                    s2: 0,
                                                                    e3: 0,                
                                                                    s3: 0,
                                                                    obs: ''
                                                                    },
  };

  
  // sd = moment().startOf('month').add(1, 'days').locale('pt-br').format('dddd');


  fd = moment().startOf('month').locale('pt-br').format('dddd');
  nuss: number;
  i: number;
  user: UserInterface;
  year = moment().locale('pt-br').format('YYYY');
  month =moment().locale('pt-br').format('MMMM');

  constructor(private http: HttpClient, private authService: AuthService) { }


  mesDias(){
    for(var i=1;i<=moment("02022019", "DDMMYYYY").daysInMonth();i++) {
      this.range.push(i);
    }
  }

  diames(i: number){
    return moment().startOf('month').locale('pt-br').add(`${i}`, 'days').format('dddd');
  }


  ngOnInit() {
    this.mesDias();
    this.user = this.authService.getCurrentUser();
    this.month;
    this.year;
    this.fd;
  }

}
