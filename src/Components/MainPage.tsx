import '../CSS/MainPage.css'

const video = require('../Assets/sampleVideo1.mp4'); 

const MainPage = () => {
    return (
        <div className='mainPageWrapper'>
            <video autoPlay loop muted id='backgroundVideo'>
                <source src={video} type="video/mp4" />
            </video>
            <div className='contentWrapper'>
                <h1>Welcome to Art Collector!</h1>
                <p className='mainPageText'>Art Collector is an application for art lovers to view master works provided by Rijksmuseum in Amsterdam. Aficionados may add or remove a piece to and from My Gallery to display their supreme taste.
              </p>
            </div>
        </div>
    )
}

export default MainPage