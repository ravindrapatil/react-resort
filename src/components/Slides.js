import React, { useState, useEffect } from 'react';
import roomone from '../images/room-10.jpeg';
import roomtwo from '../images/room-9.jpeg';
import roomthree from '../images/room-5.jpeg';
import roomfour from '../images/slide-bg.jpg';
import roomfive from '../images/slide-bg-02.jpg';
import Banner from '../components/Banner';

const slidesItem = [
    { title: 'WELCOME TO STARHOTEL, LIVE YOUR MYTH', subTitle: 'Modern Rooms & Spacious Suites', image: roomone },
    { title: 'A Five Star Hotel 2', subTitle: 'Break The UI Into A Component Hierarchy', image: roomtwo },
    { title: 'A Five Star Hotel 3', subTitle: 'Break The UI Into A Component Hierarchy', image: roomthree },
    { title: 'A Five Star Hotel 4', subTitle: 'Break The UI Into A Component Hierarchy', image: roomfour },
    { title: 'A Five Star Hotel 5', subTitle: 'Break The UI Into A Component Hierarchy', image: roomfive }
];

function Slides() {
    const [curr, setCurr] = useState(0);
    const slidesLength = slidesItem.length;

    const gotoNext = () => {
        setCurr(curr === slidesLength - 1 ? 0 : curr + 1);
    }

    useEffect(() => {
        const timer = setTimeout(gotoNext, 4000);
        return () => {
            clearTimeout(timer);
        }
    })

    if (!Array.isArray(slidesItem) && slidesItem.length <= 0) {
        return null
    }

    return (
        <section className="slider">
            {
                slidesItem.map((slide, index) => {
                    return <div key={index} className={index === curr ? 'slide active' : 'slide'}>
                        <Banner title={slide.title} subtitle={slide.subTitle} />
                        {
                            index === curr && (
                                <img className="image" src={slide.image} alt={slide.title} />
                            )
                        }
                    </div>
                })
            }
        </section>
    )
}

export default Slides
