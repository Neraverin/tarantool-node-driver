import { expectType } from 'tsd';

import { TarantoolConnection } from '../../src/connection';

const connection = new TarantoolConnection();
expectType<TarantoolConnection>(connection);
