import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

function MultiCarousel(props) {
    const { images } = props;
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={3000}
            infinite={true}
            keyBoardControl={true}
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            itemClass="carousel-item-padding-40-px"
            responsive={responsive}>
            {
                images.map((item, index) => {
                    return <img key={index} src={item} alt={item} style={{ width: '100%', height: '15rem', objectFit: 'cover' }} />
                })
            }
        </Carousel>
    )
}

export default MultiCarousel
