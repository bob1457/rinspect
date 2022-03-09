import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  backendServiceUrl = 'http://localhost:63533';

  constructor(private httpClient: HttpClient) { }

  getAllLeaseList() {
    return this.httpClient.get(`${this.backendServiceUrl}/api/Lease/alllease`);
  }

  getLeaseDetails(id) {
    return this.httpClient.get(`${this.backendServiceUrl}/api/Lease/info/${id}`);
  }

  saveReport(data) {
    // Save report on remote server inspection/save
    return this.httpClient.post(`${this.backendServiceUrl}/api/Lease/inspection/save`, data);
  }

}
