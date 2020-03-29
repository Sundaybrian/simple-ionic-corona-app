import { Component, OnInit } from '@angular/core';
import { KenyaService } from '../kenya-service.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

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
  searching: any = false;
  searchControl: FormControl;

  constructor(
    private KenyaService:KenyaService
  ) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    // fetch world data
    this.KenyaService.loadWorldData().toPromise().then(
      (results) => {
        // map a country to a flag
        this.mapCountriesToFlags(results['countries_stat']);
      }
    );

    this.searchControl.valueChanges.pipe(debounceTime(400))
    .subscribe(search => {
      this.searching = false;
      this.setFilteredCountries(search);
    })
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

  filterCountries(query){
    // filter the results array depending on the query
    // if we find a query match return a new array,else return original results
    let filteredResults = query ? this.results.filter(c => {
      return c['country_name'].toLowerCase().includes(query.toLowerCase());
    }): this.results = this.resultsCopy;

    return filteredResults;
  }

  setFilteredCountries(searchTerm){
    this.results = this.filterCountries(searchTerm)
  }

  onSearchInput(){
    this.searching = true;
  }

}
