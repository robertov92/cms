import {Component, OnInit} from '@angular/core';
import { Contact } from "../contact.model";
import {ContactService} from "../contact.service";

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = []

  constructor(private contactsService: ContactService) { }

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
  }

  onSelected(contact: Contact) {
    this.contactsService.contactSelectedEvent.emit(contact);
  }
}
