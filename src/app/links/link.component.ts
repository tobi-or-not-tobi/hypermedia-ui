import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HyLink } from 'src/app/typescript-angular-client-generated';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input() rel: string;
  @Input() links: HyLink[];
  @Output() open = new EventEmitter<HyLink>();

  @Input() link: HyLink;

  constructor() {}

  ngOnInit() {
    if (!this.rel || !this.links) return;
    this.link = this.links.find(l => l.rel === this.rel);
  }

  get isEnabled() {
    return !!this.link;
  }

  go() {
    this.open.emit(this.link);
  }
}
