import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private readonly notification: ToastrService) { }

  showNotification(message, type="success"){
    switch(type){
      case 'success': 
      this.notification.success(message)
      break;
      case 'error':
        this.notification.error(message)
        break;
      case 'warning':
        this.notification.warning(message)
        break;
    }
  }
}
