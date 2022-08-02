/** @public */
export class TarantoolConnection {
  public readonly host: string;
  public readonly port: string | number;
  public readonly username: string;
  public readonly password: string;

  constructor(host = '127.0.0.1', port = 3301, username?: string, password?: string) {
    this.host = host;
    this.port = port;
    this.password = password ?? '';
    this.username = username ?? '';
  }
}
