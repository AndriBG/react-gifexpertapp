import React from 'react';
import { shallow } from 'enzyme';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {

    let wrapper = shallow(<GifGrid category = { "Boruto" } />);

    test('<GifGrid /> debe mostrarse correctamente', () => {

        useFetchGifs.mockReturn({
            data: [],
            loading: true
        });

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'http://localhost/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturn({
            data: gifs,
            loading: false
        });

        // expect( wrapper ).toMatchSnapshot();

        // este es el texto que dice: "cargando...", que no debería de existir si hay gifs
        expect( wrapper.find('p').exists() ).toBe( false );

        // Este el componente GifGridItem que debería de haber si hay gifs
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    });

});