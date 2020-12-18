import React from 'react';

export const Card = props => {
    return (
        <h1 key={props.monster.id}>{props.monster.name}</h1>
    )
}