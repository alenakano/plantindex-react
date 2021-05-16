import React from 'react';
import Header from './components/base/header/header';
import MainPage from './components/pages/main-page/main-page';
import SearchPage from './components/pages/search-page/search-page';

import './style.scss';

function App() {
  return (
    <>
      <Header />
      {/* <MainPage /> */}
      <SearchPage />
    </>
  );
}

export default App;