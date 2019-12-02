import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Title from './Title';
import SearchInput from './SearchInput';
import AsideList from './AsideList';
class CampagnePage extends Component {
  state = {};
  render() {
    return (
      <div className="campagne-wrapper wrapper">
        <Navbar />
        <Sidebar />
        <section className="main-page">
          <div className="container-fluid ">
            <div className="row">
              <Title
                menuTitle="Campagne"
                btnsNumber={[['Nouvelle campagne', 'fas fa-search']]}
              />
            </div>
            <div className="row row-mg">
              <div className="col-lg-12 col-xl-9">
                {/*----table ----*/}

                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Nom</th>
                      <th scope="col">Statut</th>
                      <th scope="col">Test passés</th>
                      <th scope="col">Resultat</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                  </tbody>
                </table>

                {/*----table ----*/}
              </div>
              <div className="col-lg-12 col-xl-3">
                <aside className="aside-lists">
                  <SearchInput
                    title="Que souhaitez évaluer ?"
                    iconClassName="fas fa-search"
                  />
                  <AsideList listTitle="statut" />
                  <AsideList listTitle="Tags" />
                </aside>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CampagnePage;
