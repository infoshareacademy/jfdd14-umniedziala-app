import React, { Component } from "react";
import { Pagination } from "semantic-ui-react";
import FavouriteCard from "../FavouriteCard/FavouriteCard";
import "./FavListWithPagination.css";

const favsPerPage = 6;

class FavListWithPagination extends Component {

  state = {
    activePage: this.props.defaultPage,
    totalPages: Math.ceil(this.props.list.length / favsPerPage),
    activePageList: this.props.list.slice(this.props.defaultPage * favsPerPage - favsPerPage, this.props.defaultPage * favsPerPage)
  };

  componentDidMount() {
    this.setState({activePageList: this.props.list.slice(this.props.defaultPage * favsPerPage - favsPerPage, this.props.defaultPage * favsPerPage)})
  }

  handlePaginationChange = (e, { activePage }) => {
    this.setState({
      activePage,
      activePageList: this.props.list.slice(activePage * favsPerPage - favsPerPage, activePage * favsPerPage) });
      window.scrollTo(0, 0);
      localStorage.setItem(this.props.itemNameForStorage, activePage);
  }

  render() {
    const {
      activePage,
      totalPages,
    } = this.state;

    return (
      <main className="favList__list">
        <div className="favList__cardsBox">
          {this.state.activePageList.map(attraction => {
            return <FavouriteCard
              key={attraction.id}
              link={`/placedetails/${attraction.id}`}
              image={attraction.img}
              id={attraction.id}
              name={attraction.name}
              location={attraction.location}
              description={attraction.descriptionLong.slice(0, 200) + "..."}
              price={"Przedział cenowy: " + attraction.priceRange}
            />
          })}
        </div>

        <div className="dashboard__listAllPaginationBox">
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

export default FavListWithPagination;

/* PROPS - example use:
  list={attractionData}
  itemNameForStorage = "tripcity-lastViewedPage"   ---> for saving to localStorage, the same as string below:
  defaultPage={localStorage.getItem("tripcity-lastViewedPage") || 1}

*/