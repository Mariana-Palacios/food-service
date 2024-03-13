import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {

  constructor(private router: Router) { }  
  
  goToRoute(path:string) {  
    this.router.navigate([path]);  
  }  

}
