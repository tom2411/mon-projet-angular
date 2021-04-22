import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string ;
  @Input() indexOfAppareil: number;

  constructor(private appareilService: AppareilService) { }

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

  onSwitchOn(): void{
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff(): void{
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
