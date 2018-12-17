/**
 * Simple Contact Group API
 * This is a sample API that can be used to kickstart SAP Commerce or Microservice API develoment. More info can be found on [SAP Wiki](https://wiki.hybris.com/display/prodandtech/Hypermedia+Milestone+%233+-+Integrating+through+the+stack)
 *
 * OpenAPI spec version: 1.1.0
 * Contact: frank.grupe@sap.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Contact } from '../model/contact';
import { HyContact } from '../model/hyContact';
import { HyContacts } from '../model/hyContacts';
import { HyGroups } from '../model/hyGroups';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ContactsService {

    protected basePath = 'https://virtserver.swaggerhub.com/CXArchitecture/ContactGroupAPI/1.0.0';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Add a group to a contact
     * 
     * @param contactId ID of contact
     * @param groupId ID of group
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addGroupToContact(contactId: number, groupId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addGroupToContact(contactId: number, groupId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addGroupToContact(contactId: number, groupId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addGroupToContact(contactId: number, groupId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (contactId === null || contactId === undefined) {
            throw new Error('Required parameter contactId was null or undefined when calling addGroupToContact.');
        }
        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling addGroupToContact.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.post(`${this.basePath}/contacts/${encodeURIComponent(String(contactId))}/groups/${encodeURIComponent(String(groupId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a new contact
     * 
     * @param body Contact item to add
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createContact(body?: Contact, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createContact(body?: Contact, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createContact(body?: Contact, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createContact(body?: Contact, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post(`${this.basePath}/contacts`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find a contact
     * By passing in the appropriate options, you can search for available contacts in the system 
     * @param contactId ID of contact to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getContact(contactId: number, observe?: 'body', reportProgress?: boolean): Observable<HyContact>;
    public getContact(contactId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<HyContact>>;
    public getContact(contactId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<HyContact>>;
    public getContact(contactId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (contactId === null || contactId === undefined) {
            throw new Error('Required parameter contactId was null or undefined when calling getContact.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/contacts/${encodeURIComponent(String(contactId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find the groups of a contact
     * 
     * @param contactId ID of contact
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getContactGroups(contactId: number, observe?: 'body', reportProgress?: boolean): Observable<HyGroups>;
    public getContactGroups(contactId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<HyGroups>>;
    public getContactGroups(contactId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<HyGroups>>;
    public getContactGroups(contactId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (contactId === null || contactId === undefined) {
            throw new Error('Required parameter contactId was null or undefined when calling getContactGroups.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/contacts/${encodeURIComponent(String(contactId))}/groups`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Search contacts
     * By passing in the appropriate options, you can search for available contacts in the system 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getContacts(observe?: 'body', reportProgress?: boolean): Observable<HyContacts>;
    public getContacts(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<HyContacts>>;
    public getContacts(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<HyContacts>>;
    public getContacts(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/contacts`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete a contact
     * 
     * @param contactId ID of contact to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removeContact(contactId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removeContact(contactId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removeContact(contactId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removeContact(contactId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (contactId === null || contactId === undefined) {
            throw new Error('Required parameter contactId was null or undefined when calling removeContact.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete(`${this.basePath}/contacts/${encodeURIComponent(String(contactId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Remove a group from a contact
     * 
     * @param contactId ID of contact
     * @param groupId ID of group
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removeGroupFromContact(contactId: number, groupId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removeGroupFromContact(contactId: number, groupId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removeGroupFromContact(contactId: number, groupId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removeGroupFromContact(contactId: number, groupId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (contactId === null || contactId === undefined) {
            throw new Error('Required parameter contactId was null or undefined when calling removeGroupFromContact.');
        }
        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling removeGroupFromContact.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete(`${this.basePath}/contacts/${encodeURIComponent(String(contactId))}/groups/${encodeURIComponent(String(groupId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Replace a contact
     * 
     * @param contactId ID of contact to replace
     * @param body Contact to replace
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public replaceContact(contactId: number, body?: Contact, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public replaceContact(contactId: number, body?: Contact, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public replaceContact(contactId: number, body?: Contact, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public replaceContact(contactId: number, body?: Contact, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (contactId === null || contactId === undefined) {
            throw new Error('Required parameter contactId was null or undefined when calling replaceContact.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put(`${this.basePath}/contacts/${encodeURIComponent(String(contactId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update a contact
     * 
     * @param contactId ID of contact to update
     * @param body Contact to update
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateContact(contactId: number, body?: Contact, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateContact(contactId: number, body?: Contact, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateContact(contactId: number, body?: Contact, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateContact(contactId: number, body?: Contact, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (contactId === null || contactId === undefined) {
            throw new Error('Required parameter contactId was null or undefined when calling updateContact.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch(`${this.basePath}/contacts/${encodeURIComponent(String(contactId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }
}
