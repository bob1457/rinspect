import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class AppUpdateService {

  // constructor(private swUpdate: SwUpdate, private snackbar: MatSnackBar) { 
  //   this.swUpdate.available.subscribe(evt => {
  //     const snack = this.snackbar.open('Update Available', 'Reload');
  //     snack
  //       .onAction()
  //       .subscribe(() => {
  //         window.location.reload();
  //       });    

  //     })
  // } 

  // debugger;
  constructor(public updates: SwUpdate) {
    updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }

  public checkForUpdates(): void {
    // debugger;
    this.updates.available.subscribe(event => this.promptUser());
  }

  private promptUser(): void {
    console.log('updating to new version');
    this.updates.activateUpdate().then(() => document.location.reload()); 
  }

}
