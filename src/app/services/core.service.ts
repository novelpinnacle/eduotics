import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import Config from "../Config"

@Injectable({
  providedIn: 'root'
})

export class CoreService {

  private headers: HttpHeaders = new HttpHeaders()

  constructor(private http: HttpClient, private router: Router) {
    this.headers = this.headers.append("Content-Type", "application/json");
  }

  postRequest(url: string, data) {
    let hp = this.http.post(Config.API_URL + url, JSON.stringify(data), { headers: this.headers });
    return hp.pipe(catchError((err) => { return this.handleError(err, this); }));
  }

  uploadRequest(url: string, data) {
    let hp = this.http.post(Config.API_URL + url, data);
    return hp.pipe(catchError((err) => { return this.handleError(err, this); }));
  }

  putRequest(url: string, data) {
    let hp = this.http.put(Config.API_URL + url, JSON.stringify(data), { headers: this.headers });
    return hp.pipe(catchError((err) => { return this.handleError(err, this); }))
  }

  getRequest(url: string) {
    let hp = this.http.get(Config.API_URL + url)
    return hp.pipe(catchError((err) => { return this.handleError(err, this) }))
  }

  urlEncodedRequest(url: string, data) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
    let hp = this.http.post(Config.API_URL + url, data, { headers: headers});
    return hp.pipe(catchError((err) => { return this.handleError(err, this); }));
  }

  deleteRequest(url: string) {
    return this.http.delete(Config.API_URL + url).pipe(catchError((err) => { return this.handleError(err, this); }));
  }

  private handleError(error: HttpErrorResponse, _this) {
    if (error.error instanceof ErrorEvent) {
      console.log("Here ", error)
    }
    else {
      console.log(JSON.stringify(error));
      if (error.error == "Invalid Token") {
        localStorage.clear()
        this.router.navigate(["/"])
      } else {
        //  _this.comm.errorModal.next(error)
      }
    }
    return throwError('Error Occured');
  }
}
