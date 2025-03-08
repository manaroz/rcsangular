import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../MyClasses/country';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  info = "List of countries";

  countries = new Array<Country>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.countries.push(new Country('Mexico', 'Mexico City', 1964375));
    this.countries.push(new Country('Canada', 'Ottawa', 17098242));
    this.countries.push(new Country('South Africa', 'Pretoria', 1221037));
    this.countries.push(new Country('Spain', 'Madrid', 505992));
    this.countries.push(new Country('United Kingdom', 'London', 243610));
  }

  navigateToHome(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home']);
  }
}