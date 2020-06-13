import { Dispatch, SetStateAction } from 'react';

export type PropsType = {
  search: string;
  isList: boolean;
  setSearch: Dispatch<SetStateAction<string>>;
  setOrderByName: Dispatch<SetStateAction<boolean>>;
  setIsList: Dispatch<SetStateAction<boolean>>;
}
