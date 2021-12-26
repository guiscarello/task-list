import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title:string = "Task list";
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(
      private uiService:UiService,
      private router:Router
  ) { 
    this.subscription = this.uiService
      .onToggle()
      .subscribe( val => {
      this.showAddTask = val;
    });
  }

  ngOnInit(): void {
  }
  
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route:string):boolean{
    return this.router.url == route;
  }

}
