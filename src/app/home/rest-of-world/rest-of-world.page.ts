import { Component, OnInit } from '@angular/core';
import { KenyaService } from '../kenya-service.service';

@Component({
  selector: 'app-rest-of-world',
  templateUrl: './rest-of-world.page.html',
  styleUrls: ['./rest-of-world.page.scss'],
})
export class RestOfWorldPage implements OnInit {
  isLoading = true;
  restofData: any;
  results: any;

  constructor(
    private KenyaService:KenyaService
  ) { }

  ngOnInit() {
    this.KenyaService.loadWorldData().toPromise().then(
      (results) => {
        this.restofData = results;
        this.sliceData();
      }
    );
  }

  sliceData() {
    this.results = this.restofData.data.covid19Stats.slice(-161);
    this.isLoading = false;
  }
      

}
