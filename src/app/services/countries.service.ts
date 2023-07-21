import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

declare const Liferay: any;

@Injectable({
    providedIn: 'root'
})
export class CountriesService {

    constructor(private http: HttpClient) {
    }

    public getCountries() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
        };

        let prom = new Promise((resolve, reject) => {
            this.http.get(`/api/jsonws/country/get-countries/`, httpOptions).subscribe((result) => {
                // @ts-ignore
                let countries = result.map(item => item.nameCurrentValue);
                resolve(countries);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }
}
