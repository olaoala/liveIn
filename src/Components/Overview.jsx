import React, { useState } from 'react';
import {DashNav} from "../Common/Navbar";
import styled from "./Css/Overview.module.css"
import Header from "../Common/Header";
import Filter from "../Common/Filter";
import DataArea from "../Common/DataArea";
import Footer from '../Common/Footer';

const Overview = ({page}) => {

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
            <Header title="Wuraola's Stats" />
            <div >
                <Filter page='overview' onFilterChange={handleFilterChange} />
                <DataArea page='overview' filter={selectedFilter} />

            </div>

            <Footer/>



            </section>
        </div>
    );

}

export default Overview;
