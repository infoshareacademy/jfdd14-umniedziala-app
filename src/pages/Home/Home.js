import React, { Component } from "react";
import FavBarChart from "../../components/FavBarChart/FavBarChart";
import "./Home.css";
import CategoryPieChart from "../../components/CityPieChart/CategoryPieChart";

class Home extends Component {
  render() {
    return (
      <main className="dashboard">
        <section className="dashboard__info">
            <h3 className="dashboard__title">
                Cześć! Witaj w aplikacji <span className="dashboard__special">tripcity</span>!
            </h3>
            <p>
                Jeżeli planujesz <span className="dashboard__special">wizytę w Trójmieście</span>, nasza aplikacja pomoże Ci <span className="dashboard__special">znaleźć miejsca</span>, które mogą Cię zainteresować.
                <br />
                <i className="fas fa-long-arrow-alt-right dashboard__icon"/>
                skorzystaj z <span className="dashboard__special">bazy atrakcji i miejsc</span>, którą tworzą twórcy i użytkownicy tripcity
                <br />
                <i className="fas fa-long-arrow-alt-right dashboard__icon"/>
                użyj wyszukiwarki do <span className="dashboard__special">filtrowania</span> po nazwie, lokalizacji, zakresie cenowym i kategorii
                <br />
                <i className="fas fa-long-arrow-alt-right dashboard__icon"/>
                stwórz konto, aby móc <span className="dashboard__special">zapisywać atrakcje</span> jako ulubione oraz <span className="dashboard__special">dodawać własne miejsca</span> do naszej bazy
                <br />
            </p>
        </section>
        <section className="dashboard__charts">
          <div className="dashboard__chart">
            <h4 className="dashboard__chartTitle">
              Atrakcje z podziałem na miasta i zakresy cenowe:
            </h4>
            <FavBarChart />
          </div>
          <div className="dashboard__chart">
            <h4 className="dashboard__chartTitle">
              Ilość atrakcji w różnych kategoriach:
            </h4>
            <CategoryPieChart />
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
