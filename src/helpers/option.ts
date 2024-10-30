export type Option<T> = Some<T> | None;

export interface Some<T> {
	readonly _tag: 'Some';
	readonly value: T;
}

export interface None {
	readonly _tag: 'None';
}

export const some = <T>(value: T): Option<T> => ({ _tag: 'Some', value });

export const none: Option<never> = { _tag: 'None' };

// TODO faut que ça soit un objet et pas des fonctions. c'est plus simple
export const isSome = <T>(option: Option<T>): option is Some<T> => option._tag === 'Some';

export const isNone = <T>(option: Option<T>): option is None => option._tag === 'None';

export const map = <T, U>(option: Option<T>, f: (value: T) => U): Option<U> =>
	isSome(option) ? some(f(option.value)) : none;

export const flatMap = <T, U>(option: Option<T>, f: (value: T) => Option<U>): Option<U> =>
	isSome(option) ? f(option.value) : none;

export const apply = <T>(option: Option<T>, f: (value: T) => void): void => {
	if (isSome(option)) {
		f(option.value);
	}
}

export const getOrElse = <T>(option: Option<T>, defaultValue: T): T =>
	isSome(option) ? option.value : defaultValue;

export const fold = <T, U>(option: Option<T>, onNone: () => U, onSome: (value: T) => U): U =>
	isSome(option) ? onSome(option.value) : onNone();
