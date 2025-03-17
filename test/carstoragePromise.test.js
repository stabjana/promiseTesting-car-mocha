import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import search from '..carStoragePromise.js';

const expect = chai.expect;

chai.use(chaiAsPromised);

describe('Testing with key license', () => {
    const result = [{ "model": "Bored T-model", "license": "ABC-1" }];

    it(`resolves to ${result}`, function () {
        return expect(search('license', 'ABC-1')).to.eventually.deep.equal(result);
    });
});