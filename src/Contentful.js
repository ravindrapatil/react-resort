import { createClient } from 'contentful';

export default createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

// .env.development file same location as package.json file.