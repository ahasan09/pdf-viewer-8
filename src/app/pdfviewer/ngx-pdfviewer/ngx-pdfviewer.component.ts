import { Component, OnInit } from '@angular/core';
import { PI,AHService } from '@ahconfig';

@Component({
	selector: 'app-ngx-pdfviewer',
	templateUrl: './ngx-pdfviewer.component.html',
	styleUrls: [ './ngx-pdfviewer.component.css' ]
})
export class NgxPdfviewerComponent implements OnInit {
	viewer: string = 'This is test viewer';
	pi: number = PI;
	constructor(private _AHService:AHService) {}

	ngOnInit() {}
}
