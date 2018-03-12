export class Hero {
    _name: string;
    _height: number;
    _picture: string;
    _nickname: string;   

    constructor() {
        this._name = "";
        this._height = 0;
        this._nickname = "";
        this._picture = "";
    }

    static generateMockHero() : Hero {
        return {
            _name: "test",
            _height: 60,
            _nickname: "test nickname",
            _picture: ""
        }
    }
}

export class HeroSelected extends Hero {
    _index: number;

    constructor() {
        super();        
        this._index = 0;
    }

    static generateMockSelectedHero() : HeroSelected {
        return {
            _nickname: "test",
            _height: 60,
            _name: "test",
            _picture: "",
            _index: 0
        }
    }
}