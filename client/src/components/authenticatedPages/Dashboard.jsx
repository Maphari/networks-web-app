import React, { Component, useContext } from "react";
import { PassportContext } from "../../context/PassportContext";
import { Link } from "react-router-dom";

import SubCategory from "./Subcategory";
import SubCategoryStores from "./SubCategoryStores";
import axios from "axios";
import Item from "./Item";

export default class Dashboard extends Component {
  static contextType = PassportContext;
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      categories: [],
      stores: [],
      items: [],
      isClicked: false,
      properties: [],
    };
  }

  async componentDidMount() {
    const categoriesResponse = await axios.get("/api/data/category");
    const storesResponse = await axios.get("/api/data/stores");
    this.setState({
      categories: categoriesResponse.data,
      stores: storesResponse.data,
    });
  }

  render() {
    const { categories, stores } = this.state;
    const starterAccountBalance = 3000;
    const getHours = new Date().getHours();
    let counter;

    function truncate(string) {
      if (string.length > 30) {
        const newDescription = string.slice(0, 23) + "...";
        return newDescription;
      } else {
        return string;
      }
    }
    function truncateHeader(string) {
      if (string.length > 24) {
        const newDescription = string.slice(0, 20) + "...";
        return newDescription;
      } else {
        return string;
      }
    }
    const handleOpenMenu = () => {
      this.setState({ isClicked: true });
    };
    const handleCloseMenu = () => {
      this.setState({ isClicked: false });
    };

    const items = this.state.stores.map((item) => item.items);
    const flattenedItems = items.reduce((acc, val) => acc.concat(val), []);
    const currentYear = new Date().getFullYear();
    const userLanguage = navigator.language;

    return (
      <>
        {this.state.isClicked && (
          <div className="absolute toogle-menu">
            <div className="relative flex items-center justify-center">
              <div
                className="menu-small-close flex items-center justify-center flex-1"
                onClick={handleCloseMenu}
              >
                <div className="center"></div>
              </div>
            </div>
            <div className="w-full h-20"></div>
            kkk
          </div>
        )}
        <section
          className={`dashboard-container`}
          style={{ display: this.state.isClicked ? "none" : "" }}
        >
          <section className="dashboard-container__top mb-14">
            <div className="dashboard-container__top-header relative">
              <span className="absolute h-10 w-10 bg-[#8abb3a] rounded-full"></span>
              <h1 className="relative z-50 ml-2">
                <span className="text-white">D</span>ashboard
              </h1>
            </div>
            <form>
              <div
                className={`border form ${
                  this.state.searchTerm ? "rounded-none" : "rounded"
                } py-[0.6rem] w-[20rem] flex items-center gap-1 relative`}
              >
                <i className="fa-solid fa-search ml-2"></i>
                <input
                  type="text"
                  placeholder="Search for categories, shops, etc."
                  className="flex-1 outline-none"
                  value={this.state.searchTerm}
                  onChange={(e) =>
                    this.setState({ searchTerm: e.target.value })
                  }
                />
              </div>
              {this.state.searchTerm && (
                <div className="absolute drop-shadow-2xl bg-[#1E1E1E] text-white p-1 w-[20rem] flex flex-col flex-wrap">
                  {this.state.searchTerm}
                </div>
              )}
            </form>
          </section>

          <section className="w-[100%] mb-5 section">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-[700]">Browse services</h1>
              <Link
                to=""
                className="text-[#1E1E1E] hover:bg-[#1e1e1e] hover:text-white border p-2 font-[400] transition-all duration-700 ease-in-out"
              >
                See all
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 section-div">
              {categories.map((category) => (
                <SubCategory
                  key={category._id}
                  iconName={
                    category.category === "Studios"
                      ? "camera"
                      : category.category === "Technician"
                      ? "gear"
                      : category.category === "Delivery"
                      ? "truck-fast"
                      : category.category === "Entertainment"
                      ? "video"
                      : null
                  }
                  header={truncateHeader(category.category)}
                  rating={category.rating}
                  description={category.description}
                />
              ))}
              <SubCategory
                to="/entertainment"
                rating="4.9"
                iconName="circle-plus"
                header="Add yours"
                description="add your own services"
              />
            </div>
          </section>

          <section className="w-[100%] mb-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-[700] flex items-center gap-1 mb-3">
                <h1>Browse our services</h1>
              </div>
              <Link
                to=""
                className="text-[#1E1E1E] hover:bg-[#1e1e1e] hover:text-white border p-2 font-[400] transition-all duration-700 ease-in-out"
              >
                See all
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {stores.map((store) => (
                <SubCategoryStores
                  key={store._id}
                  heading={truncateHeader(store.storeName)}
                  src={store.storeImage}
                  alt={store.storeName}
                  rating={store.rating}
                  description={truncate(store.description)}
                  isOpen={getHours >= 6 && getHours <= 22 ? "Open" : "Closed"}
                  isOpenIcon={
                    getHours >= 6 && getHours <= 22 ? "clock" : "circle-xmark"
                  }
                  isMoreRated={
                    store.rating >= 4.7
                      ? "Most rated"
                      : store.rating < 4.7
                      ? "Average"
                      : store.rating <= 2.7
                      ? "low rated"
                      : null
                  }
                  iconNameRated={
                    store.rating >= 4.7
                      ? "face-smile"
                      : store.rating < 4.7
                      ? "face-meh"
                      : store.rating <= 2.7
                      ? "face-frown"
                      : null
                  }
                  iconName={
                    store.category === "studios"
                      ? "camera"
                      : store.category === "delivery"
                      ? "truck-fast"
                      : store.category === "technician"
                      ? "gear"
                      : store.category === "book"
                      ? "bookmark"
                      : null
                  }
                />
              ))}
            </div>
          </section>

          <section className="w-[100%] mb-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-[700] flex items-center gap-1 mb-2">
                <h1>Most rated {">="} 4.7</h1>
              </div>
              <Link
                to=""
                className="text-[#1E1E1E] hover:bg-[#1e1e1e] hover:text-white border p-2 font-[400] transition-all duration-700 ease-in-out"
              >
                See all
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {stores.map(
                (store) =>
                  store.rating >= "4.8" && (
                    <SubCategoryStores
                      key={store._id}
                      heading={truncateHeader(store.storeName)}
                      src={store.storeImage}
                      alt={store.storeName}
                      rating={store.rating}
                      description={truncate(store.description)}
                      isOpen={
                        getHours >= 6 && getHours <= 22 ? "Open" : "Closed"
                      }
                      isOpenIcon={
                        getHours >= 6 && getHours <= 22
                          ? "clock"
                          : "circle-xmark"
                      }
                      isMoreRated={
                        store.rating >= 4.7
                          ? "Most rated"
                          : store.rating < 4.7
                          ? "Average"
                          : store.rating <= 2.7
                          ? "low rated"
                          : null
                      }
                      iconNameRated={
                        store.rating >= 4.7
                          ? "face-smile"
                          : store.rating < 4.7
                          ? "face-meh"
                          : store.rating <= 2.7
                          ? "face-frown"
                          : null
                      }
                      iconName={
                        store.category === "studios"
                          ? "camera"
                          : store.category === "delivery"
                          ? "truck-fast"
                          : store.category === "technician"
                          ? "gear"
                          : store.category === "book"
                          ? "bookmark"
                          : null
                      }
                    />
                  )
              )}
            </div>
          </section>

          <section className="w-[100%] mb-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-[700] flex items-center gap-1 mb-3">
                <h1>Studios</h1>
              </div>
              <Link
                to=""
                className="text-[#1E1E1E] hover:bg-[#1e1e1e] hover:text-white border p-2 font-[400] transition-all duration-700 ease-in-out"
              >
                See all
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-3">
              {flattenedItems.map(
                (item) =>
                  item[1].category === "studios" && (
                    <Item
                      key={item[1]?.itemID}
                      src={item[1]?.itemImage}
                      alt={item[1]?.description}
                      heading={truncateHeader(item[1].itemName)}
                      iconName={
                        item[1]?.category === "studios"
                          ? "camera"
                          : item[1]?.category === "delivery"
                          ? "truck-fast"
                          : item[1]?.category === "technician"
                          ? "gear"
                          : item[1]?.category === "book"
                          ? "bookmark"
                          : null
                      }
                      isMoreRated={
                        item[1]?.rating >= 4.7
                          ? "Most rated"
                          : item[1]?.rating < 4.7
                          ? "Average"
                          : item[1]?.rating <= 2.7
                          ? "low rated"
                          : null
                      }
                      iconNameRated={
                        item[1]?.rating >= 4.7
                          ? "face-smile"
                          : item[1]?.rating < 4.7
                          ? "face-meh"
                          : item[1]?.rating <= 2.7
                          ? "face-frown"
                          : null
                      }
                      rating={item[1]?.rating}
                      description={truncate(item[1]?.description)}
                      price={item[1]?.price}
                    />
                  )
              )}
            </div>
          </section>

          <section className="w-[100%] mb-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-[700] flex items-center gap-1 mb-3">
                <h1>All services</h1>
              </div>
              <Link
                to=""
                className="text-[#1E1E1E] hover:bg-[#1e1e1e] hover:text-white border p-2 font-[400] transition-all duration-700 ease-in-out"
              >
                See all
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-3">
              {flattenedItems.map((item) => (
                <Item
                  key={item[1]?.itemID}
                  src={item[1]?.itemImage}
                  alt={item[1]?.description}
                  heading={truncateHeader(item[1].itemName)}
                  iconName={
                    item[1]?.category === "studios"
                      ? "camera"
                      : item[1]?.category === "delivery"
                      ? "truck-fast"
                      : item[1]?.category === "technician"
                      ? "gear"
                      : item[1]?.category === "book"
                      ? "bookmark"
                      : null
                  }
                  isMoreRated={
                    item[1]?.rating >= 4.7
                      ? "Most rated"
                      : item[1]?.rating < 4.7
                      ? "Average"
                      : item[1]?.rating <= 2.7
                      ? "low rated"
                      : null
                  }
                  iconNameRated={
                    item[1]?.rating >= 4.7
                      ? "face-smile"
                      : item[1]?.rating < 4.7
                      ? "face-meh"
                      : item[1]?.rating <= 2.7
                      ? "face-frown"
                      : null
                  }
                  rating={item[1]?.rating}
                  description={truncate(item[1]?.description)}
                  price={item[1]?.price}
                />
              ))}
            </div>
          </section>

          <section className="my-3">
            <p className="opacity-80">
              <span className="color">Networks</span> &copy; copyright{" "}
              {currentYear} <span className="font-medium">{userLanguage}</span>
            </p>
          </section>
        </section>
        <div
          className="relative flex items-center justify-center"
          style={{ display: this.state.isClicked ? "none" : "" }}
        >
          <div
            className="menu-small flex items-center justify-center flex-1"
            onClick={handleOpenMenu}
          >
            <div className="center"></div>
          </div>
        </div>
      </>
    );
  }
}
