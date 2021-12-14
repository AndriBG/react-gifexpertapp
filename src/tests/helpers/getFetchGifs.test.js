import { getFetchGifs } from  '../../helpers/getFetchGifs';

describe('Pruebas en el helper getFetchGifs', () => {

    test('debe devolver 10 elementos', async () => {

        const gifs = await getFetchGifs('One Punch');

        expect( gifs.length ).toBe( 10 );

    });

    test('debe devolver un arreglo vacío', async () => {

        const gifs = await getFetchGifs('');

        expect( gifs.length ).toBe( 0 );

    });

})
