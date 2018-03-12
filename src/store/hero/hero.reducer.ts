import * as HeroActions from '../hero/hero.actions';
import { Hero, HeroSelected } from '../../models/hero.model';
import { initializeHeroState, initializeHeroSelectedState, HeroListState, HeroState, HeroSelectedState } from './hero.state';

export type Action = HeroActions.All;

const defaultHeroStates: HeroState[] = [
    {
        ...Hero.generateMockHero(),
        ...initializeHeroState()
    }
]

const defaultSelectedHeroStates: HeroSelectedState[] = [
    {
        ...HeroSelected.generateMockSelectedHero(),
        ...initializeHeroSelectedState()
    }
]

const defaultState: HeroListState = {
    heroes: defaultHeroStates,
    loading: false
}

export function HeroReducer(state = defaultState, action: Action) {
    console.log(state, action);

    switch (action.type) {
        case HeroActions.GET_HEROES: {
            return { ...state, loading: true }
        }

        case HeroActions.GET_HERO: {
            return { ...state, heroId: 1, loading: false }
        }

        case HeroActions.UPDATE_HEROE: {
            return { 
                ...state, 
                heroes: state.heroes.map(t => {
                    if(t. == action.payload) {
                        t.loading = true;
                    }

                    return t;
                }) 
            }
        }
    }
}
