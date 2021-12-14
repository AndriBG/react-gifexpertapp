// para probar hooks
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe de retornar el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs("Naruto") );

        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toBe( [] );
        expect( loading ).toBe( true );

    });

    test('debe retorna un arreglo de imgs y el loading en false', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs("Naruto") );

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

    });


});