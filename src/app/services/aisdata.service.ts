import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import {ResponseService} from './response.service';
import { catchError, retry, tap, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AisdataService {
  headers = new HttpHeaders();
base_Url = "https://first-node-server.herokuapp.com/"

  constructor(private http: HttpClient,private handle : ResponseService) { }

Ais_Data(){
  const req = new HttpRequest('get', this.base_Url +'getdata',{ headers: this.headers, reportProgress: true });
  return this.http.request(req) .pipe(
    map(event => this.handle.handleResponse(event)),
    catchError(this.handle.handleError)
  );
}

} 