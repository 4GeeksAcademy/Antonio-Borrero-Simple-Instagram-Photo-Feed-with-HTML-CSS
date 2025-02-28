import React from "react";
import Navbar from "./Navbar";      
import Jumbotron from "./Jumbotron";
import Card from "./Card";          
import Footer from "./Footer";
//import Hero from "./Hero";

const Home = () => {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4"><Card title="Card 1" /></div>
                    <div className="col-md-4"><Card title="Card 2" /></div>
                    <div className="col-md-4"><Card title="Card 3" /></div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
