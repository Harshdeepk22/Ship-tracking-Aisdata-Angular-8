import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  loading: EventEmitter<number> = new EventEmitter();
  APIerror: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private http: HttpClient,
  ) { }

  handleResponse(event: HttpEvent<any>) {
    if (event.type === HttpEventType.Sent) {
      this.loading.emit(0)
    }
    if (event.type === HttpEventType.DownloadProgress) {
      const percentDone = Math.round(99 * event.loaded / event.total);
      this.loading.emit(percentDone)

    }
    if (event.type === HttpEventType.UploadProgress) {
      const percentDone = Math.round(99 * event.loaded / event.total);
      this.loading.emit(percentDone)

    }
    if (event.type === HttpEventType.Response) {
      this.loading.emit(100)
      const response: HttpResponse<any> = event
      if (response.body) {
       
        return response.body;
      }
    }
  }



  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      // console.error('An error occurred:', error.error.message);
      console.log('nbv')
    } else {
      console.log('ejcd')
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // console.error(
      //   `Backend returned code ${error.status}, ` +
      //   `body was: ${error.error}`);
        if(error.status == 0){
          // this.APIerror.emit(true);
        }
    }
    // return an observable with a user-facing error message
    return throwError(error.error);
  };


}
