import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from './shared/notification.service';
import { AppUpdateService } from './shared/services/app-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rinspect';

  constructor(private notificaiotnService: NotificationService,
              private sw: AppUpdateService,
              private snackBar: MatSnackBar) {
      this.notificaiotnService.notification$.subscribe(message => {
        this.snackBar.open(message, 'close', {
          duration: 3000,
          panelClass: ['snackbar-success']
        });
      });

      this.notificaiotnService.errorNotification$.subscribe(message => {
        this.snackBar.open(message, 'dismiss', {
          duration: 3000,
          panelClass: ['snackbar-error']
        })
      });

      this.sw.checkForUpdates();
    }
}
