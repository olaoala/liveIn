import React, { useState } from 'react';
import {DashNav} from "../Common/Navbar";
import styled from "./Css/Tour.module.css"
import Header from "../Common/Header";
import Filter from "../Common/Filter";
import DataArea from "../Common/DataArea";
import Footer from '../Common/Footer';
import Resources from '../Common/Resources';

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
            <Header title="Welcome Wura," subtittle="Get the best as a Live In Home owner today." buttons={[
    { text: 'Pending Actions (3)', onClick: handleSetupListings },
    { text: 'Manage Listings', onClick: handleSetupListings },
    { text: 'Add new listing', onClick: handleSetupListings },

  ]} />
  <hr />
            <div >
                <Filter page='listings' onFilterChange={handleFilterChange} />
                <DataArea page='home' filter={selectedFilter} />

            </div>
            <Resources />


            <Footer/>



            </section>
        </div>
    );

}

export default Overview;
