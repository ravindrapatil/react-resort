import React from 'react';
import { Link } from "react-router-dom";

import Heros from '../components/Heros';
import Banner from '../components/Banner';

function Error() {
    return (
        <Heros>
            <Banner title="404" subtitle="page not found">
                <Link to="/" variant="body2" className="btn-primary">return home</Link>
            </Banner>
        </Heros>
    )
}

export default Error
