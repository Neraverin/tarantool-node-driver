import { expect } from 'chai';

import { TarantoolConnection } from '../../src/connection';

describe('constructor', function () {
  it('should parse options correctly', function () {
    let testConnection = new TarantoolConnection();
    expect(testConnection.host).to.equal('localhost');
    expect(testConnection.port).to.equal(3301);

    testConnection = new TarantoolConnection('localhost', '3302');
    expect(testConnection.port).to.equal(3302);
  });
});
