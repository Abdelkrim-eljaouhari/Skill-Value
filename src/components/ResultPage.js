import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SearchInput from './SearchInput';
import AsideList from './AsideList';
import Title from './Title';
import TableResult from './TableResult';
class ResultPage extends Component {
  state = {
    asideList: ['Tags', 'Type de test', 'Niveau', 'Statut', 'Tags', 'Periode']
  };
  render() {
    return (
      <div className="result-wrapper wrapper">
        <Navbar />
        <Sidebar />
        <section className="main-page">
          <div className="container-fluid">
            <div className="row">
              <Title
                menuTitle="Resultas"
                btnsNumber={[['Exporter les résultas', 'fas fa-download']]}
              />
            </div>
            <div className="row row-mg">
              <div className="col-lg-12 col-xl-9">
                {/*----table -----*/}
                <table class="table table-borderless">
                  <thead className="thead-no-bg">
                    <tr>
                      <th scope="col">Nom</th>
                      <th scope="col">Campagne</th>
                      <th scope="col">Détail</th>
                      <th scope="col">Score </th>
                      <th scope="col">Actions </th>
                    </tr>
                  </thead>
                  <TableResult />
                </table>
                {/*----table -----*/}
              </div>
              <div className="col-lg-12 col-xl-3">
                <aside className="aside-lists">
                  <SearchInput
                    title="Recherche des candidats ?"
                    iconClassName="fas fa-search"
                  />
                  {this.state.asideList.map(item => (
                    <AsideList key={item} listTitle={item} />
                  ))}
                </aside>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ResultPage;
