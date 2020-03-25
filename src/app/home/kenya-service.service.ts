import { Injectable } from "@angular/core";
import { Case } from "./models";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class KenyaService {
  baseurl = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats";

  httpOptions = {
    headers: {
      "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
      "x-rapidapi-key": "dabceb15d5msh12757e7eeeaf772p1d80bdjsn15872dd7ce60"
    },
    params: new HttpParams().set("country", "Kenya")
  };

  countries_url = 'assets/countries.json';

  constructor(private httpClient: HttpClient) {}

  loadData() {
    // load data for kenya only
    return this.httpClient.get(`${this.baseurl}`, this.httpOptions);
  }

  loadWorldData() {
    // load all countries with their specific data
    return this.httpClient.get(`${this.baseurl}`, {
      headers: new HttpHeaders({
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "dabceb15d5msh12757e7eeeaf772p1d80bdjsn15872dd7ce60"
      })
    });
  }

  loadWorldTotalStat() {
    // fetch aggregate world stats of cases
    return this.httpClient.get(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
      {
        headers: new HttpHeaders({
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key": "dabceb15d5msh12757e7eeeaf772p1d80bdjsn15872dd7ce60"
        })
      }
    );
  }

  getJson(){
  return this.httpClient.get(this.countries_url);

  }


}
