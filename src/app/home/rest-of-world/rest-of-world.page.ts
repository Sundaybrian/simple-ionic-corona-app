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
  }

  ionViewWillEnter(){
    this.KenyaService.loadWorldData().toPromise().then(
      (results) => {
        this.restofData = results;
        this.sliceData();
      }
    );
  }

  sliceData() {
    this.results = this.restofData.data.covid19Stats.slice(-161);
    this.mapCountriesToFlags(this.results);
    // this.isLoading = false;
  }

  mapCountriesToFlags(arr) {
    const results = [];
    const r =[];
    this.KenyaService.getJson().toPromise().then(data => {

      arr.forEach(country => {
        // loop arr from the api
        // check if country name from arr is present in the countries json
        let cf = data["countries"].find(co => co["name"].toLowerCase() == country["country"].toLowerCase() );

        // if found add a flag to that country
        if(cf){
          console.log(country.country, cf.flag,"############");
          country.flag = cf.flag;
          results.push(country);

        } else{
          // else set the flag to blank
          country.flag ="";
          results.push(country);
        }

      });
      // rewrite the class results value
      this.results = results;
      this.isLoading = false;

    });
  }

  filter(query: string){
    // filter the results array depending on the query
    // if we find a query match return a new array,else return original results

    const filteredResults = query ? this.results.filter(c =>
      c['country'].toLowerCase().includes(query.toLowerCase())
    ): this.results;
    return filteredResults;
  }


}
