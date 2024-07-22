import '../CSS/MainPage.css'
const video = require('../Assets/sampleVideo1.mp4'); 

const MainPage = () => {
    return (
        <div className='mainPageWrapper'>
                <video autoPlay loop muted id='backgroundVideo'>
                    <source src={video} type="video/mp4" />
                </video>
            <div className='contentWrapper'>
                <h1>Welcome to Art Collector</h1>
                <p className='mainPageText'>Art Collector is an application for Art lovers to look at different pictures of art provided by a Dutch Art Museum Api! When an Art Lover sees an image they like they can favorite it and add it to their 'Gallery' to show their friends! </p>
            </div>
        </div>
    )
}

export default MainPage