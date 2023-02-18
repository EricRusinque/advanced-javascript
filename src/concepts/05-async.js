import { heroes } from "../data/heroes"

/**
 * 
 * @param { HTMLDivElement } element 
 */


export const asyncComponent = (  element ) => {

    const id1 = '5d86371f25a058e5b1c8a65e3'

    findHero( id1 )
        .then( name => element.innerHTML = name  )
        .catch( error => element.innerHTML = error )


}

/**
 * 
 * @param { String } id 
 * @returns { Promise<String>}
 */

const findHero = async( id ) => {

    const hero =  heroes.find( hero => hero.id === id );

    return hero?.name
}