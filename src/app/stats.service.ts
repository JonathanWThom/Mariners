import { Injectable } from '@angular/core';
//not using response yet
import { Http, Response } from '@angular/http';
//using observable or not?
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { marinersKey } from './api-keys';

@Injectable()
export class StatsService {
  private statsUrl = 'http://api.sportradar.us/mlb-t5/seasontd/2016/REG/teams/43a39081-52b4-4f93-ad29-da7f329ea960/statistics.json?api_key=' + marinersKey.key;
  constructor (private http: Http) {}

  getTeamStats() {
      return this.http.get(this.statsUrl)
      .map(res => {
      return <any[]> res.json();
      //add failure conditions
    });
  }

}
