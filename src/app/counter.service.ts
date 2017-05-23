/**
 * Created by administrator on 23/05/2017.
 */

export class CounterService
{
    //properties
    public goActive: number;
    public goInactive: number;

    constructor()
    {
      this.goActive = 0;
      this.goInactive = 0;
    }

    //methods
    public addToActive(): void
    {
      this.goActive++;
      console.log(this.goActive);
    }

    public addToInactive(): void
    {
      this.goInactive++;
      console.log(this.goInactive);
    }

}
