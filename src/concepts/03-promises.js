/**
 * 
 * @param { HTMLDivElement } element 
 */

import { heroes } from "../data/heroes"

export const promiseComponent = (  element ) => {

    console.log('demoComponent')

}


/**
 * 
 * @param { String } id 
 * @returns {Promise}
 */

const findHero = ( id ) => {
    

    return new Promise( ( resolve, reject ) => {

        const hero = heroes.find( hero => hero.id === id );
        if( hero ) {
            resolve( hero );
            return
        }

        reject(`Hero with id ${ id } not found`);
    });

    return promise;
}