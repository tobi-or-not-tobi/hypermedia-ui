import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { ContactsService } from '../contacts/contacts.service';
import { HyPagination } from '../typescript-angular-client-generated';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  @Input() pagination: HyPagination;

  pageRange = [];

  constructor(private contactService: ContactsService) {}

  ngOnChanges() {
    if (this.pagination.page > this.pageLength) {
      this.page = this.pageLength;
    }
    this.pageRange = this.paginate(this.pagination.page, this.pageLength);
  }

  get pageLength() {
    return Math.round(
      (this.pagination.totalcount + this.pagination.size / 2) /
        this.pagination.size
    );
  }

  set page(page: number) {
    if (page <= 0 || page > this.pageLength) return;
    this.contactService.page$.next(page);
  }

  set size(size: number) {
    this.contactService.size$.next(size);
  }

  get hasNext() {
    return this.pagination.page < this.pageLength;
  }
  get hasPrevious() {
    return this.pagination.page - 1 > 0;
  }

  get pageNum() {
    return Math.round(
      (this.pagination.totalcount + this.pagination.size / 2 + 1) /
        this.pagination.size -
        1
    );
  }

  // thanks to https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
  private paginate = (currentPage: number, pageCount: number) => {
    const delta = 2;

    let range = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(pageCount - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      range.unshift('...');
    }
    if (currentPage + delta < pageCount - 1) {
      range.push('...');
    }

    range.unshift(1);
    range.push(pageCount);

    return range;
  };
}
