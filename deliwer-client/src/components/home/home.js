import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cycleImage from '../../assets/images/cycle.png';

const Home = () => (
  <>
    <Styles className="p-3 mt-10 md:mt-0 flex flex-col md:flex-row md:justify-around gap-10 items-center w-full md:h-[85vh] pt-3">
      <div className="md:pl-12">
        <div className="">
          <p className="header-1">Deliwer</p>
          <p className="header-2">Delivery made easy</p>
        </div>
        <Link to={'/bid'}>
          <button
            type="submit"
            className="mt-10 px-6 py-2 bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-700 text-white text-sm rounded-3xl"
          >
            Place a Bid
          </button>
        </Link>
      </div>
      <div className="md:pr-12 max-w-[300px] md:max-w-[500px]">
        <img className="max-w-full object-contain" src={cycleImage} alt="Deliwer"></img>
      </div>
    </Styles>
  </>
);

const Styles = styled.div`
  .header-1 {
    color: var(--dark-slate);
    font-weight: 600;
    line-height: 1.1;
    margin: 0px 0px 10px 0px;
    font-size: clamp(40px, 8vw, 80px);
    color: var(--light-navy);
  }
  .header-2 {
    color: var(--dark-slate);
    font-weight: 600;
    line-height: 1.1;
    margin: 0px 0px 20px 0px;
    font-size: clamp(30px, 8vw, 60px);
    line-height: 0.9;
  }
`;

export default Home;
