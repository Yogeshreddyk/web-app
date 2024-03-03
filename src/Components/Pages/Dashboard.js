import React, { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import client from '../../assests/client.png';
import '../styles/Dashboard.css';

function Dashboard() {
  const headings = ['Thermal', 'POS', 'Desktop', 'Hospitality'];
  const images = [
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/600x200"
  ];
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="Carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/300x200"
              alt="First slide"
            // style={{ height: '200px !important' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/300x200"
              alt="First slide"
            // style={{ maxHeight: '200px !important' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/300x200"
              alt="First slide"
            // style={{ maxHeight: '200px !important' }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container margin">
        <div className="row gy-5">
          <div className="col-lg-6">
            <img
              src="https://via.placeholder.com/300x200"
              alt=""
              className="img-fluid mb-3"
            // Add bottom margin
            />
          </div>
          <div className="col-lg-6 description">
            <h2>Description</h2>
            <p>
              Your description text goes here. You can add multiple paragraphs
              and formatting as needed. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <Button className="transparent-button">Read me</Button>
          </div>
          <div className="row gy-5 products">
            <div className="col-lg-10">
              <h3>Products and Services</h3>
              <p style={{ color: 'grey' }}>
                Transforming hospitality and retail with our cutting-edge
                products and services
              </p>
            </div>
            <div className="col-lg-2">
              <Button className="transparent-button">Explore all</Button>
            </div>
          </div>
          <div className="row extraDiv">
            <div className="col-lg-4 abc">
              {headings.map((heading, index) => (
                <h6 key={index} className={index === currentHeadingIndex ? 'highlighted' : ''}>
                  {heading}
                </h6>
              ))}
              <Button className="ghi" style={{ marginLeft: '0px' }}>
                View more
              </Button>
              <Button className="ghi">Get in touch</Button>
            </div>
            <div className="col-lg-8 def">
              {images.map((image, index) => (
                <div key={index} style={{ display: index === currentHeadingIndex ? 'block' : 'none' }}>
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    style={{ height: '100%', width: '100%' }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="client">
            <div className="row">
              <div className="col-lg-4">
                <h3>Our clients</h3>
              </div>
              <div className="col-lg-8">
                <p>
                  Our valued clients experience exceptional service, tailored
                  solutionn and unwaverring support for sustained success and
                  growth
                </p>
              </div>
            </div>
            <div>
              <img src={client} alt="" style={{ width: '100%' }} />
            </div>
          </div>
          <div className="media">
            <div className="row">
              <div className="col-lg-10">
                <h3 className="products">Media</h3>
                <p className="abc">
                  Explore diverse media collection: Ten must-see taste for every
                  pick
                </p>
              </div>
              <div className="col-lg-2">
                <Button
                  className="transparent-button"
                  style={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  Explore all
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
