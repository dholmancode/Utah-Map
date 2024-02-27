// App.jsx
import React from 'react';
import InteractiveMap from './InteractiveMap';
import 'leaflet/dist/leaflet.css';
import './styles/infoStyles.css';
import './styles/mapStyles.css';


function App() {
  return (
    <>
      <header>
        National Conservation Areas | Utah
        {/* Header Content */}
      </header>
      <main>
        <InteractiveMap />
      </main>
      <footer>
         <a href="https://dannyholmanmedia.com" target="_blank" rel="noopener noreferrer">
         <img src="https://dannyholmanmedia.com/wp-content/uploads/2024/02/DGH-Blob.png" alt="Danny Holman Media Icon" />
        <br />
          dannyholmanmedia.com

        </a>
        </footer>
    </>
  );
}

export default App;