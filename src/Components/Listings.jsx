import React, { useState } from 'react';
import {DashNav} from "../Common/Navbar";
import styled from "./Css/Overview.module.css"
import Header from "../Common/Header";
import Filter from "../Common/Filter";
import DataArea from "../Common/DataArea";
import Footer from '../Common/Footer';

const Overview = ({page}) => {

  

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
            <Header title="Wuraola's Stats" buttonText="Add Listings" />
            <div >
                <Filter page='listings' onFilterChange={handleFilterChange} />
                <DataArea page='listings' filter={selectedFilter} />

            </div>

            <Footer/>



            </section>
        </div>
    );

}

export default Overview;
