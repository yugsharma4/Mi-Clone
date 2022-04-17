
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//Data
import Obj from './data/data.json';

//Components
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider.jsx';
import Offers from './components/Offers.jsx';
import Heading from './components/Heading.jsx';
import StarProduct from './components/StarProduct.jsx'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.jsx'
import HotAccessories from './components/HotAccessories.jsx'
import ProductReviews from './components/ProductReviews.jsx';
import Videos from './components/Videos.jsx';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';
import NavOptios from './components/NavOptios.jsx'


function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />

      <NavOptios miPhones={Obj.miPhones} redmiPhones={Obj.redmiPhones} tv={Obj.tv} laptop={Obj.laptop} fitnessAndLifeStyle={Obj.fitnessAndLifeStyle} home={Obj.home} audio={Obj.audio}  accessories={Obj.accessories}/>

      <Slider start={Obj.banner.start}/>
      <Offers offer={Obj.offer}/>

      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={Obj.starProduct}/>

      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route exact path='/music' element={
          <HotAccessories music={Obj.hotAccessories.music} musicCover ={Obj.hotAccessoriesCover.music} />}/>

        <Route exact path='/smartDevice' element={
          <HotAccessories smartDevice={Obj.hotAccessories.smartDevice} smartDeviceCover ={Obj.hotAccessoriesCover.smartDevice} />}/>

        <Route exact path='/home' element={
          <HotAccessories home={Obj.hotAccessories.home} homeCover ={Obj.hotAccessoriesCover.home} />}/>

        <Route exact path='/lifestyle' element={
          <HotAccessories lifestyle={Obj.hotAccessories.lifeStyle} lifestyleCover ={Obj.hotAccessoriesCover.lifeStyle} />}/>

        <Route exact path='/mobileAccessories' element={
          <HotAccessories mobileAccessories={Obj.hotAccessories.mobileAccessories} mobileAccessoriesCover ={Obj.hotAccessoriesCover.mobileAccessories} />}/>
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews ProductReviews={Obj.productReviews} />

      <Heading text="VIDEOS" />
      <Videos videos={Obj.videos}/>

      <Heading text="IN THE PRESS" />
      <Banner banner = {Obj.banner}/>

      <Footer footer={Obj.footer}/>
    </Router>

  );
}

export default App;
