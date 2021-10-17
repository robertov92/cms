import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Message} from "../message.model";
import {MessageService} from "../message.service";

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html'
})
export class MessageEditComponent implements OnInit {
  currentSender: string = '100';
  @ViewChild('subject') subjectInputRef: ElementRef;
  @ViewChild('msgText') msgTextInputRef: ElementRef;
  @Output() messageSent = new EventEmitter<Message>();

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onSendMessage() {
    const subject = this.subjectInputRef.nativeElement.value;
    const msgText = this.msgTextInputRef.nativeElement.value;
    const newMessage = new Message('1',subject,msgText, this.currentSender);
    this.messageService.addMessage(newMessage);
    this.subjectInputRef.nativeElement.value = '';
    this.msgTextInputRef.nativeElement.value = '';
  }

  onClear() {
    this.subjectInputRef.nativeElement.value = '';
    this.msgTextInputRef.nativeElement.value = '';
  }
}
