import { Component, Input, OnInit } from '@angular/core';
import { HyPaginationPagination } from '../typescript-angular-client-generated';
import { ContactsService } from '../contacts/contacts.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pagination: HyPaginationPagination;

  pageLength: number;
  pages = [];

  constructor(private contactService: ContactsService) {}

  ngOnInit() {
    this.pageLength = Math.round(
      (this.pagination.totalcount + this.pagination.size / 2) /
        this.pagination.size
    );
    for (let i = 0; i < this.pageLength; i++) {
      this.pages.push(i + 1);
    }
  }

  openPage(page: number) {
    if (page <= 0 && page > this.pageLength) return;

    this.contactService.page$.next(page);
  }

  get hasNext() {
    return this.pagination.page < this.pages.length;
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
}
