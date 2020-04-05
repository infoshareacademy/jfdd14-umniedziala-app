import React, { Component } from "react";
import { Pagination } from "semantic-ui-react";
import FavouriteCard from "../FavouriteCard/FavouriteCard";
import { toggleFavorite, getFavoriteAttractionsAsArray } from "../../services";
import "./FavListWithPagination.css";

const favsPerPage = 6;

class FavListWithPagination extends Component {
  state = {
    activePage: this.props.defaultPage,
    totalPages: 0,
    attractions: [],
  };

  componentDidMount() {
    this.refreshAttractions();
  }

  refreshAttractions = () => {
    getFavoriteAttractionsAsArray().then((attractions) =>
      this.setState({
        attractions,
        totalPages: Math.ceil(attractions.length / favsPerPage),
      })
    );
  };

  handlePaginationChange = (e, { activePage }) => {
    this.setState({
      activePage,
      activePageList: this.props.list.slice(
        activePage * favsPerPage - favsPerPage,
        activePage * favsPerPage
      ),
    });
    window.scrollTo(0, 0);
    localStorage.setItem(this.props.itemNameForStorage, activePage);
  };

  toggleFavoriteById = (attractionId) => {
    toggleFavorite(attractionId).then(this.refreshAttractions);
  };

  render() {
    const { activePage, totalPages, attractions } = this.state;

    const activePageList = attractions.slice(
      activePage * favsPerPage - favsPerPage,
      activePage * favsPerPage
    );

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

export default FavListWithPagination;

/* PROPS - example use:
  list={attractionData}
  itemNameForStorage = "tripcity-lastViewedPage"   ---> for saving to localStorage, the same as string below:
  defaultPage={localStorage.getItem("tripcity-lastViewedPage") || 1}

*/
