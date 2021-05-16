import React, { useState } from 'react';
import Header from './components/base/header/header';
import MainPage from './components/pages/main-page/main-page';
import SearchPage from './components/pages/search-page/search-page';

import './style.scss';

function App() {
  const pages = {
    main: <MainPage goToPage = {selectPage} />,
    search: <SearchPage goToPage = {selectPage} />
  };

  const [page, setPage] = useState(pages['main']);

  return (
    <>
      <Header 
        goToPage={selectPage}
      />,
      { page }
    </>
  );

  function selectPage(page) {
    if (page) {
      setPage(pages[page]);
      return;
    }
    setPage(pages['main']);
  }

}

export default App;