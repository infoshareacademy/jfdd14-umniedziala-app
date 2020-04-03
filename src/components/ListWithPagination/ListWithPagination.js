import React, { Component } from "react";
import "./ListWithPagination.css";
import { Card, Pagination } from "semantic-ui-react";
import CardComponent from "../Card/Card";

const cardsPerPage = 12;

class ListWithPagination extends Component {

  state = {
    activePage: this.props.defaultPage,
    totalPages: Math.ceil(this.props.list.length / cardsPerPage),
    activePageList: this.props.list.slice(this.props.defaultPage * cardsPerPage - cardsPerPage, this.props.defaultPage * cardsPerPage)
  };

  handlePaginationChange = (e, { activePage }) => {
    this.setState({
      activePage,
      activePageList: this.props.list.slice(activePage * cardsPerPage - cardsPerPage, activePage * cardsPerPage) });
      window.scrollTo(0, 0);
      localStorage.setItem("tripcity-lastViewedPage", activePage);
  }

  render() {
    const {
      activePage,
      totalPages,
    } = this.state;

    return (
      <main className="dashboard__liasAll">
        <Card.Group centered itemsPerRow={2}>
          {this.state.activePageList.map(attraction => {
            return <CardComponent
              key={attraction.id}
              link={`/placedetails/${attraction.id}`}
              image={attraction.img}
              meta={`${attraction.name}, ${attraction.location}`}
              description={attraction.descriptionLong.slice(0, 100) + "..."}
              price={"Przedział cenowy: " + attraction.priceRange}
            />
          })}
        </Card.Group>

        <div className="dashboard__listAllPagination">
          <Pagination
            activePage={activePage}
            boundaryRange={1}
            onPageChange={this.handlePaginationChange}
            size='small'
            siblingRange={1}
            totalPages={totalPages}
            ellipsisItem={false}
            firstItem={false}
            lastItem={false}
          />
        </div>
      </main>
    );
  }
}

export default ListWithPagination;

/* PROPS:
list - array of objects to display
defaultPage - localStorage.getItem("tripcity-lastViewedPage") || 1

*/
