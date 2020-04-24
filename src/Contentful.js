import { createClient } from 'contentful';

export default createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

// .env.development file same location as package.json file.

// react-router-dom not play well/good with contentful. (Google search with => react-router-dom an netlify)
// Fix is very simple - create a file called '_redirects' in the public folder and add this => /*    /index.html   200
// https://www.youtube.com/watch?v=ScDWrogElmo&t=17745s