import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SearchInput from './SearchInput';
import AsideList from './AsideList';
const TestPage = () => {
  return (
    <div className="test-wrapper">
      <Navbar />
      <Sidebar />
      <section className="main-page">
        <div className="container-fluid">
          <div className="col-lg-9"></div>
          <div className="col-lg-3">
            <aside className="aside-lists">
              <SearchInput
                title="Que souhaitez évaluer ?"
                iconClassName="fas fa-search"
              />
              <AsideList listTitle="Mes test favoris" />
              <AsideList listTitle="Type de test" />
              <AsideList listTitle="Catégorie" />
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestPage;
