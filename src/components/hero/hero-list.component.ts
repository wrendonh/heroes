import { HeroListState, HeroState } from '../../store/hero/hero.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Hero, HeroSelected } from '../../models/hero.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import * as HeroActions from '../../store/hero/hero.actions';

export interface AppState {
    heroes: HeroListState;
}

@Component({
    selector: "app-hero",
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.scss']   
})

export class HeroListComponent implements OnInit{
    constructor(private store: Store<HeroListState>){
    }

    heroListState$: Observable<HeroState[]>;

    ngOnInit(): void {        
        this.heroListState$ = this.store.select(state => state.heroes);
        this.store.dispatch(new HeroActions.GetHeroes());
    }
}