import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HyLink } from 'src/app/typescript-angular-client-generated';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input() rel: string;
  @Input() label: string;
  @Input() links: HyLink[];
  @Input() link: HyLink;

  @Output() open = new EventEmitter<HyLink>();

  constructor() {}

  ngOnInit() {
    if (!this.rel || !this.links) return;
    this.resolveLink();
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
