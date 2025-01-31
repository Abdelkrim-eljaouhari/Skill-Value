import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SearchInput from './SearchInput';
import AsideList from './AsideList';
import Title from './Title';
import TableTest from './TableTest';
import { connect } from 'react-redux';

const TestPage = props => {
  return (
    <div className="test-wrapper wrapper">
      <Navbar />
      <div
        className={`hero-section ${
          props.state ? 'show_side_bar' : 'hide_side_bar'
        }`}
      >
        <Sidebar />
        <section className="main-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-xl-9">
                <Title
                  menuTitle="Tests"
                  btnsNumber={[['Créer un smartquiz', '']]}
                />
                {/*----table -----*/}
                <table className="table table-borderless">
                  <thead className="thead-no-bg">
                    <tr>
                      <th scope="col">Titre</th>
                      <th scope="col">Type</th>
                      <th scope="col">Catégorie</th>
                      <th scope="col">Niveau</th>
                      <th scope="col">Lang</th>
                    </tr>
                  </thead>
                  <TableTest />
                </table>
                {/*----table -----*/}
              </div>
              <div className="col-lg-12 col-xl-3">
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
          </div>
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(TestPage);
