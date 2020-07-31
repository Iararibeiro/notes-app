export interface log {
  type: 'info' | 'log' | 'error';
  message: string;
  date: Date;
}
