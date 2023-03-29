import React from 'react';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';
import './delivery.css'
import DeliveryCollections from './deliveryCollection';
import TopBrands from './topBrands';
import restaurents from "../../data/restaurants"

const deliveryFilters=[
    {
        id:1,
        icon:<i class="fi fi-rr-settings-sliders absolute-center"></i>,
        title:'Filters'
    },
    {
        id:2,
        title:'Rating :4.0+'
    },
    {
        id:3,
        title:'Safe and Hygienic'
    },
    {
        id:4,
        title:'Pure Veg'
    },
    {
        id:5,
        icon:<i class="fi fi-rr-apps-sort absolute-center"></i>,
        title:'Delivery Time'
    },
    {
        id:6,
        title:'Great Offers'
    },
]
const restaurantsList = restaurents;
const Delivery = () => {
    return (
        <div>
            <div className='max-width'>
            <Filters 
            filtersList={deliveryFilters}
            ></Filters>
            </div> 
            <DeliveryCollections></DeliveryCollections>
            <TopBrands></TopBrands>
            <ExploreSection 
             list={restaurantsList}
             collectionName="Delivery Restaurants in Dhaka"
            ></ExploreSection>
        </div>
    );
};

export default Delivery;