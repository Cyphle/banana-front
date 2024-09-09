export const BASE_PATH = 'http://localhost:3000';

// TODO to be tested
export const getMany = <T>(path: string, mapper: (data: any) => T[]): Promise<T[]> => {
  return fetch(`${BASE_PATH}/${path}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return mapper(data);
    });
}


// TODO to be tested
export const getOne = <T>(path: string, mapper: (data: any) => T): Promise<T> => {
  return fetch(`${BASE_PATH}/${path}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return mapper(data);
    });
}