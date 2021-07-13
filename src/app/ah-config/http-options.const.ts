import { HttpHeaders } from '@angular/common/http';

const header: any = new HttpHeaders({
	'Content-Type': 'application/json'
});

export interface IHttpOptions {
	headers: HttpHeaders;
	withCredentials: boolean;
	observe: 'response';
}

export const httpOptions: IHttpOptions = {
	headers: header,
	withCredentials: true,
	observe: 'response'
};
