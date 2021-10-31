import {Component, OnDestroy, OnInit} from '@angular/core';
import { Contact } from "../contact.model";
import {ContactService} from "../contact.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = []
  private subscription: Subscription;

  constructor(private contactsService: ContactService) { }

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
    this.subscription = this.contactsService.contactListChangeEvent.subscribe(
      (cons: Contact[]) => {
        this.contacts = cons;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
