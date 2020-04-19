import React, { Component } from "react";
import { Pagination } from "semantic-ui-react";
import FavouriteCard from "../FavouriteCard/FavouriteCard";
import { toggleFavorite, getFavoriteAttractionsAsArray } from "../../services";
import "./FavListWithPagination.css";
import { UserContext } from "../../contexts/UserContext";

const favsPerPage = 6;

class FavListWithPagination extends Component {
  static contextType = UserContext;

  state = {
    activePage: this.props.defaultPage,
    favAttractions: [],
  };

  componentDidMount() {
    const userId = this.context.userId;
    this.refreshAttractions(userId);
  }

  //this one works but does fetch all the time
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.favAttractions !== this.state.favAttractions) {
  //     this.refreshAttractions();
  //   }
  // }

  refreshAttractions = (userId) => {
    getFavoriteAttractionsAsArray(userId).then((attractions) =>
      this.setState({
        favAttractions: attractions
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

  toggleFavoriteById = (attractionId, userId) => {
    toggleFavorite(attractionId, userId).then(this.refreshAttractions(userId));
  };

  render() {
    const { activePage, favAttractions } = this.state;

    const userId = this.context.userId;

    const totalPages = Math.ceil(favAttractions.length / favsPerPage);

    const activePageList = favAttractions.slice(
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
                toggleFavorite={() => this.toggleFavoriteById(attraction.id, userId)}
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
