import { Component, OnInit } from '@angular/core';
import {Document} from "./document.model";

@Component({
  selector: 'cms-documents',
  templateUrl: './documents.component.html'
})
export class DocumentsComponent implements OnInit {
  selectedDocument: Document;

  constructor() { }

  ngOnInit(): void {
  }

}
