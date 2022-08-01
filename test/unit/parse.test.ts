import { expect } from 'chai';

import { TarantoolConnection } from '../../src/tarantool_connection';

describe('constructor', function () {
  it('should parse options correctly', function () {
    const testConnection = new TarantoolConnection('192.168.0.1');
    const host = testConnection.get_host();
    expect(host).to.equal('192.168.0.1');
  });
});
