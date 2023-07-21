
    import {Injectable, OnInit} from '@angular/core';
    import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
    import {map} from "rxjs/operators";
    
    declare const Liferay: any;
    @Injectable({
        providedIn: 'root'
    })
    export class headless_admin_userService {
        constructor(private http:HttpClient) { }
        
    public getAccountsPage (filter:any=null,page:any=null,pageSize:any=null,search:any=null,sort:any=null)
    {
    
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/accounts`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccount (Account:any)
    {
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts`,Account,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteAccount (accountId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/accounts/${accountId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getAccount (accountId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/accounts/${accountId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public patchAccount (accountId:any,Account:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.patch(`/o/headless-admin-user/v1.0/accounts/${accountId}`,Account,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public putAccount (accountId:any,Account:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/headless-admin-user/v1.0/accounts/${accountId}`,Account,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteOrganizationAccounts (organizationId:any,requestBodyarray:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            ,data:requestBodyarray
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/organizations/${organizationId}/accounts`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getOrganizationAccountsPage (organizationId:any,filter:any=null,page:any=null,pageSize:any=null,search:any=null,sort:any=null)
    {
    
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/organizations/${organizationId}/accounts`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postOrganizationAccounts (organizationId:any,requestBodyarray:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/organizations/${organizationId}/accounts`,requestBodyarray,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteAccountByExternalReferenceCode (externalReferenceCode:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getAccountByExternalReferenceCode (externalReferenceCode:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public patchAccountByExternalReferenceCode (externalReferenceCode:any,Account:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.patch(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}`,Account,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public putAccountByExternalReferenceCode (externalReferenceCode:any,Account:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}`,Account,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public patchOrganizationMoveAccounts (sourceOrganizationId:any,targetOrganizationId:any,requestBodyarray:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.patch(`/o/headless-admin-user/v1.0/organizations/move-accounts/${sourceOrganizationId}/${targetOrganizationId}`,requestBodyarray,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteOrganizationAccountsByExternalReferenceCode (organizationId:any,requestBodyarray:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            ,data:requestBodyarray
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/organizations/${organizationId}/accounts/by-external-reference-code`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postOrganizationAccountsByExternalReferenceCode (organizationId:any,requestBodyarray:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/organizations/${organizationId}/accounts/by-external-reference-code`,requestBodyarray,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public patchOrganizationMoveAccountsByExternalReferenceCode (sourceOrganizationId:any,targetOrganizationId:any,requestBodyarray:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.patch(`/o/headless-admin-user/v1.0/organizations/move-accounts/${sourceOrganizationId}/${targetOrganizationId}/by-external-reference-code`,requestBodyarray,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteAccountBatch (callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            ,data:requestBodyobject
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/accounts/batch`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountBatch (callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/batch`,requestBodyobject,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public putAccountBatch (callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/headless-admin-user/v1.0/accounts/batch`,requestBodyobject,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountsPageExportBatch (filter:any=null,search:any=null,sort:any=null,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postOrganizationAccountsPageExportBatch (organizationId:any,filter:any=null,search:any=null,sort:any=null,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/organizations/${organizationId}/accounts/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteAccountByExternalReferenceCodeAccountRoleUserAccountByEmailAddress (externalReferenceCode:any,accountRoleId:any,emailAddress:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}/account-roles/${accountRoleId}/user-accounts/by-email-address/${emailAddress}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountByExternalReferenceCodeAccountRoleUserAccountByEmailAddress (externalReferenceCode:any,accountRoleId:any,emailAddress:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}/account-roles/${accountRoleId}/user-accounts/by-email-address/${emailAddress}`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getAccountByExternalReferenceCodeUserAccountByEmailAddressAccountRolesPage (externalReferenceCode:any,emailAddress:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}/user-accounts/by-email-address/${emailAddress}/account-roles`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getAccountAccountRolesPage (accountId:any,keywords:any=null,filter:any=null,page:any=null,pageSize:any=null,sort:any=null)
    {
    
        let queryParams = new HttpParams();
       if(keywords)
          queryParams = queryParams.append('keywords', keywords);
       
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/accounts/${accountId}/account-roles`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountAccountRole (accountId:any,AccountRole:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/${accountId}/account-roles`,AccountRole,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getAccountAccountRolesByExternalReferenceCodePage (externalReferenceCode:any,keywords:any=null,filter:any=null,page:any=null,pageSize:any=null,sort:any=null)
    {
    
        let queryParams = new HttpParams();
       if(keywords)
          queryParams = queryParams.append('keywords', keywords);
       
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}/account-roles`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountAccountRoleByExternalReferenceCode (externalReferenceCode:any,AccountRole:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}/account-roles`,AccountRole,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteAccountAccountRoleUserAccountAssociation (accountId:any,accountRoleId:any,userAccountId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/accounts/${accountId}/account-roles/${accountRoleId}/user-accounts/${userAccountId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountAccountRoleUserAccountAssociation (accountId:any,accountRoleId:any,userAccountId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/${accountId}/account-roles/${accountRoleId}/user-accounts/${userAccountId}`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteAccountByExternalReferenceCodeAccountRoleUserAccountByExternalReferenceCode (accountExternalReferenceCode:any,accountRoleId:any,externalReferenceCode:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${accountExternalReferenceCode}/account-roles/${accountRoleId}/user-accounts/by-external-reference-code/${externalReferenceCode}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountByExternalReferenceCodeAccountRoleUserAccountByExternalReferenceCode (accountExternalReferenceCode:any,accountRoleId:any,externalReferenceCode:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${accountExternalReferenceCode}/account-roles/${accountRoleId}/user-accounts/by-external-reference-code/${externalReferenceCode}`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getAccountByExternalReferenceCodeUserAccountByExternalReferenceCodeAccountRolesPage (accountExternalReferenceCode:any,externalReferenceCode:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${accountExternalReferenceCode}/user-accounts/by-external-reference-code/${externalReferenceCode}/account-roles`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountAccountRolesPageExportBatch (accountId:any,keywords:any=null,filter:any=null,sort:any=null,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(keywords)
          queryParams = queryParams.append('keywords', keywords);
       
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/${accountId}/account-roles/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountAccountRoleBatch (accountId:any,callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/${accountId}/account-roles/batch`,requestBodyobject,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getEmailAddress (emailAddressId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/email-addresses/${emailAddressId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getOrganizationEmailAddressesPage (organizationId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/organizations/${organizationId}/email-addresses`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getUserAccountEmailAddressesPage (userAccountId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/user-accounts/${userAccountId}/email-addresses`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postOrganizationEmailAddressesPageExportBatch (organizationId:any,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/organizations/${organizationId}/email-addresses/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postUserAccountEmailAddressesPageExportBatch (userAccountId:any,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/user-accounts/${userAccountId}/email-addresses/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getOpenAPI (type:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/openapi.${type}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteOrganization (organizationId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/organizations/${organizationId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getOrganization (organizationId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/organizations/${organizationId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public patchOrganization (organizationId:any,Organization:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.patch(`/o/headless-admin-user/v1.0/organizations/${organizationId}`,Organization,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public putOrganization (organizationId:any,Organization:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/headless-admin-user/v1.0/organizations/${organizationId}`,Organization,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getOrganizationsPage (flatten:any=null,filter:any=null,page:any=null,pageSize:any=null,search:any=null,sort:any=null)
    {
    
        let queryParams = new HttpParams();
       if(flatten)
          queryParams = queryParams.append('flatten', flatten);
       
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/organizations`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postOrganization (Organization:any)
    {
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/organizations`,Organization,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteAccountOrganization (accountId:any,organizationId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/accounts/${accountId}/organizations/${organizationId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountOrganization (accountId:any,organizationId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/${accountId}/organizations/${organizationId}`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteOrganizationByExternalReferenceCode (externalReferenceCode:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/organizations/by-external-reference-code/${externalReferenceCode}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getOrganizationByExternalReferenceCode (externalReferenceCode:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/organizations/by-external-reference-code/${externalReferenceCode}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public patchOrganizationByExternalReferenceCode (externalReferenceCode:any,Organization:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.patch(`/o/headless-admin-user/v1.0/organizations/by-external-reference-code/${externalReferenceCode}`,Organization,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public putOrganizationByExternalReferenceCode (externalReferenceCode:any,Organization:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/headless-admin-user/v1.0/organizations/by-external-reference-code/${externalReferenceCode}`,Organization,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getOrganizationOrganizationsPage (parentOrganizationId:any,flatten:any=null,filter:any=null,page:any=null,pageSize:any=null,search:any=null,sort:any=null)
    {
    
        let queryParams = new HttpParams();
       if(flatten)
          queryParams = queryParams.append('flatten', flatten);
       
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/organizations/${parentOrganizationId}/organizations`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteUserAccountByEmailAddress (organizationId:any,emailAddress:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/organizations/${organizationId}/user-accounts/by-email-address/${emailAddress}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postUserAccountByEmailAddress (organizationId:any,emailAddress:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/organizations/${organizationId}/user-accounts/by-email-address/${emailAddress}`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteUserAccountsByEmailAddress (organizationId:any,requestBodyarray:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            ,data:requestBodyarray
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/organizations/${organizationId}/user-accounts/by-email-address`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postUserAccountsByEmailAddress (organizationId:any,organizationRoleIds:any=null,requestBodyarray:any)
    {
        let queryParams = new HttpParams();
       if(organizationRoleIds)
          queryParams = queryParams.append('organizationRoleIds', organizationRoleIds);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/organizations/${organizationId}/user-accounts/by-email-address`,requestBodyarray,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getOrganizationChildOrganizationsPage (organizationId:any,flatten:any=null,filter:any=null,page:any=null,pageSize:any=null,search:any=null,sort:any=null)
    {
    
        let queryParams = new HttpParams();
       if(flatten)
          queryParams = queryParams.append('flatten', flatten);
       
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/organizations/${organizationId}/child-organizations`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getAccountOrganizationsPage (accountId:any,filter:any=null,page:any=null,pageSize:any=null,search:any=null,sort:any=null)
    {
    
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/accounts/${accountId}/organizations`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteAccountByExternalReferenceCodeOrganization (externalReferenceCode:any,organizationId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}/organizations/${organizationId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountByExternalReferenceCodeOrganization (externalReferenceCode:any,organizationId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}/organizations/${organizationId}`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getAccountByExternalReferenceCodeOrganizationsPage (externalReferenceCode:any,filter:any=null,page:any=null,pageSize:any=null,search:any=null,sort:any=null)
    {
    
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}/organizations`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteOrganizationBatch (callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            ,data:requestBodyobject
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/organizations/batch`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postOrganizationBatch (callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/organizations/batch`,requestBodyobject,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public putOrganizationBatch (callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/headless-admin-user/v1.0/organizations/batch`,requestBodyobject,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postOrganizationsPageExportBatch (filter:any=null,search:any=null,sort:any=null,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/organizations/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountOrganizationsPageExportBatch (accountId:any,filter:any=null,search:any=null,sort:any=null,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/${accountId}/organizations/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getPhone (phoneId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/phones/${phoneId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getOrganizationPhonesPage (organizationId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/organizations/${organizationId}/phones`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getUserAccountPhonesPage (userAccountId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/user-accounts/${userAccountId}/phones`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postOrganizationPhonesPageExportBatch (organizationId:any,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/organizations/${organizationId}/phones/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postUserAccountPhonesPageExportBatch (userAccountId:any,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/user-accounts/${userAccountId}/phones/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getAccountPostalAddressesPage (accountId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/accounts/${accountId}/postal-addresses`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getOrganizationPostalAddressesPage (organizationId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/organizations/${organizationId}/postal-addresses`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getUserAccountPostalAddressesPage (userAccountId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/user-accounts/${userAccountId}/postal-addresses`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getPostalAddress (postalAddressId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/postal-addresses/${postalAddressId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountPostalAddressesPageExportBatch (accountId:any,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/${accountId}/postal-addresses/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postOrganizationPostalAddressesPageExportBatch (organizationId:any,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/organizations/${organizationId}/postal-addresses/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postUserAccountPostalAddressesPageExportBatch (userAccountId:any,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/user-accounts/${userAccountId}/postal-addresses/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getRole (roleId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/roles/${roleId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteOrganizationRoleUserAccountAssociation (roleId:any,userAccountId:any,organizationId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/roles/${roleId}/association/user-account/${userAccountId}/organization/${organizationId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postOrganizationRoleUserAccountAssociation (roleId:any,userAccountId:any,organizationId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/roles/${roleId}/association/user-account/${userAccountId}/organization/${organizationId}`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteRoleUserAccountAssociation (roleId:any,userAccountId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/roles/${roleId}/association/user-account/${userAccountId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postRoleUserAccountAssociation (roleId:any,userAccountId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/roles/${roleId}/association/user-account/${userAccountId}`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteSiteRoleUserAccountAssociation (roleId:any,userAccountId:any,siteId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/roles/${roleId}/association/user-account/${userAccountId}/site/${siteId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postSiteRoleUserAccountAssociation (roleId:any,userAccountId:any,siteId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/roles/${roleId}/association/user-account/${userAccountId}/site/${siteId}`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getRolesPage (types:any=null,page:any=null,pageSize:any=null,search:any=null)
    {
    
        let queryParams = new HttpParams();
       if(types)
          queryParams = queryParams.append('types', types);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/roles`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postRolesPageExportBatch (types:any=null,search:any=null,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(types)
          queryParams = queryParams.append('types', types);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/roles/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getSiteUserAccountSegmentsPage (siteId:any,userAccountId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/sites/${siteId}/user-accounts/${userAccountId}/segments`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getSiteSegmentsPage (siteId:any,page:any=null,pageSize:any=null)
    {
    
        let queryParams = new HttpParams();
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/sites/${siteId}/segments`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postSiteSegmentsPageExportBatch (siteId:any,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/sites/${siteId}/segments/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getSegmentUserAccountsPage (segmentId:any,page:any=null,pageSize:any=null)
    {
    
        let queryParams = new HttpParams();
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/segments/${segmentId}/user-accounts`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getSite (siteId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/sites/${siteId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getMyUserAccountSitesPage (page:any=null,pageSize:any=null)
    {
    
        let queryParams = new HttpParams();
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/my-user-account/sites`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getSiteByFriendlyUrlPath (friendlyUrlPath:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/sites/by-friendly-url-path/${friendlyUrlPath}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteMyUserAccountSubscription (subscriptionId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/my-user-account/subscriptions/${subscriptionId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getMyUserAccountSubscription (subscriptionId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/my-user-account/subscriptions/${subscriptionId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getMyUserAccountSubscriptionsPage (contentType:any=null,page:any=null,pageSize:any=null)
    {
    
        let queryParams = new HttpParams();
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/my-user-account/subscriptions`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getUserAccountEmailVerificationTicket (userAccountId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/user-accounts/${userAccountId}/email-verification-ticket`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getUserAccountPasswordResetTicket (userAccountId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/user-accounts/${userAccountId}/password-reset-ticket`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteAccountByExternalReferenceCodeUserAccountByExternalReferenceCode (accountExternalReferenceCode:any,externalReferenceCode:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${accountExternalReferenceCode}/user-accounts/by-external-reference-code/${externalReferenceCode}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountByExternalReferenceCodeUserAccountByExternalReferenceCode (accountExternalReferenceCode:any,externalReferenceCode:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${accountExternalReferenceCode}/user-accounts/by-external-reference-code/${externalReferenceCode}`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteAccountUserAccountsByExternalReferenceCodeByEmailAddress (externalReferenceCode:any,requestBodyarray:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            ,data:requestBodyarray
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}/user-accounts/by-email-address`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountUserAccountsByExternalReferenceCodeByEmailAddress (externalReferenceCode:any,requestBodyarray:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}/user-accounts/by-email-address`,requestBodyarray,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteAccountUserAccountByExternalReferenceCodeByEmailAddress (externalReferenceCode:any,emailAddress:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}/user-accounts/by-email-address/${emailAddress}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountUserAccountByExternalReferenceCodeByEmailAddress (externalReferenceCode:any,emailAddress:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}/user-accounts/by-email-address/${emailAddress}`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getUserAccountsPage (filter:any=null,page:any=null,pageSize:any=null,search:any=null,sort:any=null)
    {
    
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/user-accounts`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postUserAccount (UserAccount:any)
    {
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/user-accounts`,UserAccount,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getAccountUserAccountsPage (accountId:any,filter:any=null,page:any=null,pageSize:any=null,search:any=null,sort:any=null)
    {
    
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/accounts/${accountId}/user-accounts`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountUserAccount (accountId:any,UserAccount:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/${accountId}/user-accounts`,UserAccount,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getMyUserAccount ()
    {
    
        
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/my-user-account`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getSiteUserAccountsPage (siteId:any,filter:any=null,page:any=null,pageSize:any=null,search:any=null,sort:any=null)
    {
    
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/sites/${siteId}/user-accounts`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteUserAccount (userAccountId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/user-accounts/${userAccountId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getUserAccount (userAccountId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/user-accounts/${userAccountId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public patchUserAccount (userAccountId:any,UserAccount:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.patch(`/o/headless-admin-user/v1.0/user-accounts/${userAccountId}`,UserAccount,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public putUserAccount (userAccountId:any,UserAccount:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/headless-admin-user/v1.0/user-accounts/${userAccountId}`,UserAccount,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postUserAccountImage (userAccountId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/user-accounts/${userAccountId}/image`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteAccountUserAccountsByEmailAddress (accountId:any,requestBodyarray:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            ,data:requestBodyarray
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/accounts/${accountId}/user-accounts/by-email-address`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountUserAccountsByEmailAddress (accountId:any,accountRoleIds:any=null,requestBodyarray:any)
    {
        let queryParams = new HttpParams();
       if(accountRoleIds)
          queryParams = queryParams.append('accountRoleIds', accountRoleIds);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/${accountId}/user-accounts/by-email-address`,requestBodyarray,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteAccountUserAccountByEmailAddress (accountId:any,emailAddress:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/accounts/${accountId}/user-accounts/by-email-address/${emailAddress}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountUserAccountByEmailAddress (accountId:any,emailAddress:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/${accountId}/user-accounts/by-email-address/${emailAddress}`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getOrganizationUserAccountsPage (organizationId:any,filter:any=null,page:any=null,pageSize:any=null,search:any=null,sort:any=null)
    {
    
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/organizations/${organizationId}/user-accounts`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteUserAccountByExternalReferenceCode (externalReferenceCode:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/user-accounts/by-external-reference-code/${externalReferenceCode}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getUserAccountByExternalReferenceCode (externalReferenceCode:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/user-accounts/by-external-reference-code/${externalReferenceCode}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public putUserAccountByExternalReferenceCode (externalReferenceCode:any,UserAccount:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/headless-admin-user/v1.0/user-accounts/by-external-reference-code/${externalReferenceCode}`,UserAccount,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getAccountUserAccountsByExternalReferenceCodePage (externalReferenceCode:any,filter:any=null,page:any=null,pageSize:any=null,search:any=null,sort:any=null)
    {
    
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}/user-accounts`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountUserAccountByExternalReferenceCode (externalReferenceCode:any,UserAccount:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/by-external-reference-code/${externalReferenceCode}/user-accounts`,UserAccount,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteUserAccountBatch (callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            ,data:requestBodyobject
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/user-accounts/batch`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postUserAccountBatch (callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/user-accounts/batch`,requestBodyobject,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public putUserAccountBatch (callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/headless-admin-user/v1.0/user-accounts/batch`,requestBodyobject,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountUserAccountsPageExportBatch (accountId:any,filter:any=null,search:any=null,sort:any=null,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/${accountId}/user-accounts/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postAccountUserAccountBatch (accountId:any,callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/accounts/${accountId}/user-accounts/batch`,requestBodyobject,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postSiteUserAccountsPageExportBatch (siteId:any,filter:any=null,search:any=null,sort:any=null,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/sites/${siteId}/user-accounts/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postUserAccountsPageExportBatch (filter:any=null,search:any=null,sort:any=null,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/user-accounts/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postOrganizationUserAccountsPageExportBatch (organizationId:any,filter:any=null,search:any=null,sort:any=null,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/organizations/${organizationId}/user-accounts/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getUserUserGroups (userAccountId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/user-accounts/${userAccountId}/user-groups`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteUserGroup (userGroupId:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/user-groups/${userGroupId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getUserGroup (userGroupId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/user-groups/${userGroupId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public patchUserGroup (userGroupId:any,UserGroup:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.patch(`/o/headless-admin-user/v1.0/user-groups/${userGroupId}`,UserGroup,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public putUserGroup (userGroupId:any,UserGroup:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/headless-admin-user/v1.0/user-groups/${userGroupId}`,UserGroup,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteUserGroupUsers (userGroupId:any,requestBodyarray:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            ,data:requestBodyarray
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/user-groups/${userGroupId}/user-group-users`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postUserGroupUsers (userGroupId:any,requestBodyarray:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/user-groups/${userGroupId}/user-group-users`,requestBodyarray,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteUserGroupByExternalReferenceCode (externalReferenceCode:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/user-groups/by-external-reference-code/${externalReferenceCode}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getUserGroupByExternalReferenceCode (externalReferenceCode:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/user-groups/by-external-reference-code/${externalReferenceCode}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public patchUserGroupByExternalReferenceCode (externalReferenceCode:any,UserGroup:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.patch(`/o/headless-admin-user/v1.0/user-groups/by-external-reference-code/${externalReferenceCode}`,UserGroup,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public putUserGroupByExternalReferenceCode (externalReferenceCode:any,UserGroup:any)
    {
        let queryParams = new HttpParams();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/headless-admin-user/v1.0/user-groups/by-external-reference-code/${externalReferenceCode}`,UserGroup,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getUserGroupsPage (filter:any=null,page:any=null,pageSize:any=null,search:any=null,sort:any=null)
    {
    
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(page)
          queryParams = queryParams.append('page', page);
       
       if(pageSize)
          queryParams = queryParams.append('pageSize', pageSize);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/user-groups`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postUserGroup (UserGroup:any)
    {
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/user-groups`,UserGroup,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postUserGroupsPageExportBatch (filter:any=null,search:any=null,sort:any=null,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(filter)
          queryParams = queryParams.append('filter', filter);
       
       if(search)
          queryParams = queryParams.append('search', search);
       
       if(sort)
          queryParams = queryParams.append('sort', sort);
       
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/user-groups/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public deleteUserGroupBatch (callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            ,data:requestBodyobject
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.delete(`/o/headless-admin-user/v1.0/user-groups/batch`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postUserGroupBatch (callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/user-groups/batch`,requestBodyobject,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public putUserGroupBatch (callbackURL:any=null,requestBodyobject:any)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.put(`/o/headless-admin-user/v1.0/user-groups/batch`,requestBodyobject,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getOrganizationWebUrlsPage (organizationId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/organizations/${organizationId}/web-urls`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getUserAccountWebUrlsPage (userAccountId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/user-accounts/${userAccountId}/web-urls`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public getWebUrl (webUrlId:any)
    {
    
        let queryParams = new HttpParams();
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            }) 
            ,params:queryParams
        };
        
        let prom = new Promise((resolve, reject)=>{
            this.http.get(`/o/headless-admin-user/v1.0/web-urls/${webUrlId}`,httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postOrganizationWebUrlsPageExportBatch (organizationId:any,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/organizations/${organizationId}/web-urls/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    

    public postUserAccountWebUrlsPageExportBatch (userAccountId:any,callbackURL:any=null,contentType:any=null,fieldNames:any=null)
    {
        let queryParams = new HttpParams();
       if(callbackURL)
          queryParams = queryParams.append('callbackURL', callbackURL);
       
       if(contentType)
          queryParams = queryParams.append('contentType', contentType);
       
       if(fieldNames)
          queryParams = queryParams.append('fieldNames', fieldNames);
       
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-csrf-token': Liferay.authToken
            })
            ,params:queryParams
            
        };
        let prom = new Promise((resolve, reject)=>{
            this.http.post(`/o/headless-admin-user/v1.0/user-accounts/${userAccountId}/web-urls/export-batch`,{},httpOptions).subscribe((result)=>{
            resolve(result);
        }, error => {
            reject(error);
      });
    });
    return prom;
    }
    
    }
    