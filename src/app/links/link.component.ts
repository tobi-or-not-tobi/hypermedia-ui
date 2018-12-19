import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { HyLink } from 'src/app/typescript-angular-client-generated';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit, AfterViewInit {
  @Input() rel: string;
  @Input() label: string;
  @Input() links: HyLink[];
  @Input() link: HyLink;

  @Output() open = new EventEmitter<HyLink>();

  @ViewChild('contentWrapper') contentWrapper: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit() {
    if (!this.rel || !this.links) return;
    this.resolveLink();
  }

  ngAfterViewInit() {
    if (this.contentWrapper.nativeElement.childNodes.length === 0) {
      this.contentWrapper.nativeElement.innerText = this.label || this.rel;
    }
  }

  get isEnabled() {
    return !!this.link;
  }

  go() {
    this.open.emit(this.link);
  }

  private resolveLink() {
    this.link = this.links.find(l => {
      return l.rel === this.rel;
    });
  }
}
