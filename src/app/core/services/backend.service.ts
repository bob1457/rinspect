import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  baseUrl = '';

  constructor(private httoClient: HttpClient) { }

  saveReport(data) {
    // Save report on remote server
    return data;
  }

}
