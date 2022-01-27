export const POKEMON_SUCCESS = 'POKEMON_SUCCESS'
export const POKEMON_FAIL = 'POKEMON_FAIL'

//액션타입들의 ts검사
export type PokemonType = {
    abilities: PokemonAbility[]
    sprites: PokemonSprites
}

export type PokemonAbility = {
    ability: {
        name: string
        url: string
    },
    is_hidden: boolean
    slot: number
}

export type PokemonSprites = {
    front_default: string
}


//넘겨줄 액션 타입
export interface pokemonFailDispatch {
    type: typeof POKEMON_FAIL
}

export interface pokemonSuccessDispatch {
    type: typeof POKEMON_SUCCESS
    payload: {
        abilities: PokemonAbility[]
        sprites: PokemonSprites
    }
}

export type PokemonDispatchType = pokemonFailDispatch | pokemonSuccessDispatch