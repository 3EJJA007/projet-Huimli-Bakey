import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly http = inject(HttpClient);

  private readonly apiKey = '67fe3ea1ece40cfbeab64e923d9b7cd1';
  private readonly apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  // Récupérer la météo pour Tunis
  getWeatherForTunis(): Observable<any> {
    const url = `${this.apiUrl}?q=Tunis,tn&appid=${this.apiKey}&units=metric&lang=fr`;
    return this.http.get(url);
  }
}