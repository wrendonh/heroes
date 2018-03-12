import { HeroState } from './hero.state';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as HeroActions from './hero.actions';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroEffects {
    constructor(private http: HttpClient, private actions$: Actions) {}

    @Effect()
        GetHeroes$: Observable<Action> = this.actions$.
        ofType<HeroActions.GetHeroes>(HeroActions.GET_HEROES)
        .mergeMap(action =>
            this.http.get('/heroes')
            .map((data: Response) => {
                console.log(data);
                return new HeroActions.GetHeroes();
            })
        );
}
