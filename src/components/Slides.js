import React, { useState, useEffect, useContext } from 'react';
import roomone from '../images/room-10.jpeg';
import roomtwo from '../images/room-9.jpeg';
import roomthree from '../images/room-5.jpeg';
import roomfour from '../images/slide-bg.jpg';
import roomfive from '../images/slide-bg-02.jpg';
import Banner from '../components/Banner';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { RoomContext } from '../context';

const slidesItem = [
    { title: 'WELCOME TO STARHOTEL, LIVE YOUR MYTH', subTitle: 'Modern Rooms & Spacious Suites', image: roomone },
    { title: 'SUPER LUXURY HOTELS', subTitle: 'I rarely stay in hotels because I have friends all over the world.', image: roomtwo },
    { title: 'THERE IS A LUXURYAND AND FANTASY', subTitle: 'Hotel life is about the same in every latitude.', image: roomthree },
    { title: 'IT IS A REFUGE FROM HOME LIFE', subTitle: 'No matter how nice a hotel is, its not home.', image: roomfour },
    { title: 'THE LONELIEST PLACE TO BE IS A HOTEL ROOM', subTitle: 'The new type of heaven is being offered to humans', image: roomfive }
];

function Slides() {
    const usersContext = useContext(RoomContext);
    const { handleGoToSection } = usersContext;

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
        <>
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
                <div className="moveTo">
                    <IconButton onClick={handleGoToSection} color="primary" aria-label="Move To Section" component="span">
                        <ArrowDownwardIcon />
                    </IconButton>
                </div>
            </section>
        </>
    )
}

export default Slides
