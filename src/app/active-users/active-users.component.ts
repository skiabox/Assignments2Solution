import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  public users: string[];

  // @Output()
  // public userSetToInactive: EventEmitter<number> = new EventEmitter<number>();

  constructor(private usersService: UsersService) { }

  public ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }

  //methods
  public onACSetToInactive(id: number): void
  {
    this.usersService.setToInactive(id);
  }
}
