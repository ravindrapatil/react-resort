import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function ScrollToTop() {
    const [scrollToTop, setScrollToTop] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            toggleVisibility()
        })
        return () => {
            document.removeEventListener('scroll');
        }
    }, []);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setScrollToTop(true)
        } else {
            setScrollToTop(false)
        }
    }

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {
                scrollToTop && <div onClick={scrollTop} className="scroll-to-top">
                    <ArrowUpwardIcon />
            </div>
            }

        </>
    )
}

export default ScrollToTop
