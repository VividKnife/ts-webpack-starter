import { handler } from '../index';

describe('SimpleTest', () => {

    it('runs', async (done) => {
        await expect(handler({ name: 'Bob' }, undefined)).resolves.toEqual({id: 'UUID', name: 'Bob'});
        done();
    });
});
