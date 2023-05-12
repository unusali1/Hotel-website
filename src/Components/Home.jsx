import React from "react";
import Carousel from "react-elastic-carousel";
import { BsAirplane } from "react-icons/bs";
import { FaBus } from "react-icons/fa";
import { RiHotelLine, RiVisaFill } from "react-icons/ri";
import { SiCockpit } from "react-icons/si";
import { TbTrain } from "react-icons/tb";
import Chicago from "../Assets/Chicago.png";
import NewOrleans from "../Assets/NewOrieans.png";
import NewYork from "../Assets/NewYork.png";
import Orlando from "../Assets/Orlando.png";
import book from "../Assets/book.png";
import euro from "../Assets/euro.png";
import haj from "../Assets/haj.png";
import lemon from "../Assets/lemon.png";
import radison from "../Assets/radison.png";
import yotel from "../Assets/yotel.png";
import Footer from "./Footer";
import Hotel from "./Slidebar";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h3 className="home-txt">
          Welcome to Ghuronti! Find Tours, Flights & Hotels Packages
        </h3>

        <div className="home">
          <div className="ticket-container">
            <div className="ticket">
              <img className="haj" src={haj} alt="haj" />
              <button className="haj-txt">Hajj & Umrah</button>
            </div>
            <div className="ticket">
              <BsAirplane className="btn-icon" />
              <button className="btn-txt">Flight</button>
            </div>
            <div className="ticket">
              <RiHotelLine className="btn-icon" />
              <button className="btn-txt">Hotel</button>
            </div>
            <div className="ticket">
              <RiVisaFill className="btn-icon" />
              <button className="btn-txt"> Visa</button>
            </div>
            <div className="ticket">
              <SiCockpit className="btn-icon" />
              <button className="btn-txt"> Tours</button>
            </div>
            <div className="ticket">
              <FaBus className="btn-icon" />
              <button className="btn-txt">Buses </button>
            </div>
            <div className="ticket">
              <TbTrain className="btn-icon" />
              <button className="btn-txt">Trains </button>
            </div>
          </div>

          <div>
            <div className="form-one">
              <div className="city">
                <div>
                  <label className="label" htmlFor="city">
                    City/Hotel/Street Name{" "}
                  </label>
                </div>
                <input
                  className="input"
                  type=" text"
                  placeholder="Enter your city"
                />
              </div>
              <div className="nationality">
                <div>
                  <label className="label" htmlFor="nationality">
                    Nationality{" "}
                  </label>
                </div>
                <input
                  className="input"
                  type=" text"
                  placeholder="Your Nationality"
                />
              </div>
            </div>
            <div className="form-one">
              <div className="check">
                <div className="check-in">
                  <div>
                    <label className="label" htmlFor="city">
                      Check In{" "}
                    </label>
                  </div>
                  <input className="input" type="date" />
                </div>
                <div className="check-out">
                  <div>
                    <label className="label" htmlFor="city">
                      Check Out{" "}
                    </label>
                  </div>
                  <input className="input" type="date" />
                </div>
              </div>
              <div className="nationality">
                <div>
                  <label className="label" htmlFor="nationality">
                    Rooms & Guests
                  </label>
                </div>
                <input
                  className="input"
                  type=" text"
                  placeholder="How Many person"
                />
              </div>
            </div>
          </div>

          <div>
            <button className="see-hotel">Search Hotels</button>
          </div>
        </div>
      </div>
      <div className="hotel">
        <div>
          <h3 className="hotel-txt">
            Trending International Destinations Hotels
          </h3>
          <p className="hotel-txt2">
            The world is now just a hop, skip and jump away and here’s how you
            can make your travel easier and better.{" "}
          </p>
        </div>
        <div>
          <div className="card-container">
            <div className="card">
              <img className="hotel-img" src={NewYork} alt="not found" />
              <div className="name">
                <h3 className="hotel-name">New York City Hotels</h3>
                <p className="night">1 Night</p>
              </div>
              <p className="rate"> Starts From $184</p>
              <button className="hotel-btn">View Details</button>
            </div>
            <div className="card">
              <img className="hotel-img" src={Orlando} alt="not found" />
              <div className="name">
                <h3 className="hotel-name">Euro Hostel Kerala</h3>
                <p className="night">1 Night</p>
              </div>
              <p className="rate"> Starts From $155</p>
              <button className="hotel-btn">View Details</button>
            </div>
            <div className="card">
              <img className="hotel-img" src={NewOrleans} alt="not found" />
              <div className="name">
                <h3 className="hotel-name">New Orleans Hotels</h3>
                <p className="night">1 Night</p>
              </div>
              <p className="rate"> Starts From $184</p>
              <button className="hotel-btn">View Details</button>
            </div>
            <div className="card">
              <img className="hotel-img" src={Chicago} alt="not found" />
              <div className="name">
                <h3 className="hotel-name">Chicago Hotels</h3>
                <p className="night">1 Night</p>
              </div>
              <p className="rate"> Starts From $184</p>
              <button className="hotel-btn">View Details</button>
            </div>
          </div>
        </div>
      </div>
      <div className="book">
        <img className="book-img" src={book} alt="not found" />
      </div>
      <div className="hotel">
        <div>
          <h3 className="hotel-txt">Trending Indian Destinations Hotels</h3>
          <p className="hotel-txt2">
            India’s diverse topography, history and culture offers enough
            experiences to fulfil any type of wanderlust.{" "}
          </p>
        </div>
        <div>
          <div className="card-container">
            <div className="card">
              <img className="hotel-img" src={lemon} alt="not found" />
              <div className="name">
                <h3 className="hotel-name">Lemon Tree Siliguri</h3>
                <p className="night">1 Night</p>
              </div>
              <p className="rate"> Starts From $53</p>
              <button className="hotel-btn">View Details</button>
            </div>
            <div className="card">
              <img className="hotel-img" src={euro} alt="not found" />
              <div className="name">
                <h3 className="hotel-name">Euro Hostel Kerala</h3>
                <p className="night">1 Night</p>
              </div>
              <p className="rate"> Starts From $43</p>
              <button className="hotel-btn">View Details</button>
            </div>
            <div className="card">
              <img className="hotel-img" src={yotel} alt="not found" />
              <div className="name">
                <h3 className="hotel-name">Yotel Hotel Goa</h3>
                <p className="night">1 Night</p>
              </div>
              <p className="rate"> Starts From $184</p>
              <button className="hotel-btn">View Details</button>
            </div>
            <div className="card">
              <img className="hotel-img" src={radison} alt="not found" />
              <div className="name">
                <h3 className="hotel-name">Radisson RED</h3>
                <p className="night">1 Night</p>
              </div>
              <p className="rate"> Starts From $184</p>
              <button className="hotel-btn">View Details</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3 className="hotel-txt">
            Customer satisfaction is our top priority
          </h3>
          <p className="hotel-txt2">
            Our clients praise us for our great results, personable service,
            expert knowledge. Here are what just a few of them had to say{" "}
          </p>
        </div>
        <div className="customer">
          <Carousel>
            <Hotel text=" Your thoughtfulness and support of Ghuronti is very much appreciated. You are a very dear friend to the Chamber, and I want to assure you that your confidence in Ghuronti will be justified." />
            <Hotel text=" Your thoughtfulness and support of Ghuronti is very much appreciated. You are a very dear friend to the Chamber, and I want to assure you that your confidence in Ghuronti will be justified." />
            <Hotel text=" Your thoughtfulness and support of Ghuronti is very much appreciated. You are a very dear friend to the Chamber, and I want to assure you that your confidence in Ghuronti will be justified." />
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
