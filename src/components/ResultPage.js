import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
const ResultPage = () => {
  return (
    <div className="result-wrapper">
      <Navbar />
      <Sidebar />
      <section className="main-page">
        <div className="container-fluid"></div>
      </section>
    </div>
  );
};

export default ResultPage;
