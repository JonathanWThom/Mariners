import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';
//use this?
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  providers: [StatsService]
})
export class StatsComponent implements OnInit {
  //give these object types?
  stats;
  parsedStats;
  players: any = [];
  constructor(private ss: StatsService) { }

  ngOnInit() {
    this.ss.getTeamStats().subscribe(x => {
      this.stats = x;
      console.log(JSON.parse(this.stats.body));
      this.parsedStats = JSON.parse(this.stats.body);
      this.players = this.parsedStats.players;
    });
  }

}
