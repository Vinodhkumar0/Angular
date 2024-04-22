import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';


interface Notification{
  id: number;
  type: string;
  message : string;
  timestamp: string;
}
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [RouterLink,NavbarComponent],
  templateUrl: './notification.component.html',
  styleUrl:'./notification.component.css'
})
export class NotificationComponent{
}