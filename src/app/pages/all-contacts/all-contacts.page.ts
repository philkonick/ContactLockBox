import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
	IonContent,
	IonHeader,
	IonTitle,
	IonToolbar,
	IonButtons,
	IonMenuButton
} from '@ionic/angular/standalone';
import { ContactListComponent } from 'src/app/components/contacts/contact-list/contact-list.component';
import {
	ContactPayload,
	Contacts,
	GetContactsResult
} from '@capacitor-community/contacts';

@Component({
	selector: 'app-all-contacts',
	templateUrl: './all-contacts.page.html',
	styleUrls: ['./all-contacts.page.scss'],
	standalone: true,
	imports: [
		IonButtons,
		IonContent,
		IonHeader,
		IonTitle,
		IonToolbar,
		CommonModule,
		FormsModule,
		IonMenuButton,
		ContactListComponent
	]
})
export class AllContactsPage implements OnInit {
	protected contacts: ContactPayload[] | null = null;

	constructor() {}

	ngOnInit() {
		Contacts.getContacts({
			projection: {
				name: true,
				phones: true
			}
		}).then((contacts) => {
			this.contacts = contacts.contacts;
		});
	}
}
