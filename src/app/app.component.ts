import { Component } from '@angular/core';

interface Nav{
  link: string, 
  name:string, 
  exact: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nav: Nav[] = [
  {
    link:'/badroute',
    name: 'Bad Route',
    exact: true
  }]
  constructor(){
  }
}
