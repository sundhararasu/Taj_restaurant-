import Body from './middle/body.js';
import Dining from './cent/center.js';
import Hotel from './cusine/hotel.js';
import Bottom from './end/bottom.js';
import Footer from './footers/footer.js';
function Home(){
    return(
        <>
            <Body/>
            <Dining/>
            <Hotel/>
            <Bottom/>
            <Footer/>
        </>
    );
}
export default Home;