import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HyLink } from '../typescript-angular-client-generated';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() pagination;
  @Output() openLink = new EventEmitter<HyLink>();
  @Output() paginate = new EventEmitter<any>();

  paginationForm = new FormGroup({
    page: new FormControl(''),
    pageSize: new FormControl('')
  });

  open(link: HyLink) {
    this.openLink.emit(link);
  }

  change(form: NgForm) {
    this.paginate.emit({
      page: form.controls.page.value,
      size: form.controls.pageSize.value
    });
  }
}
