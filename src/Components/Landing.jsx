import React from "react" 
import Navbar from "../Common/Navbar";
import styled from "./Css/Landing.module.css";
import CardComponent from "../Common/Cards";
import forestHome from "../Assets/foresthouse.jpg"


const Landing = () =>{
    return (
        <div className={styled.container}>
            <section>
                <nav>
                  <Navbar/>
                </nav>
            </section>
            <section className={styled.header}>
                <div>
                    <h2 >Homes <br /> That Match.</h2>
                    <p>Experience the joy of coming home <br /> to a place that truly resonates with your personal <br /> style and enhances your daily living experience.</p>
                </div>
            </section>
            <section className={styled.achievmentCards}>
            <CardComponent 
            type="achievement" 
            data={{ title: "Top Performer", description: "Achieved highest sales in Q1", date: "07 Mar 2024", action:"Sold", address: "92 Edgefield Ave, SC 29483", amount:"#12,000,000", image:{forestHome} }} 
            />
              <CardComponent 
            type="achievement" 
            data={{ title: "Top Performer", description: "Achieved highest sales in Q1", date: "01 Mar 2024",action:"Rented", address: '498 N. Euclid Ave , NY 12553', amount:"#12,000,000", image:{forestHome} }} 
            />
              <CardComponent 
            type="achievement" 
            data={{ title: "Top Performer", description: "Achieved highest sales in Q1", date: "10 Apr 2024", action:"Sold", address: "92  Drive Roy Euclid, UT 84067", amount:"#12,000,000", image:{forestHome} }} 
            />
              <CardComponent 
            type="achievement" 
            data={{ title: "Top Performer", description: "Achieved highest sales in Q1", date: "23 Jan 2024", action:"Sold", address:"7737  Lane Union, NJ 07083", amount:"#12,000,000", image:{forestHome} }} 
            />
              <CardComponent 
            type="achievement" 
            data={{ title: "Top Performer", description: "Achieved highest sales in Q1", date: "08 Nov 2024", action:"Rented", address:"17 N. Rocky River Courth, TX 76110", amount:"#12,000,000", image:{forestHome} }} 
            />
              <CardComponent 
            type="achievement" 
            data={{ title: "Top Performer", description: "Achieved highest sales in Q1", date: "26 Apr 2024", action:"Sold", address:"8128 E. Colonial  Beach, FL 32937", amount:"#12,000,000", image:{forestHome} }} 
            />
            </section>
        </div>
      );

}

export default Landing;
