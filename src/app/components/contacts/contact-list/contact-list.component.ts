import { Component, Input, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { ContactPayload } from '@capacitor-community/contacts';
import { IonList } from '@ionic/angular/standalone';

@Component({
	selector: 'app-contact-list',
	templateUrl: './contact-list.component.html',
	styleUrls: ['./contact-list.component.scss'],
	standalone: true,
	imports: [IonList, ContactComponent]
})
export class ContactListComponent implements OnInit {
	@Input() contacts: ContactPayload[] | null = null;

	constructor() {}

	ngOnInit() {}
}
