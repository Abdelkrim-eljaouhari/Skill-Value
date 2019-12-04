import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SearchInput from './SearchInput';
import AsideList from './AsideList';
import Title from './Title';
import TableCandidat from './TableCandidat';
import AddCandidat from './AddCandidat';
import { connect } from 'react-redux';

const CandidatPage = props => {
  const toggleHeroSection = props.state
    ? 'hero-section show_side_bar'
    : 'hero-section hide_side_bar';
  return (
    <div className="candidat-wrapper wrapper">
      <Navbar />
      <div className={toggleHeroSection}>
        <Sidebar />
        <section className="main-page">
          <div className="container-fluid">
            <div className="row">
              <Title
                menuTitle="Candidats"
                btnsNumber={[
                  ['Importer des candidats', 'fas fa-download'],
                  ['Ajouter un candidat', 'fas fa-plus']
                ]}
              />
            </div>
            <div className="row row-mg">
              <div className="col-lg-12 col-xl-9">
                {/*----table -----*/}
                <table className="table table-borderless">
                  <thead className="thead-no-bg">
                    <tr>
                      <th scope="col">Prénom</th>
                      <th scope="col">Nom</th>
                      <th scope="col">Adresse-Email</th>
                      <th scope="col">Score global</th>
                    </tr>
                  </thead>
                  <TableCandidat />
                </table>
                {/*----table -----*/}
                <AddCandidat />
              </div>
              <div className="col-lg-12 col-xl-3">
                <aside className="aside-lists">
                  <SearchInput
                    title="Recherche des candidats ?"
                    iconClassName="fas fa-search"
                  />
                  <AsideList listTitle="Tags" />
                </aside>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(CandidatPage);
