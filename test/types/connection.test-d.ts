import { expectType } from 'tsd';

import { TarantoolConnection } from '../../src/tarantool_connection';

const connection = new TarantoolConnection();
expectType<TarantoolConnection>(connection);
