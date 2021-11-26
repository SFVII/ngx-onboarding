import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OnboardingUser } from '../interface/OnboardingInterface';
import * as i0 from "@angular/core";
export declare class OnboardingService {
    private http;
    private token;
    authentication: EventEmitter<OnboardingUser>;
    private _token;
    private header;
    locale: string;
    private endpoint;
    private user;
    lang: BehaviorSubject<string>;
    _auth: boolean;
    constructor(http: HttpClient);
    /**
   * @private
   * Generate Header for backend call
   */
    private buildHeaders;
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
    asignProfil(): Promise<void>;
    getTags(): Promise<void>;
    getCategory(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OnboardingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OnboardingService>;
}
