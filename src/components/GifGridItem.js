import React from 'react'

export const GifGridItem = ({ title, url }) => 
    (
        <div className="card animate__animated animate__bounce">
            <img src={ url } alt={ title }></img>
            <p>{ title }</p>
        </div>
    );
