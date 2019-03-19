import { Driver } from "selenium-webdriver/opera";

export interface Car {
  name: string;
  mileage: number;
  tank: number;
  fuel: number;
  specifications: String[];
  drive(): void;
  refuel(): void;
}
