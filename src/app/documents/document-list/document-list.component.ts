import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Document} from "../document.model";

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document(1, "Doc 1", "First Test Document", "None", null),
    new Document(2, "Doc 2", "Second Test Document", "None", null),
    new Document(3, "Doc 3", "Third Test Document", "None", null),
    new Document(3, "Doc 4", "Fourth Test Document", "None", null),
    new Document(3, "Doc 5", "Fifth Test Document", "None", null),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
