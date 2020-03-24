import { Component, OnInit } from '@angular/core';
import { KenyaService } from '../kenya-service.service';
import { Case } from '../models';


@Component({
  selector: 'app-kenya',
  templateUrl: './kenya.page.html',
  styleUrls: ['./kenya.page.scss'],
})
export class KenyaPage implements OnInit {

  results: any;
  constructor( private KenyaService: KenyaService) { }

  ngOnInit() {
    this.KenyaService.loadData().toPromise().then((results: any) => {
      this.results = results;
    });

  }

 

}
