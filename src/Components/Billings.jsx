import React, { useState } from 'react';
import {DashNav} from "../Common/Navbar";
import styled from "./Css/Billings.module.css"
import Header from "../Common/Header";
import Filter from "../Common/Filter";
import DataArea from "../Common/DataArea";
import Footer from '../Common/Footer';

const Billings = ({page}) => {

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
            <Header title="Billings & Earnings" />
            <div >
                <Filter page='earnings' onFilterChange={handleFilterChange} />
                <DataArea page='earnings' filter={selectedFilter} />

            </div>

            <Footer/>



            </section>
        </div>
    );

}

export default Billings;
