/**
 * 
 * @param { HTMLDivElement } element 
 */

export const enviromentsComponent = (  element ) => {

    console.log(import.meta.env)

    const html = `
        dev: ${ import.meta.env.DEV } <br/>
        Prod: ${ import.meta.env.PROD } <br/>
        KEY: ${ import.meta.env.VITE_API_URL} <br/>
        URL: ${ import.meta.env.VITE_BASE_URL } <br/> 
    `

    element.innerHTML = html

}