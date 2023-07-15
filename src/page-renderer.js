import React from 'react'
import {useMatch} from 'react-router-dom'

const generatePage = page => {
    // return the default export of that required module which is our page 

    try {
        const component = require(`./pages/${page}`).default
        return React.createElement(component());
    } catch (err) {
        console.warn(err)
        return React.createElement(() => 404);
    }
}

export default function PageRenderer () {
    const {
        params: { page } // if we are on this route we should be expecting this param to be route and the way we get that is using useRoute
    } = useMatch() // this is gonna give us our page from the param 


    return generatePage(page) // return page jsx from the page functions 
}

