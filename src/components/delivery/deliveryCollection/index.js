import React from 'react';
import Slider from 'react-slick';
import NextArrow from '../../common/crousel/nextArrow';
import PrevArrow from '../../common/crousel/prevArrow';
import './deliveryCollections.css'
import DeliveryItem from './deliveryItem';

const deliveryItem=[
    {
        id:1,
        title:"Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id:2,
        title:"Pasta",
        cover: "https://images.deliveryhero.io/image/fd-bd/LH/jzsv-hero.jpg?width=1200&height=300&quality=45",
    },
    {
        id:3,
        title:"Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id:4,
        title:"Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id:5,
        title:"Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id:6,
        title:"Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id:7,
        title:"Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
]
const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PrevArrow></PrevArrow>
  };
const DeliveryCollections = () => {
    return (
        <div className='delivery-collections'>
            <div className='max-width'>
                <div className='collection-title'>
                    Eat what makes you happy
                </div>
                <Slider {...settings}>
                    {deliveryItem.map((item)=>{
                        return <DeliveryItem item={item}> </DeliveryItem>
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default DeliveryCollections; 