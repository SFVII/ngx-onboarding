import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { OnboardingInterface, OnboardingUser } from '../interface/OnboardingInterface';
import * as i0 from "@angular/core";
export declare class OnboardingService {
    private http;
    canExit$: Subject<boolean>;
    private token;
    private _token;
    templates: BehaviorSubject<any>;
    _templates: import("rxjs").Observable<any>;
    onboarding: BehaviorSubject<any>;
    _onboarding: import("rxjs").Observable<any>;
    contacts: BehaviorSubject<any>;
    _contacts: import("rxjs").Observable<any>;
    authentication: EventEmitter<OnboardingUser>;
    private header;
    locale: string;
    private endpoint;
    private user;
    lang: BehaviorSubject<string>;
    _auth: boolean;
    mainPath: string;
    constructor(config: OnboardingInterface, http: HttpClient);
    /**
   * @private
   * Generate Header for backend call
   */
    private buildHeaders;
    private checkHeaderNull;
    /**
   * @param config
   * @private
   * Initialize Data for User Instance
   */
    private initInstance;
    /**
   * @private
   * Generate Random uniq Id for Konverso Instance
   */
    private guid;
    /**
   * Send Profil To backend
   * @Post Profil
   */
    createProfil(data: any): Promise<string | any>;
    updateProfil(data: any): Promise<string | any>;
    deleteProfil(id: any): Promise<string | any>;
    getProfil(id: any): Promise<string | any>;
    getAllProfil(): Promise<string | any>;
    getAllTags(): Promise<string | any>;
    getContacts(): Promise<string | any>;
    asignProfil(): Promise<void>;
    getTags(): Promise<void>;
    getCategory(): Promise<void>;
    createOnboarding(data: any): Promise<string | any>;
    updateOnboarding(data: any): Promise<string | any>;
    deleteOnboarding(id: any): Promise<string | any>;
    getOnboarding(id: any): Promise<string | any>;
    getAllOnboarding(recall?: boolean): Promise<string | any>;
    static ɵfac: i0.ɵɵFactoryDef<OnboardingService>;
    static ɵprov: i0.ɵɵInjectableDef<OnboardingService>;
}
