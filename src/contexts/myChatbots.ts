import { createContext } from 'react';

import { MyChatbotsType } from 'data/myChatbots.types';

export const MyChatbotsContext = createContext<MyChatbotsType>([]);
