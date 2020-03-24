import { Injectable } from "@angular/core";
import { Case } from "./models";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})



export class KenyaService {

  baseurl = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats"
  
  
  httpOptions = {
    headers : {
      'x-rapidapi-host': "covid-19-coronavirus-statistics.p.rapidapi.com",
      'x-rapidapi-key': "dabceb15d5msh12757e7eeeaf772p1d80bdjsn15872dd7ce60"
    },
    params: new HttpParams().set("country", "Kenya")
  };
  
  constructor(
    private httpClient: HttpClient
  ) {}

  loadData(){
    return this.httpClient.get(`${this.baseurl}`, this.httpOptions);
  }

  loadWorldData(){
    return this.httpClient.get(`${this.baseurl}`,{
      headers : new HttpHeaders({
        'x-rapidapi-host': "covid-19-coronavirus-statistics.p.rapidapi.com",
        'x-rapidapi-key': "dabceb15d5msh12757e7eeeaf772p1d80bdjsn15872dd7ce60"
      }),
      params: new HttpParams().set("country", "")
    });
  }

}
