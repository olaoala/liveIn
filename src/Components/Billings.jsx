import React, { useState } from 'react';
import {DashNav} from "../Common/Navbar";
import styled from "./Css/Billings.module.css"
import Header from "../Common/Header";
import Filter from "../Common/Filter";
import DataArea from "../Common/DataArea";
import Footer from '../Common/Footer';

const Billings = ({page}) => {

    
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
            <Header title="Welcome Wura," subtittle="Get the best as a Live In Home owner today." /> 
            <hr />   
            
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
