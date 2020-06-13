import { Dispatch, SetStateAction } from 'react';
import { OrderType, ShowModeType } from 'pages/MyChatbots/MyChatbots.types';

export type PropsType = {
  showMode: ShowModeType;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setOrder: Dispatch<SetStateAction<OrderType>>;
  setShowMode: Dispatch<SetStateAction<ShowModeType>>;
}
