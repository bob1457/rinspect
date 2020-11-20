import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public notification$: Subject<string> = new Subject();
  public errorNotification$: Subject<string> = new Subject();

  constructor() { }

}
