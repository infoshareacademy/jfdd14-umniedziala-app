import React, { Component } from "react";
import { Pagination } from "semantic-ui-react";
import FavouriteCard from "../FavouriteCard/FavouriteCard";
import { toggleFavorite, getFavoriteAttractionsAsArray } from "../../services";
import "./FavListWithPagination.css";

const favsPerPage = 6;

class FavListWithPagination extends Component {
  state = {
    activePage: this.props.defaultPage,
    attractions: [],
  };

  componentDidMount() {
    this.refreshAttractions();
  }

  //this one works but does fetch all the time
  componentDidUpdate(prevProps, prevState) {
    if (prevState.attractions !== this.state.attractions) {
      this.refreshAttractions();
    }
  }

  refreshAttractions = () => {
    getFavoriteAttractionsAsArray().then((attractions) =>
      this.setState({
        attractions,
      })
    );
  };

  handlePaginationChange = (e, { activePage }) => {
    this.setState({
      activePage,
    });
    window.scrollTo(0, 0);
    localStorage.setItem(this.props.itemNameForStorage, activePage);
  };

  toggleFavoriteById = (attractionId) => {
    toggleFavorite(attractionId).then(this.refreshAttractions);
  };

  render() {
    const { activePage, attractions } = this.state;

    const totalPages = Math.ceil(attractions.length / favsPerPage);

    const activePageList = attractions.slice(
      activePage * favsPerPage - favsPerPage,
      activePage * favsPerPage
    );
    //console.log(attractions);
    return (
      <main className="favList__list">
        <div className="favList__cardsBox">
          {activePageList.map((attraction) => {
            return (
              <FavouriteCard
                key={attraction.id}
                link={`/placedetails/${attraction.id}`}
                image={attraction.img}
                id={attraction.id}
                name={attraction.name}
                location={attraction.location}
                description={attraction.descriptionLong.slice(0, 200) + "..."}
                price={"Przedział cenowy: " + attraction.priceRange}
                toggleFavorite={() => this.toggleFavoriteById(attraction.id)}
              />
            );
          })}
        </div>
        {totalPages < 2 ? null : (
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
        )}
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
