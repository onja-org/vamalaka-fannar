export enum FETCH_STATUS {
  LOADING = 'loading',
  IDLE = 'idle',
}

export enum CURRENCIES {
  EURO = 'EURO',
  MGA = 'MGA',
  USD = 'USD'
}

export enum UNIT {
  SPECIES = 'SPECIES'
}
export const CURRENCIES_DROP_DOWN_OPTIONS = [
  {label : CURRENCIES.EURO, value :CURRENCIES.EURO},
  {label : CURRENCIES.MGA, value :CURRENCIES.MGA},
  {label : CURRENCIES.USD, value :CURRENCIES.USD}
]

export const UNIT_DROP_DOWN_OPTIONS = [ 
  {label : UNIT.SPECIES, value :UNIT.SPECIES},
] 