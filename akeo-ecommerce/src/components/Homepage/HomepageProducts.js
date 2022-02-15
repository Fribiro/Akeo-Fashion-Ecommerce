import React from "react";
import styled from "styled-components";

const Cards = styled.div`
    display: flex;
    justify-content: 
    align-items: center;
    min-height: 100vh;
    background: #131313;

    & .container {
        position: relative;
    }

    & .container .card{
        position: relative;
        width: 320px
        height: 450px;
        background: #232323;
        border-radius: 20px;
        overflow: hidden;
    }

    & .container .card:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #9bdc28;
        clip-path: circle(150px 80% 20%);
        transition: 0.5s ease-in-out;
    }
    & .container .card:hover:before{
        clip-path: circle(150px 80% -20%);
    }

    & .container .card:hover:after{
        content: 'Akeo';
        position: absolute;
        top: 30%;
        left: -20%;
        font-size: 12em;
        font-weight: 800;
        font-style: italics;
        color: rgba(255, 255, 255, 0.04);
    }

`;

const HomepageProducts = () => {
  return (
    <Cards>
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src="./assets/img/suit.png" alt="Suit" />
          </div>
          <div className="contentBx">
            <h2></h2>
            <div className="size">
              <h3></h3>
              <span>9</span>
              <span>10</span>
              <span>8</span>
              <span>11</span>
            </div>
            <div className="color">
              <h3></h3>
              <span>9</span>
              <span>10</span>
              <span>8</span>
            </div>
            <a href="">Buy</a>
          </div>
        </div>
      </div>
    </Cards>
  );
};

export default HomepageProducts;
