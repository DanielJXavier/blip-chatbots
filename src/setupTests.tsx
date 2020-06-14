import React, { FC } from 'react';

import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => {
  const Link: FC = ({ children }) => <a href="#link">{children}</a>;

  return { Link };
});
