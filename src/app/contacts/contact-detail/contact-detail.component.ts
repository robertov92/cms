import {Component, OnInit} from '@angular/core';
import { Contact } from "../contact.model";
import {ContactService} from "../contact.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html'
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  id: string;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router,) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.contact = this.contactService.getContact(this.id);
      }
    )
  }

  onDelete() {
    this.contactService.deleteContact(this.contact);
    this.router.navigateByUrl('/contacts')
  }

}
