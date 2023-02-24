import React from 'react';

import Data from "../Data";
import style from "../Components/Style/style.css"

import Slider from '../Components/Slider';
import { MultipleSlidesExample } from '../Components/Slidebar';
import { Box, Heading, Image } from '@chakra-ui/react';

export const Home = () => {
    
    return (
        <>

            <Box className="top">
                <Box className='sliding'>
                    <Slider start={Data.banner.start} />
                </Box>
                <Box className='stat20'>
                    <Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/web_rhs_02022023_1.jpg" alt="" />
                </Box>
            </Box>
            <Box className='ads'>
                <Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner_2202.jpg" alt="" />
            </Box>
            <Box className='room'>
                <h2>Shop by Room</h2>
                <Box className='room_card'>
                    <Box>
                        <Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_1.jpg" alt="" />
                        <p>Shop Living Room <span>&#10140;</span></p>
                    </Box>
                    <Box>
                        <Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_2.jpg" alt="" />
                        <p>Shop Bedroom <span>&#10140;</span></p>
                    </Box>
                    <Box>
                        <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_3.jpg" alt="" />
                        <p>Shop Dining Room <span>&#10140;</span></p>
                    </Box>
                    <Box>
                        <Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_4.jpg" alt="" />
                        <p>Shop Study Room <span>&#10140;</span></p>
                    </Box>
                </Box>
            </Box>

            
            <Box className='deal'>
                <Heading as='h2'   >What The Fry Deal</Heading>
                <Box className='deal_card'>
                    <Box>
                        <Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/Home_Deal19_web_19012023_1.jpg" alt="" />
                        <h4>For ₹79 at 80% Off</h4>
                        <p>Cotton Hand Towel Set</p>
                    </Box>
                    <Box>
                        <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Home_Deal19_web_19012023_2.jpg" alt="" />
                        <h4>For ₹119 at 91% Off</h4>
                        <p>Classic Wall Clock</p>
                        <p></p>
                    </Box>
                    <Box>
                        <Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Home_Deal19_web_19012023_3.jpg" alt="" />
                        <h4>For ₹349 at 65% Off</h4>
                        <p>Geometric Bedding</p>
                    </Box>
                    <Box>
                        <Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/Home_Deal19_web_19012023_4.jpg" alt="" />
                        <h4> For ₹129 at 86% Off</h4>
                        <p>Wall Shelf + Key Holder</p>
                    </Box>
                </Box>
            </Box>
            <Box className='stat21'>
                <Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner1x_1901.jpg" alt="" />
            </Box>
            <Box className='insta_card'>
                <h2>Inspire And Get Inspired</h2>
                <MultipleSlidesExample />
            </Box>
            <Box className='trend'>
                <h2>Trends In Furniture And Decor</h2>
                <Box className='trend_card'>
                    <Box>
                        <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section6_web_04012023_1.jpg" alt="" />
                        <h4>Pantone Color Sofas</h4>
                        <p>Explore Starting ₹10393 <span>&#10140;</span></p>
                    </Box>
                    <Box>
                        <Image src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section6_web_04012023_2.jpg" alt="" />
                        <h4>Gentle Light Shelf Lamp</h4>
                        <p>Explore Starting ₹1999 <span>&#10140;</span></p>
                        <p></p>
                    </Box>
                    <Box
                    >
                        <Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section6_web_04012023_3.jpg" alt="" />
                        <h4>Maximalist Pieces By Chumbak</h4>
                        <p>Explore Starting ₹4495 <span>&#10140;</span></p>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

