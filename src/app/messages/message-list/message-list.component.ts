import { Component, OnInit } from '@angular/core';
import {Message} from "../message.model";

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message(1, 'School', 'Hey hello', 'Bob'),
    new Message(2, 'School', 'Hi, what\'s up', 'Ross'),
    new Message(3, 'School', 'Nothing much', 'Bob'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
