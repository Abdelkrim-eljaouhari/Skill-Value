import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
const CandidatPage = () => {
  return (
    <div className="candidat-wrapper">
      <Navbar />
      <Sidebar />
      <section className="main-page">
        <div className="container-fluid">
          <div className="row-mg"></div>
        </div>
      </section>
    </div>
  );
};

export default CandidatPage;
