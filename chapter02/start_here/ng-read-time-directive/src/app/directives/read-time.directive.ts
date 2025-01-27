import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

export interface ReadTimeConfig {
  wordsPerMinute: number;
}

@Directive({
  selector: '[appReadTime]',
})
export class ReadTimeDirective implements OnInit {
  @Input() configuration: ReadTimeConfig = {
    wordsPerMinute: 20,
  };
  @Output() readTimeCalculated = new EventEmitter<string>();

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const text = this.el.nativeElement.textContent;
    const time = this.calculateReadTime(text);
    const timeStr = this.createTimeString(time);

    this.readTimeCalculated.emit(timeStr);
  }

  calculateReadTime(text: string) {
    const wordCount = text.split(/\s+/g).length;
    const minutes = wordCount / this.configuration.wordsPerMinute;

    return Math.ceil(minutes);
  }

  createTimeString(timeInMinutes: number) {
    if (timeInMinutes === 1) {
      return `1 minute`;
    } else if (timeInMinutes < 1) {
      return `< 1 minute`;
    } else {
      return `${timeInMinutes} minutes`;
    }
  }
}
