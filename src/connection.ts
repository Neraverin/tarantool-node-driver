/** @public */
export class TarantoolConnection {
  public readonly host: string;
  public readonly port: number;
  public readonly username: string;
  public readonly password: string;

  constructor(
    host = 'localhost',
    port: string | number = 3301,
    username?: string,
    password?: string
  ) {
    this.host = host;
    if (typeof port === 'string') {
      this.port = parseInt(port, 10);
    } else {
      this.port = port;
    }
    this.password = password ?? '';
    this.username = username ?? '';
  }
}
