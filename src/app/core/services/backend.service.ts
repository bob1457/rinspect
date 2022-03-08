import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  backendServiceUrl = 'http://localhost:63533';

  constructor(private httoClient: HttpClient) { }

  getAllLeaseList() {
    return this.httoClient.get(`${this.backendServiceUrl}/api/Lease/alllease`);
  }

  getLeaseDetails(id) {
    return this.httoClient.get(`${this.backendServiceUrl}/api/Lease/info/${id}`);
  }

  saveReport(data) {
    // Save report on remote server
    return data;
  }

}
