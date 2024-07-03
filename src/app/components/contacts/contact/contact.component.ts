import { Component, Input, OnInit } from '@angular/core';
import { ContactPayload } from '@capacitor-community/contacts';
import { IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
	standalone: true,
	imports: [IonLabel, IonItem]
})
export class ContactComponent implements OnInit {
	@Input() contact: ContactPayload | null = null;

	constructor() {}

	ngOnInit() {}
}
