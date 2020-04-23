import React from 'react'

function Heros(props) {
    const { hero, customBg, children } = props;
    return (
        <header className={hero} style={customBg}>
            {children}
        </header>
    )
}

Heros.defaultProps = {
    hero: "defaultHero"
}

export default Heros
