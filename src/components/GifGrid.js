import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading} = useFetchGifs(category);

    return (
        <>        
            <h3>{ category }</h3>

            { loading && "cargando..." }

            <div className='card-grid'>
                {
                    images.map(img => (
                        <li key={ img.id }>
                            <GifGridItem { ...img } />
                        </li>
                    ))
                }
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
