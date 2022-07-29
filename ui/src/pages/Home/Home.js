import React from 'react';

const Home = () => {
    return (
        <div>
            <h3>Welcome to your Datawiza SPA Demo App, built with:</h3>
            <ul>
                <li><a href='https://nodejs.org/en/docs/'>Node JS</a> for cross-platform server-side code</li>
                <li><a href='https://datawiza.com/'>Datawiza Access broker</a> for user authentication</li>
                <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                <li><a href='http://getbootstrap.com/'>Material UI</a> for layout and styling</li>
            </ul>
            <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
        </div>
    );
}

export default Home;
