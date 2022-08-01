/** @public */
export class TarantoolConnection {
  private _host: string;

  constructor(host = '127.0.0.1') {
    this._host = host;
  }

  get_host() {
    return this._host;
  }
}
