export interface Account {
  id: number;
  name: string;
}

export interface CreateAccountCommand {
  name: string;
}