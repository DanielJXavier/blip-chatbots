import { createContext } from 'react';

import { MyChatbotsType } from 'data/myChatbots';

export const MyChatbotsContext = createContext<MyChatbotsType>([]);
