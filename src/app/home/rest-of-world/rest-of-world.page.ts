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
  resultsCopy: any;
  query = "";
  searching: any = false;

  constructor(
    private KenyaService:KenyaService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.KenyaService.loadWorldData().toPromise().then(
      (results) => {
        console.log(results);
        this.mapCountriesToFlags(results['countries_stat']);
      }
    );
  }


  mapCountriesToFlags(arr) {
    const results = [];
    // fetch local countries json
    this.KenyaService.getJson().toPromise().then(data => {

      arr.forEach(country => {
        // loop arr from the api
        // check if country name from arr is present in the countries json
        let cf = data["countries"].find(co => co["name"].toLowerCase() == country["country_name"].toLowerCase() );

        // if found add a flag to that country
        if(cf){
          // console.log(country.country, cf.flag,"############");
          country.flag = cf.flag;
          results.push(country);

        } else{
          // else set the flag to blank
          country.flag ="";
          results.push(country);
        }

      });
      // set the class properties values
      this.resultsCopy = this.results = results;
      this.isLoading = false;

    });
  }

  filterCountries(query: string){
    // filter the results array depending on the query
    // if we find a query match return a new array,else return original results
    let filteredResults = query ? this.results.filter(c => {
      return c['country_name'].toLowerCase().includes(this.query.toLowerCase());
    }): this.results = this.resultsCopy;

    return filteredResults;
  }

  setFilteredCountries(){
    this.results = this.filterCountries(this.query)
  }

}
