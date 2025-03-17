import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import search from '../carStoragePromise.js';

use(chaiAsPromised);

describe('Testing with key license', function () {
    const result = [{ "model": "Bored T-model", "license": "ABC-1" }];

    it(`resolves to ${JSON.stringify(result)}`, function () {
        return expect(search('license', 'ABC-1')).to.eventually.deep.equal(result);
    });
    it('rejects to "parameter missing"', function () {
        return expect(search()).to.be.rejectedWith('parameter missing');
    });
    it('resolves to []', function () {
        return expect(search('license', 'x')).to.eventually.to.be.empty;
    });
});

describe('search by model', function () {
    const result = [{ "model": "Bored T-model", "license": "ABC-1" }];
    it('model: "Bored T-model"', function () {
        return expect(search('model', 'Bored T-model')).to.eventually.deep.equal(result)
    });

    const testValues = [{ "model": "Turbo V8", "license": "DEF-4" }, { "model": "Speedster X", "license": "XYZ-2" }];
    testValues.forEach(function (value) {
        it(`model: ${value.model}`, function () {
            return expect(search('model', value.model)).to.eventually.deep.equal([value]);
        });
    });
});