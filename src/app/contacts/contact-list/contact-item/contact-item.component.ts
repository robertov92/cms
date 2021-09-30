import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../../contact.model";

@Component({
  selector: 'cms-contact-item',
  templateUrl: './contact-item.component.html'
})
export class ContactItemComponent implements OnInit {
  // contact can get stuff from parent component because of the @Input decorator
  @Input() contact: Contact;

  // used to emit the click event on one of the items
  @Output() selectedContactEventItem = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.selectedContactEventItem.emit();
  }
}
