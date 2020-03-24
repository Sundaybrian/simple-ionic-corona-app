import { Injectable } from "@angular/core";
import { Case } from "./models";

@Injectable({
  providedIn: "root"
})
export class KenyaService {
  private _cases: Case[] = [
    new Case("Kenya", 7, 0, 0, "", 25),
    new Case("Kenya", 7, 0, 0, "", 27),
    new Case("Kenya", 7, 0, 0, "", 85),

  ];

  constructor() {}

  get cases() {
    return [...this._cases];
  }
}
