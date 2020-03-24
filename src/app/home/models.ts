export class Case {
  constructor(
    public country: string,
    public newcases: number,
    public deaths: number,
    public recovered: number,
    public province: string,
    public confirmed: number
  ) {}
}

export interface kenyaData {
  city: string;
  province: string;
  country: string;
  lastUpdate: Date;
  keyId: string;
  confirmed: number;
  deaths: number;
  recovered: number;
}
