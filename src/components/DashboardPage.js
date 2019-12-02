import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Orangebutton from './Orangebutton';
import Statistic from './Statistic';
import Toptest from './Toptest';
class DashboardPage extends Component {
  render() {
    return (
      <div className="dashboard-wrapper wrapper">
        <Navbar />
        <Sidebar />
        <section className="main-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6  greeting">
                <h1>Bonjour Membre</h1>
                <p>
                  C'est votre 1 ère visite ? RDV sur l'onglet tests pour
                  démarrer :)
                </p>
              </div>
              <div className="col-xl-6 left-side-greeting">
                <div>
                  <Orangebutton
                    title="Créer une campagne"
                    iconClassName="fas fa-plus"
                  />
                </div>
              </div>
            </div>
            <hr className="line" />
            <div className="row row-mg">
              <div className=" col-lg-6 col-xl-8 col-md-12 ">
                <div className="row">
                  <header className="col-lg-12   statistic">
                    <Statistic />
                  </header>
                  <article className="col-lg-6 col-lg-12">
                    <div className="card">
                      <div className="card-body"></div>
                    </div>
                  </article>
                  <article className="col-lg-6 col-lg-12">
                    <div className="card">
                      <div className="card-body"></div>
                    </div>
                  </article>
                </div>
              </div>
              <div className=" col-lg-6 col-xl-4 col-md-12">
                <aside className="top-test-wrapper">
                  <Toptest />
                </aside>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

/*
col-xl-8 col-md-6 col-lg-6
col-xl-4 col-md-6 col-lg-6
*/
export default DashboardPage;
