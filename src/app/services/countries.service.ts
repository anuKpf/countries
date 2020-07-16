import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetCountryService {

  private REST_API_SERVER = 'https://restcountries.eu/rest/v2/region/';

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(region: string): Observable<any>{
    return this.httpClient.get(this.REST_API_SERVER + region, {responseType: 'json'});
  }
}
