import {Injectable} from '@angular/core';
import {CounterService} from './counter.service';
/**
 * Created by administrator on 23/05/2017.
 */

@Injectable()
export class UsersService
{
    //properties - data
    public activeUsers: string[] = ['Max', 'Anna'];
    public inactiveUsers: string[] = ['Chris', 'Manu'];

    //properties - events
    //public statusChanged: EventEmitter<string> = new EventEmitter<string>();

    //constructor
    constructor(private counterService: CounterService) {}

    //methods
    public setToActive(id: number): void
    {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      this.counterService.addToActive();
    }

    public setToInactive(id: number): void
    {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.counterService.addToInactive();
    }
}
