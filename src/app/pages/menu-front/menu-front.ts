import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WeatherService } from '../../services/meteo-service';


@Component({
  selector: 'app-menu-front',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu-front.html',
  styleUrls: ['./menu-front.css']
})
export class MenuFrontComponent implements OnInit {
  private readonly weatherService = inject(WeatherService);

  temperature: number = 0;
  iconUrl = '';
 

  ngOnInit(): void {
    this.weatherService.getWeatherForTunis().subscribe((data) => {
      console.log(data);
      this.temperature = data.main.temp;
      const icon = data.weather[0].icon;
      this.iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
    });
    
  }


  
}