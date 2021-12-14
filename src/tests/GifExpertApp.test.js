import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en el componente GifExpertApp', () => {

    let wrapper;

    test('Debe estar correctamente', () => {

        wrapper = shallow(<GifExpertApp />);

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe mostrar una lista de categorias', () => {

        const categories = ['One Punch○', 'Drango Ball Z'];

        wrapper = shallow(<GifExpertApp defaultCategories = { categories } />);

        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

        expect( wrapper ).toMatchSnapshot();

    });

});
