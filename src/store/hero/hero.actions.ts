import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { HeroState } from './hero.state';

import { Hero, HeroSelected } from '../../models/hero.model';

export const GET_HERO = '[Hero] GET_HERO';
export const GET_HEROES = '[Hero] GET_HEROES';
export const UPDATE_HEROE = '[Hero] UPDATE_HERO';

export class GetHero implements Action {
    readonly type = GET_HERO;

    constructor(public payload: number) {}
} 

export class GetHeroes implements Action {
    readonly type = GET_HEROES;
}

export class UpdateHero implements Action {
    readonly type = UPDATE_HEROE;

    constructor(public payload: HeroSelected) {}
}

export type All = GetHero | GetHeroes | UpdateHero;