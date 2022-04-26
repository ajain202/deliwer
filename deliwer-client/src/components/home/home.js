import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button1 = ({ label }) => {
  return (
    <button
      name={label}
      type="submit"
      className="px-5 py-2 bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-700 rounded text-white text-sm rounded-3xl"
    >
      {label}
    </button>
  );
};
const Home = () => (
  <>
    <Styles className="bg h-[85vh] w-full pt-3">
      <div className="pl-16 pt-16er">
        <h2>Deliwer.</h2>
      </div>
      <div className="pl-16">
        <h3>Delivery made easy</h3>
      </div>
      <Link to={"/bid"}>
        <div className="flex justify-end relative">
          <Button1 label={"Place a Bid ->"}></Button1>
        </div>
      </Link>
    </Styles>
  </>
);

const Styles = styled.div`
  h6 {
    margin: 30px 0px;
    font-family: var(--font-mono);
    font-weight: 400;
    color: var(--green);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
  }

  h2 {
    position: relative;
    margin: 0px 0px 10px 0px;
    font-size: clamp(60px, 9vw, 90px);
    color: var(--light-navy);
  }

  h3 {
    position: relative;
    margin: 0px 0px 20px 0px;
    font-size: clamp(40px, 8vw, 80px);
    line-height: 0.9;
  }

  p {
    max-width: 500px;
    margin: 0px 0px 50px 0px;
  }
`;

export default Home;
