import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    //properties
    //public activeUsers: string[];
    //public inactiveUsers: string[];

    //constructor
    //constructor(private usersService: UsersService) {}

    //implements OnInit interface
    public ngOnInit(): void
    {
      //this.activeUsers = this.usersService.activeUsers;
      //this.inactiveUsers = this.usersService.inactiveUsers;
    }
}
