import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {

    // 
    const setCategories = jest.fn();

    // se inicializa para tener la ayuda de vscode, pero no es necesario, porque ya se hace en el método "beforeEach"
    let wrapper = shallow(<AddCategory setCategories= { setCategories } />);

    beforeEach( () => {

        // para limpiar si tenemos algún mocks o simulación de algo
        jest.clearAllMocks();

        wrapper = shallow(<AddCategory setCategories= { setCategories } />);

    });

    test('<AddCategory /> debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de cambiar la caja(input) de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } } )

        // Esto es para corroborar que realmente está cambiando el input, y que tiene el value
        expect( wrapper.find('p').text().trim() ).toBe( value );

    });

    test('NO debe de poster la información con submit', () => {

        const form = wrapper.find('form').simulate('submit', {

            preventDefault(){} // hay otra forma de escribirlo, pero esta es más corta.
            // preventDefault: () => {} // Esta es la forma larga

        });

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('Debe de llamar el setCategories y limpiar la caja de texto(input)', () => {

        const value = 'Hola Mundo';

        wrapper.find('input').simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();

        // Debe ser llamado tres veces
        // expect( setCategories ).toHaveBeenCalledTimes(2);

        // Debe ser llamado pasando como parpametro una función
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        expect( wrapper.find('input').prop('value') ).toBe( '' );

    });

});
