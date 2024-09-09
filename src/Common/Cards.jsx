import React from 'react';
import styled from './Css/Cards.module.css';
const CardComponent = ({ type, data }) => {
  switch (type) {
    case 'achievement':
      return (
        <div className={styled.achievementCard}>
            {/* <img src={data.image} alt="" /> */}
        <div className={styled.topInfo}>
        <p>{data.address}</p>
        </div>
        <div className={styled.bottomInfo}>
        <p>{data.amount}</p>
        <p>{data.action}</p>
        </div>
        </div>
      );
    case 'property':
      return (
        <div className={styled.propertyCard}>
          <img src={data.image} alt="Property" />
          <div className={styled.propertyInfo}>
            <h3>{data.location}</h3>
            <p>{data.price}</p>
          </div>
        </div>
      );
    case 'propertyDetail':
      return (
        <div className={styled.propertyDetailCard}>
          <img src={data.image} alt="Property" />
          <div className={styled.propertyDetailInfo}>
            <h3>{data.location}</h3>
            <p>{data.price}</p>
            <ul>
              {data.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    case 'pros':
      return (
        <div className={styled.prosCard}>
          <h3>Pros</h3>
          <ul>
            {data.pros.map((pro, index) => (
              <li key={index}>{pro}</li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
};

export default CardComponent;
