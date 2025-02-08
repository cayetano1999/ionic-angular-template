import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-message',
  templateUrl: './search-message.component.html',
  styleUrls: ['./search-message.component.scss'],
})
export class SearchMessageComponent   {

  @Input() message: string = '';
  @Input() image: string = '';
  constructor() { }


}
