import '../CSS/MainPage.css'

const video = require('../Assets/sampleVideo1.mp4'); 

const MainPage = () => {
    return (
        <div className='mainPageWrapper'>
            <div className="mainVideo">
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className='contentWrapper'>
                <h1>Welcome to Art Collector</h1>

            </div>
        </div>
    )

}

export default MainPage;