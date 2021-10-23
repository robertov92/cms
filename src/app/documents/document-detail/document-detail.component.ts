import {Component, OnInit} from '@angular/core';
import {Document} from "../document.model";
import {DocumentService} from "../document.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  document: Document;
  id: string;

  constructor(private documentService: DocumentService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.document = this.documentService.getDocument(this.id);
      }
    )
  }

}
