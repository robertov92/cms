import {EventEmitter, Injectable} from '@angular/core';
import {Contact} from "./contact.model";
import {MOCKCONTACTS} from "./MOCKCONTACTS";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [];
  maxContactId: number;
  contactListChangeEvent = new Subject<Contact[]>();
  contactSelectedEvent = new EventEmitter<Contact>();

  constructor() {
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId();
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(id: string): Contact {
    for (let i = 0; i < this.contacts.length; i++) {
      if (id === this.contacts[i].id) {
        return this.contacts[i];
      }
    }
    return null;
  }

  getMaxId(): number {
    let maxId = 0
    this.contacts.forEach(
      (document) => {
        let currentId: number = parseInt(document.id)
        if (currentId>maxId) maxId = currentId;
      }
    )
    return maxId
  }

  addContact(newContact: Contact) {
    if (newContact === undefined || newContact === null) return;
    this.maxContactId++
    newContact.id = this.maxContactId.toString();
    this.contacts.push(newContact);
    let contactsListClone = this.contacts.slice();
    this.contactListChangeEvent.next(contactsListClone);
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if (originalContact === undefined || originalContact === null
      || newContact === undefined || newContact === null) return;
    let pos = this.contacts.indexOf(originalContact);
    if (pos < 0) return;
    newContact.id = originalContact.id;
    this.contacts[pos] = newContact
    let contactsListClone = this.contacts.slice()
    this.contactListChangeEvent.next(contactsListClone);
  }


  deleteContact(contact: Contact) {
    if (contact === undefined || contact === null) return;
    let pos = this.contacts.indexOf(contact);
    if (pos < 0) return;
    this.contacts.splice(pos, 1);
    let contactsListClone = this.contacts.slice();
    this.contactListChangeEvent.next(contactsListClone);
  }
}
