import React, { useState } from 'react';
import Footer from '../../components/common/footer';
import Header from '../../components/common/header';
import TabOptions from '../../components/common/tabOption';
import Delivery from '../../components/delivery';
import DiningOut from '../../components/diningOut';
import Nightlife from '../../components/nightlife';

const HomePage = () => {
    const [activeTab ,setActiveTab] = useState("Delivery")
    return (
        <div>
            <Header></Header>
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}></TabOptions>
            {/* diff screen */}
            {getCorrectScreen(activeTab)}
            <Footer></Footer>
        </div>
    );
};

const getCorrectScreen =(tab)=>{
    switch(tab){
        case "Delivery":
            return <Delivery></Delivery>
        case "Dining Out":
            return <DiningOut></DiningOut>
        case "Nightlife":
            return <Nightlife></Nightlife>
        default:
            return <Delivery></Delivery>
    }
}

export default HomePage;