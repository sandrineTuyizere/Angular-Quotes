import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] =[
    new Quote (1,'The purpose of our lives is to be happy.',
    'Quote of life by Dalai Lama',new Date(2020,3,14)) ,
    new Quote (2,'Get busy living or get busy dying.',
     'this is a quote of life by John Lennon',new Date(2020,3,14)), 
    new Quote (3,'You only live once, but if you do it right, once is enough.',
     'the Author of this quote is Mae West',new Date(2020,3,14)),
     new Quote (4,'Many of life’s failures are people who did not realize how close they were to success when they gave up',
     'the Author of this quote is Thomas A. Edison',new Date(2020,3,14)),
     new Quote (5,'If you want to live a happy life, tie it to a goal, not to people or things.',
     'the Author of this quote is Albert Einstein',new Date(2020,3,14)),
     new Quote  (6, 'Never let the fear of striking out keep you from playing the game.',
     'the Author of this quote is Babe Ruth',new Date(2020,3,14))]
}



