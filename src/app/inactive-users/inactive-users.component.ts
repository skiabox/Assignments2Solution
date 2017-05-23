import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  public users: string[];

  // @Output()
  // public userSetToActive: EventEmitter<number> = new EventEmitter<number>();

  constructor(private usersService: UsersService) { }

  public ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
  }

  //methods
  public onICSetToActive(id: number): void
  {
    this.usersService.setToActive(id);
  }

}
