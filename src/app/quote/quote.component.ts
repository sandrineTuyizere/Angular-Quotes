import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote (1,'The purpose of our lives is to be happy.',
    'Quote of life by <br> Dalai Lama',new Date(2020,3,14)) ,
    new Quote (2,'Get busy living or get busy dying.',
     'this is a quote of life by John Lennon',new Date(2020,4,14)), 
    new Quote (3,'You only live once, but if you do it right, once is enough.',
     'the Author of this quote is Mae West',new Date(2020,5,14)),
     new Quote (4,'Many of life’s failures are people who did not realize how close they were to success when they gave up',
     'the Author of this quote is Thomas A. Edison',new Date(2020,6,14)),
     new Quote (5,'If you want to live a happy life, tie it to a goal, not to people or things.',
     'the Author of this quote is Albert Einstein',new Date(2020,7,14)),
     new Quote  (6, 'Never let the fear of striking out keep you from playing the game.',
     'the Author of this quote is Babe Ruth',new Date(2020,3,14))
   ];
   addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
   toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
