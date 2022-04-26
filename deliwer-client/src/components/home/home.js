import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Home = () => (
  <>
    <Styles>
      <div>
        <h2>Deliwer.</h2>
      </div>
      <div>
        <h3>Delivery made easy</h3>
      </div>
      <Link to={"/bid"}>
        <div className="green-btn btn">Place a Bid</div>
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
    margin: 0px 0px 10px 0px;
    font-size: clamp(40px, 8vw, 80px);
    color: var(--light-navy);
  }

  h3 {
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
