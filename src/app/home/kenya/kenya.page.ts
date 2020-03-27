import { Component, OnInit } from "@angular/core";
import { KenyaService } from "../kenya-service.service";

@Component({
  selector: "app-kenya",
  templateUrl: "./kenya.page.html",
  styleUrls: ["./kenya.page.scss"]
})
export class KenyaPage implements OnInit {
  isLoading = true;
  results: any;
  worldstats: any;
  constructor(private KenyaService: KenyaService) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    // fetch kenyastats
    this.KenyaService.loadData()
      .toPromise()
      .then((results: any) => {
        this.isLoading = false;
        this.mapCountryToFlag(results.latest_stat_by_country[0]);
      });

      // fetch world stats
      this.KenyaService.loadWorldTotalStat().subscribe((result)=> {
        this.worldstats = result;
        console.log(this.worldstats);
      });
  }

  mapCountryToFlag(obj) {
    return this.KenyaService.getJson().toPromise().then(data => {
         data['countries'].forEach(country => {
          if(country["name"].toLowerCase() == obj['country_name'].toLowerCase()){
             obj['flag'] = country['flag'];
             this.results = obj;
          }

        });

      });
  }

}
