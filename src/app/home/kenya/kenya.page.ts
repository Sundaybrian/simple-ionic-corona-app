import { Component, OnInit } from '@angular/core';
import { KenyaService } from '../kenya-service.service';
import { Case } from '../models';


@Component({
  selector: 'app-kenya',
  templateUrl: './kenya.page.html',
  styleUrls: ['./kenya.page.scss'],
})
export class KenyaPage implements OnInit {

  loadedCase: Case [] = [];
  results: any;
  resultsworld:any;
  worldData: [] = [];
  constructor( private KenyaService: KenyaService) { }

  ngOnInit() {
    this.KenyaService.loadData().toPromise().then((results: any) => {
      this.results = results;
    });


    this.KenyaService.loadWorldData().toPromise().then(
      (results => {
        console.log(results,"##########3");
        this.resultsworld = results;
        this.slimData();
      })
    );

  }

  slimData() {
    // fetch the rest of the world data
    this.worldData = this.resultsworld.data.covid19Stats.slice(-161);
    console.log(this.worldData);
  }

}
