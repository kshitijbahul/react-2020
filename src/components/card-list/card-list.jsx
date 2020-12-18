import React from 'react';
import { Card } from '../card/card';
import './card-list.style.css'

/**
 * This componnet is just meant to hold individual cards
 * 
 * @param {*} props : The properties of this component
 */

export const CardList = props => {
    return (
        <div className="card-list">
            {
                props.monsters.map(monster => 
                    (
                        <Card key={monster.id} monster={monster}/>
                    )
                )
            }
        </div>
    );
}
