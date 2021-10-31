import {EventEmitter, Injectable} from '@angular/core';
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";
import {Document} from "./document.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: Document[] = [];
  maxDocumentId: number;
  documentListChangedEvent = new Subject<Document[]>();
  documentSelectedEvent = new EventEmitter<Document>();

  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document {
    for (let i = 0; i < this.documents.length; i++) {
      if (id === this.documents[i].id) {
        return this.documents[i];
      }
    }
    return null;
  }

  getMaxId(): number {
    let maxId = 0
    this.documents.forEach(
      (document) => {
        let currentId: number = parseInt(document.id)
        if (currentId>maxId) maxId = currentId;
      }
    )
    return maxId
  }

  addDocument(newDocument: Document) {
    if (newDocument === undefined || newDocument === null) return;
    this.maxDocumentId++
    newDocument.id = this.maxDocumentId.toString();
    this.documents.push(newDocument);
    let documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (originalDocument === undefined || originalDocument === null
      || newDocument === undefined || newDocument === null) return;
    let pos = this.documents.indexOf(originalDocument);
    if (pos < 0) return;
    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument
    let documentsListClone = this.documents.slice()
    this.documentListChangedEvent.next(documentsListClone);
  }

  deleteDocument(document: Document) {
    if (document === undefined || document === null) return;
    let pos = this.documents.indexOf(document);
    if (pos < 0) return;
    this.documents.splice(pos, 1);
    let documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
  }

}
