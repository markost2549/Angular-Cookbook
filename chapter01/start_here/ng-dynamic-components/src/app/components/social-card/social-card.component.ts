import { TwitterCardComponent } from './../twitter-card/twitter-card.component';
import { FbCardComponent } from './../fb-card/fb-card.component';
import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { SocialCardType } from 'src/app/constants/social-card-type';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss'],
})
export class SocialCardComponent implements OnInit, OnChanges {
  @Input() type: SocialCardType;

  @ViewChild('vfr', { read: ViewContainerRef }) vfr: ViewContainerRef;

  cardTypes = SocialCardType;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.type.currentValue !== undefined) {
      console.log(`Card type changed to: ${changes.type.currentValue}`);
      this.loadDynamicComponent(changes.type.currentValue);
    }
  }

  loadDynamicComponent(type: SocialCardType) {
    let component;
    switch (type) {
      case SocialCardType.Facebook:
        component = FbCardComponent;
        break;
      case SocialCardType.Twitter:
        component = TwitterCardComponent;
        break;
    }
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(component);
    this.vfr.clear();
    this.vfr.createComponent(componentFactory);
  }
}
