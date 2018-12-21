import {
  Directive,
  Input,
  AfterViewInit,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
  OnChanges,
  HostBinding
} from '@angular/core';
import { HyLink } from '../typescript-angular-client-generated';

@Directive({
  selector: '[link]'
})
export class LinkDirective implements AfterViewInit, OnChanges {
  @Input() link: HyLink;
  @Input() linkRel: string;
  @Input() linkItems: HyLink[];

  @Output() open = new EventEmitter<HyLink>();

  @HostListener('click', ['$event']) onClick(event) {
    this.go(event);
  }

  constructor(private ref: ElementRef) {}

  ngAfterViewInit() {
    if (this.ref.nativeElement.childNodes.length === 0) {
      this.ref.nativeElement.innerText = this.linkRel;
    }
  }

  ngOnChanges() {
    this.resolveLink();
  }

  private go(event: MouseEvent) {
    event.stopPropagation();
    this.open.emit(this.link);
  }

  private resolveLink() {
    if (!this.linkItems) return;
    this.link = this.linkItems.find(l => {
      return l.rel === this.linkRel;
    });

    this.setDisabled();
  }

  private setDisabled() {
    const el = <HTMLElement>this.ref.nativeElement;
    if (!this.link) {
      el.setAttribute('disabled', 'true');
    } else {
      el.removeAttribute('disabled');
    }
  }
}
