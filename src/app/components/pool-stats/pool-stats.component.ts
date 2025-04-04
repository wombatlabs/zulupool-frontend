import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pool-stats',
  templateUrl: './pool-stats.component.html',
  styleUrls: ['./pool-stats.component.less']
})
export class PoolStatsComponent implements OnInit {
  stats: any = {};
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/getPoolStats').subscribe((res: any) => {
      this.stats = res;
      this.loading = false;
    });
  }
}
