import { Hero, HeroSelected } from '../../models/hero.model';

export interface HeroState extends Hero {
    loading: boolean;

    editable: boolean;
    edited: boolean;
    editing: boolean;

    selected: boolean;
    refreshing: boolean;

    error: boolean;
}

export const initializeHeroState = function() {
    return {
        loading: false,

        editable: true,
        edited: false,
        editing: false,

        selected: false,
        refreshing: false,

        error: false
    }
}

export interface HeroListState {
    heroes: HeroState[];
    heroeSelected: HeroState;
    loading: boolean;    
}

export const initializeHeroListState = function() {
    return {
        heroes: 
        loading: false        
    }
}