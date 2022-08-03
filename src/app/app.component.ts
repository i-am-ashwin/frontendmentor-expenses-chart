import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any = [];
  view: [number, number] = [350, 200];
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = false;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Day';
  showYAxisLabel: boolean = false;
  yAxisLabel: string = 'Amount';
  legendTitle: string = 'Years';

  colorScheme: any = {
    domain: ['#ec775f']
  };
  constructor(private httpClient: HttpClient){

  }
  ngOnInit(){
    this.httpClient.get("assets/data.json").subscribe((res: any) =>{
      res = res.map((e: any) => ({name: e.day, value: e.amount}))
      this.data = [...res];
    })
  }
}
