import { Component } from "@angular/core";
import { Car } from "../../interfaces/car";

@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.css"]
})
export class CarComponent implements Car {
  public name: string = "Audi A6";
  public mileage: number = 100;
  public tank: number = 65;
  public fuel: number = 5;
  public specifications: String[] = ["engine: 2", "maxSpeed: 200"];

  constructor() {}

  public drive(): void {
    this.mileage += 5;
    this.fuel -= 0.5;
  }

  public refuel(): void {
    this.fuel += 5;
  }

  public onClickDriveHandler(): void {
    this.drive();
  }

  public onClickRefuelHandler(): void {
    this.refuel();
  }
}
