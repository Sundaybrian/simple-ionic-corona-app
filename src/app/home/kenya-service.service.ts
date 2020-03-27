import { Injectable } from "@angular/core";
import { Case } from "./models";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class KenyaService {

  httpOptions = {
    headers: {
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "dabceb15d5msh12757e7eeeaf772p1d80bdjsn15872dd7ce60"
    },
  };

  countries_url = 'assets/countries.json';

  constructor(private httpClient: HttpClient) {}

  loadData() {
    // load data for kenya only
    return this.httpClient.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php", {
      headers: new HttpHeaders({
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "dabceb15d5msh12757e7eeeaf772p1d80bdjsn15872dd7ce60"
      }),
      params: new HttpParams().set("country", "kenya")
    });
  }

  loadWorldData() {
    // load all countries with their specific data
    return this.httpClient.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", this.httpOptions);
  }

  loadWorldTotalStat() {
    // fetch aggregate world stats of cases
    return this.httpClient.get(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
    this.httpOptions
    );
  }

  getJson(){
  return this.httpClient.get(this.countries_url);

  }


}
