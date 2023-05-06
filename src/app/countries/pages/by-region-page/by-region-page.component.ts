import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor( private countryServices: CountriesService){};

  searchByRegion( term: string ){
     this.countryServices.searchRegion( term)
      .subscribe( country => {
         this.countries = country;
      })
  }
}
