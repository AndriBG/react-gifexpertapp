import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('pruebas en el componente GifGridItem', () => {

    const title = 'Un título';
    const url = 'Https://localhost/algo.png';

    const wrapper = shallow(
        <GifGridItem 
            title= {title}
            url= {url}
        />
    );

    test('<GifGridItem /> debe estar correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe tener el p igual que el title', () => {

        const p = wrapper.find('p');

        expect( p.text() ).toBe( title );

    });

    test('debe tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe( url );
        expect( img.props().alt ).toBe( title );

    });

})


