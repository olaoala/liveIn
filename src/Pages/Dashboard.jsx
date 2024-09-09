import React, { useState } from 'react';
import {DashNav} from "../Common/Navbar";
import styled from "./Css/Dashboard.module.css";
import CardComponent from "../Common/Cards";
import forestHome from "../Assets/foresthouse.jpg"
import Header from "../Common/Header";
import Filter from "../Common/Filter";
import DataArea from "../Common/DataArea";
import Footer from '../Common/Footer';

const Dashboard = ({page}) => {

    const handleSetupListings = () => {
        console.log('Setup Listings Clicked');
      };

      const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };
    return (
        <div className={styled.container}>
            <section>
                <nav>
                    <DashNav />
                </nav>
            </section>

            <section className={styled.body}>
            <Header title="Welcome back Wura" buttonText="Setup Listings" onButtonClick={handleSetupListings} />
            <div >
                <Filter page='home' onFilterChange={handleFilterChange} />
                <DataArea page='home' filter={selectedFilter} />

            </div>

            <Footer/>



            </section>
        </div>
    );

}

export default Dashboard;
