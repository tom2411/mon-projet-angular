import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName = '';
  @Input() appareilStatus = '';

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(): string{
    return this.appareilStatus;
  }

  getColor(): string {
    if (this.appareilStatus === 'éteint'){
      return 'red';
    }else {
      return 'green';
    }
  }
}
