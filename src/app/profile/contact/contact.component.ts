import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  model: any = {};
  name: string = '';
  email: string = '';
  message: string = '';
  constructor() {}

  ngOnInit() {}

  getMailtoLink(): string {
    const subject = encodeURIComponent('Message from ' + this.name);
    const body = encodeURIComponent(
      "Sender's email: " + this.email + '\n\n' + this.message
    );

    return `mailto:amitgore17@gmail.com?subject=${subject}&body=${body}`;
  }
}
