import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

declare const Liferay: any;

@Injectable({
    providedIn: 'root'
})
export class autoinsurancequotationrequestsService {
    constructor(private http: HttpClient) {
    }

    public deleteByExternalReferenceCode(externalReferenceCode: any) {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams


        };
        let prom = new Promise((resolve, reject) => {
            this.http.delete(`/o/c/autoinsurancequotationrequests/by-external-reference-code/${externalReferenceCode}`, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public getByExternalReferenceCode(externalReferenceCode: any, fields: any = null, nestedFields: any = null, restrictFields: any = null) {

        let queryParams = new HttpParams();
        if (fields)
            queryParams = queryParams.append('fields', fields);

        if (nestedFields)
            queryParams = queryParams.append('nestedFields', nestedFields);

        if (restrictFields)
            queryParams = queryParams.append('restrictFields', restrictFields);


        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams
        };

        let prom = new Promise((resolve, reject) => {
            this.http.get(`/o/c/autoinsurancequotationrequests/by-external-reference-code/${externalReferenceCode}`, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public patchByExternalReferenceCode(externalReferenceCode: any, AutoInsuranceQuotationRequest: any) {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams
        };
        let prom = new Promise((resolve, reject) => {
            this.http.patch(`/o/c/autoinsurancequotationrequests/by-external-reference-code/${externalReferenceCode}`, AutoInsuranceQuotationRequest, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public putByExternalReferenceCode(externalReferenceCode: any, AutoInsuranceQuotationRequest: any) {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams
        };
        let prom = new Promise((resolve, reject) => {
            this.http.put(`/o/c/autoinsurancequotationrequests/by-external-reference-code/${externalReferenceCode}`, AutoInsuranceQuotationRequest, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public getAutoInsuranceQuotationRequestsPage(aggregationTerms: any = null, fields: any = null, flatten: any = null, nestedFields: any = null, restrictFields: any = null, filter: any = null, page: any = null, pageSize: any = null, search: any = null, sort: any = null) {

        let queryParams = new HttpParams();
        if (aggregationTerms)
            queryParams = queryParams.append('aggregationTerms', aggregationTerms);

        if (fields)
            queryParams = queryParams.append('fields', fields);

        if (flatten)
            queryParams = queryParams.append('flatten', flatten);

        if (nestedFields)
            queryParams = queryParams.append('nestedFields', nestedFields);

        if (restrictFields)
            queryParams = queryParams.append('restrictFields', restrictFields);

        if (filter)
            queryParams = queryParams.append('filter', filter);

        if (page)
            queryParams = queryParams.append('page', page);

        if (pageSize)
            queryParams = queryParams.append('pageSize', pageSize);

        if (search)
            queryParams = queryParams.append('search', search);

        if (sort)
            queryParams = queryParams.append('sort', sort);


        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams
        };

        let prom = new Promise((resolve, reject) => {
            this.http.get(`/o/c/autoinsurancequotationrequests/`, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public postAutoInsuranceQuotationRequest(AutoInsuranceQuotationRequest: any) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })


        };
        let prom = new Promise((resolve, reject) => {
            this.http.post(`/o/c/autoinsurancequotationrequests/`, AutoInsuranceQuotationRequest, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public postAutoInsuranceQuotationRequestsPageExportBatch(filter: any = null, search: any = null, sort: any = null, callbackURL: any = null, contentType: any = null, fieldNames: any = null) {
        let queryParams = new HttpParams();
        if (filter)
            queryParams = queryParams.append('filter', filter);

        if (search)
            queryParams = queryParams.append('search', search);

        if (sort)
            queryParams = queryParams.append('sort', sort);

        if (callbackURL)
            queryParams = queryParams.append('callbackURL', callbackURL);

        if (contentType)
            queryParams = queryParams.append('contentType', contentType);

        if (fieldNames)
            queryParams = queryParams.append('fieldNames', fieldNames);

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams

        };
        let prom = new Promise((resolve, reject) => {
            this.http.post(`/o/c/autoinsurancequotationrequests/export-batch`, {}, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public deleteAutoInsuranceQuotationRequestBatch(callbackURL: any = null, requestBodyobject: any) {
        let queryParams = new HttpParams();
        if (callbackURL)
            queryParams = queryParams.append('callbackURL', callbackURL);

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams
            , data: requestBodyobject

        };
        let prom = new Promise((resolve, reject) => {
            this.http.delete(`/o/c/autoinsurancequotationrequests/batch`, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public postAutoInsuranceQuotationRequestBatch(callbackURL: any = null, requestBodyobject: any) {
        let queryParams = new HttpParams();
        if (callbackURL)
            queryParams = queryParams.append('callbackURL', callbackURL);

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams

        };
        let prom = new Promise((resolve, reject) => {
            this.http.post(`/o/c/autoinsurancequotationrequests/batch`, requestBodyobject, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public putAutoInsuranceQuotationRequestBatch(callbackURL: any = null, requestBodyobject: any) {
        let queryParams = new HttpParams();
        if (callbackURL)
            queryParams = queryParams.append('callbackURL', callbackURL);

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams
        };
        let prom = new Promise((resolve, reject) => {
            this.http.put(`/o/c/autoinsurancequotationrequests/batch`, requestBodyobject, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public getOpenAPI(type: any) {

        let queryParams = new HttpParams();

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams
        };

        let prom = new Promise((resolve, reject) => {
            this.http.get(`/o/c/autoinsurancequotationrequests/openapi.${type}`, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public deleteAutoInsuranceQuotationRequest(autoInsuranceQuotationRequestId: any) {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams


        };
        let prom = new Promise((resolve, reject) => {
            this.http.delete(`/o/c/autoinsurancequotationrequests/${autoInsuranceQuotationRequestId}`, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public getAutoInsuranceQuotationRequest(autoInsuranceQuotationRequestId: any, fields: any = null, nestedFields: any = null, restrictFields: any = null) {

        let queryParams = new HttpParams();
        if (fields)
            queryParams = queryParams.append('fields', fields);

        if (nestedFields)
            queryParams = queryParams.append('nestedFields', nestedFields);

        if (restrictFields)
            queryParams = queryParams.append('restrictFields', restrictFields);


        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams
        };

        let prom = new Promise((resolve, reject) => {
            this.http.get(`/o/c/autoinsurancequotationrequests/${autoInsuranceQuotationRequestId}`, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public patchAutoInsuranceQuotationRequest(autoInsuranceQuotationRequestId: any, AutoInsuranceQuotationRequest: any) {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams
        };
        let prom = new Promise((resolve, reject) => {
            this.http.patch(`/o/c/autoinsurancequotationrequests/${autoInsuranceQuotationRequestId}`, AutoInsuranceQuotationRequest, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public putAutoInsuranceQuotationRequest(autoInsuranceQuotationRequestId: any, AutoInsuranceQuotationRequest: any) {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams
        };
        let prom = new Promise((resolve, reject) => {
            this.http.put(`/o/c/autoinsurancequotationrequests/${autoInsuranceQuotationRequestId}`, AutoInsuranceQuotationRequest, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public getAutoInsuranceQuotationRequestPermissionsPage(autoInsuranceQuotationRequestId: any, fields: any = null, nestedFields: any = null, restrictFields: any = null, roleNames: any = null) {

        let queryParams = new HttpParams();
        if (fields)
            queryParams = queryParams.append('fields', fields);

        if (nestedFields)
            queryParams = queryParams.append('nestedFields', nestedFields);

        if (restrictFields)
            queryParams = queryParams.append('restrictFields', restrictFields);

        if (roleNames)
            queryParams = queryParams.append('roleNames', roleNames);


        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams
        };

        let prom = new Promise((resolve, reject) => {
            this.http.get(`/o/c/autoinsurancequotationrequests/${autoInsuranceQuotationRequestId}/permissions`, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public putAutoInsuranceQuotationRequestPermissionsPage(autoInsuranceQuotationRequestId: any) {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams
        };
        let prom = new Promise((resolve, reject) => {
            this.http.put(`/o/c/autoinsurancequotationrequests/${autoInsuranceQuotationRequestId}/permissions`, {}, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public getAutoInsuranceQuotationRequestTaskCallBackTaskPage(autoInsuranceQuotationRequestId: any, fields: any = null, nestedFields: any = null, page: any = null, pageSize: any = null, restrictFields: any = null) {

        let queryParams = new HttpParams();
        if (fields)
            queryParams = queryParams.append('fields', fields);

        if (nestedFields)
            queryParams = queryParams.append('nestedFields', nestedFields);

        if (page)
            queryParams = queryParams.append('page', page);

        if (pageSize)
            queryParams = queryParams.append('pageSize', pageSize);

        if (restrictFields)
            queryParams = queryParams.append('restrictFields', restrictFields);


        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams
        };

        let prom = new Promise((resolve, reject) => {
            this.http.get(`/o/c/autoinsurancequotationrequests/${autoInsuranceQuotationRequestId}/task`, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }


    public deleteAutoInsuranceQuotationRequestTaskCallBackTask(autoInsuranceQuotationRequestId: any, callBackTaskId: any) {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams


        };
        let prom = new Promise((resolve, reject) => {
            this.http.delete(`/o/c/autoinsurancequotationrequests/${autoInsuranceQuotationRequestId}/task/${callBackTaskId}`, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }
    public putAutoInsuranceQuotationRequestTaskCallBackTask(autoInsuranceQuotationRequestId: any, callBackTaskId: any) {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams
        };
        let prom = new Promise((resolve, reject) => {
            this.http.put(`/o/c/autoinsurancequotationrequests/${autoInsuranceQuotationRequestId}/task/${callBackTaskId}`, {}, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }
    public putAutoInsuranceQuotationRequestAssignToMe(autoInsuranceQuotationRequestId: any) {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            , params: queryParams
        };
        let prom = new Promise((resolve, reject) => {
            this.http.put(`/o/c/autoinsurancequotationrequests/${autoInsuranceQuotationRequestId}/object-actions/assignToMe`, {}, httpOptions).subscribe((result) => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
        return prom;
    }
}
