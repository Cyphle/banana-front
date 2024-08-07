import * as fs from 'fs';
import path from 'path';

interface DatabaseData {
  [table: string]: any[];
}

export class Database {
  private data: DatabaseData = {}
  private FOLDER_CONFIG = {
    basePath: '../',
    dataPath: ''
  }

  constructor(dataPath: string = 'data') {
    this.FOLDER_CONFIG.dataPath = dataPath;
    this.hydrate();
  }

  private hydrate() {
    fs.readdirSync(path.join(this.FOLDER_CONFIG.basePath, this.FOLDER_CONFIG.dataPath))
      .forEach((file: string) => {
        const data = JSON.parse(fs.readFileSync(path.join(this.FOLDER_CONFIG.basePath, this.FOLDER_CONFIG.dataPath, file), 'utf8'));
        this.data[file.split('.')[0]] = data;
      });
  }

  dump(): DatabaseData {
    return this.data;
  }

  read<T>(tableName: string): T[] {
    return this.data[tableName];
  }

  readOneById<T>(tableName: string, id: number): T {
    return this.data[tableName].find((element: T) => {
      // @ts-ignore
      return element.id === id;
    });
  }

  readOneByField<T>(tableName: string, field: string, criteria: string): T {
    return this.data[tableName].find((element: T) => {
      // @ts-ignore
      return element[field] === criteria;
    });
  }

  create<T>(tableName: string, item: T): T {
    const table = this.data[tableName];
    const indexedItem = {
      ...item,
      id: table.length ? table[table.length - 1].id + 1 : 1,
    }
    this.data[tableName] = [
      ...table,
      indexedItem
    ];

    return indexedItem as T;
  }

  update<T>(tableName: string, id: number, item: T) {
    this.data[tableName] = this.data[tableName].map((element: T) => {
      // @ts-ignore
      return element.id === id ? { id, ...item } : element;
    });
  }

  delete(tableName: string, id: number) {
    this.data[tableName] = this.data[tableName].filter((element: any) => {
      return element.id !== id;
    });
  }
}
