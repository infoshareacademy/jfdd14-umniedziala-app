import React, { Component } from "react";
import "./ListWithPagination.css";
import { Card, Pagination } from "semantic-ui-react";
import CardComponent from "../Card/Card";

const cardsPerPage = 12;

class ListWithPagination extends Component {
  state = {
    activePage: this.props.defaultPage,
  };

  handlePaginationChange = (e, { activePage }) => {
    this.setState({
      activePage,
      activePageList: this.props.list.slice(
        activePage * cardsPerPage - cardsPerPage,
        activePage * cardsPerPage
      ),
    });
    window.scrollTo(0, 0);
    localStorage.setItem(this.props.itemNameForStorage, activePage);
  };

  render() {
    const { activePage } = this.state;

    const totalPages = Math.ceil(this.props.list.length / cardsPerPage);

    const activePageList = this.props.list.slice(
      activePage * cardsPerPage - cardsPerPage,
      activePage * cardsPerPage
    );

    return (
      <main className="dashboard__listAll">
        <Card.Group centered itemsPerRow={2}>
          {activePageList.map((attraction) => {
            return (
              <CardComponent
                key={attraction.id}
                link={`/placedetails/${attraction.id}`}
                image={attraction.img}
                meta={`${attraction.name}, ${attraction.location}`}
                description={attraction.descriptionLong.slice(0, 100) + "..."}
                price={"Przedział cenowy: " + attraction.priceRange}
              />
            );
          })}
        </Card.Group>

        {totalPages < 2
          ?
          null
          :
          <div className="dashboard__listAllPaginationBox">
            <Pagination
              activePage={activePage}
              boundaryRange={1}
              onPageChange={this.handlePaginationChange}
              size="small"
              siblingRange={1}
              totalPages={totalPages}
              ellipsisItem={false}
              firstItem={false}
              lastItem={false}
            />
          </div>
        }
        
      </main>
    );
  }
}

export default ListWithPagination;

/* PROPS - example use:
  list={attractionData}
  itemNameForStorage = "tripcity-lastViewedPage"   ---> for saving to localStorage, the same as string below:
  defaultPage={localStorage.getItem("tripcity-lastViewedPage") || 1}

*/
