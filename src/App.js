import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { route } from './router/router';

const App = () => {
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
};

export default App;