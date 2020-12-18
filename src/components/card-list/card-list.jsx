import React from 'react';
import './card-list.style.css'

/**
 * This componnet is just meant to hold individual cards
 * 
 * @param {*} props : The properties of this component
 */

export const CardList = props => {
    console.log(props);
    return (
        <div className="card-list">
            {
                props.monsters.map(monster => 
                    (
                        <h1 key={monster.id}>{monster.name}</h1>
                    )
                )
            }
        </div>
    );
}
