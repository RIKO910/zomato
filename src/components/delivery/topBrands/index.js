import React from 'react';
import Slider from 'react-slick';
import NextArrow from '../../common/crousel/nextArrow';
import PrevArrow from '../../common/crousel/prevArrow';
import './topBrands.css'
const topBrandsList =[
    {
        id:1,
        time:"35 min",
        cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAzW8gxri3KgkTsCvkt2BMJ5JlY0XUKxFLg&usqp=CAU"
    },
    {
        id:2,
        time:"35 min",
        cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAzW8gxri3KgkTsCvkt2BMJ5JlY0XUKxFLg&usqp=CAU"
    },
    {
        id:3,
        time:"35 min",
        cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAzW8gxri3KgkTsCvkt2BMJ5JlY0XUKxFLg&usqp=CAU"
    },
    {
        id:4,
        time:"35 min",
        cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAzW8gxri3KgkTsCvkt2BMJ5JlY0XUKxFLg&usqp=CAU"
    },
    {
        id:5,
        time:"35 min",
        cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAzW8gxri3KgkTsCvkt2BMJ5JlY0XUKxFLg&usqp=CAU"
    },
]
const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PrevArrow></PrevArrow>
  };
const TopBrands = () => {
    return (
        <div className='top-brands max-width'>
            <div className='collection-title'> 
                Top brands for you
            </div>
            <Slider {...settings}>
                {topBrandsList.map((brand)=>{
                    return <div>
                        <div className='top-brands-cover'>
                            <img src={brand.cover} className="top-brands-image" alt={brand.time}/>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    );
};

export default TopBrands;