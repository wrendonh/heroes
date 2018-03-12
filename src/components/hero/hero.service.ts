import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {IHero } from './hero';
@Injectable()
export class HeroService{
    private _heroUrl = 'https://udem.herokuapp.com/heroes';

    constructor(public http: HttpClient){}

    getHeroes(): Observable<IHero[]>{
        return this.http.get<IHero[]>(this._heroUrl);
    }

    getHero(nickName: string): Observable<IHero> {
        return this.getHeroes()
            .map((products: IHero[]) => products.find(p => p._nickname === nickName));
    }
}