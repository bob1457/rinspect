import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from './shared/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rinspect';

  constructor(private notificaiotnService: NotificationService,
    private snackBar: MatSnackBar) {
      this.notificaiotnService.notification$.subscribe(message => {
        this.snackBar.open(message, 'close', {
          duration: 3000,
          panelClass: []
        });
      })
    }
}
