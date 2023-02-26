import React from 'react';
import {Link as ReactLink} from "react-router-dom"
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
            <Box className='room'   >
            <Heading as='h2' textAlign={'left'}  >Shop Furniture</Heading>

            <ReactLink   to='/furniture' >
                <Box className='room_card'>
                    <Box>
                        <Image src="https://ii3.pepperfry.com/media/catalog/product/f/i/494x544/fidel-1-seater-velvet-sofa-in-fossil-grey-colour-by-casacraft-fidel-1-seater-velvet-sofa-in-fossil-g-sdksib.jpg" alt="" />
                        <p>Sofas <span>&#10140;</span></p>
                    </Box>
                    <Box>
                        <Image src="https://ii2.pepperfry.com/media/catalog/product/c/l/494x544/classic-xxxl-filled-bean-bag-in-christmas-tree-multicolour-print-by-sattva-classic-xxxl-filled-bean--ia1iuw.jpg" alt="" />
                        <p>Bean Bags <span>&#10140;</span></p>
                    </Box>
                    <Box>
                        <Image src="https://ii1.pepperfry.com/media/catalog/product/s/i/494x544/siramika-solid-wood-sofa-cum-bed-in-honey-oak-finish-by-mudramark-siramika-solid-wood-sofa-cum-bed-i-ukkwpo.jpg" alt="" />
                        <p>Sofa Cum Bed <span>&#10140;</span></p>
                    </Box>
                    <Box>
                        <Image src="https://ii3.pepperfry.com/media/catalog/product/i/m/494x544/imperial-lhs-l-shape-sofa-cum-bed-in-dark-grey-colour-by-adorn-homez-imperial-lhs-l-shape-sofa-cum-b-fjlsct.jpg" alt="" />
                        <p>Sofa Set <span>&#10140;</span></p>
                    </Box>
                </Box>
                </ReactLink>
            </Box>

      
            <Box className='deal'>
                <Heading as='h2'   >Shop Home Deco</Heading>
                <ReactLink  to="/homedeco" >
                <Box className='deal_card'>
                    <Box>
                        <Image src="https://ii1.pepperfry.com/media/catalog/product/s/e/800x880/set-of-2-blue-cylindrical-glass-vase-by-tayhaa-set-of-2-blue-cylindrical-glass-vase-by-tayhaa-wwpcq2.jpg" alt="" />
                        <h4>For ₹79 at 80% Off</h4>
                        <p>Flower Pots</p>
                    </Box>
                    <Box>
                        <Image src="https://ii1.pepperfry.com/media/catalog/product/m/u/800x880/multicolour-polyresin-2-inches-monk-buddha-idol-set-of-4-by-tied-ribbons-multicolour-polyresin-2-inc-qae9rb.jpg" alt="" />
                        <h4>For ₹119 at 91% Off</h4>
                        <p>Characters</p>
                        <p></p>
                    </Box>
                    <Box>
                        <Image src="https://ii1.pepperfry.com/media/catalog/product/s/i/800x880/single-pc--black-jute-clip-photo-frame-by-art-street-single-pc--black-jute-clip-photo-frame-by-art-s-rgv8aq.jpg" alt="" />
                        <h4>For ₹349 at 65% Off</h4>
                        <p>Hanging Chips</p>
                    </Box>
                    <Box>
                        <Image src="https://ii1.pepperfry.com/media/catalog/product/h/e/800x880/healthy-yoga-pose-figurine-in-raisin-by-tayhaa-healthy-yoga-pose-figurine-in-raisin-by-tayhaa-e9kvje.jpg" alt="" />
                        <h4> For ₹129 at 86% Off</h4>
                        <p>Yoga Poses</p>
                    </Box>
                    
                </Box>
                </ReactLink>
            </Box>
            <Box className='stat21'>
                <Image src="https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner1x_1901.jpg" alt="" />
            </Box>
            <Box className='insta_card'>
                <h2>Inspire And Get Inspired</h2>
                <MultipleSlidesExample />
            </Box>
           
            <Box className='deal'>
                <Heading as='h2'   >Shop Lighting</Heading>
                <ReactLink  to="/lampslighting" >
                <Box className='deal_card'>
                    <Box>
                        <Image src="https://ii1.pepperfry.com/media/catalog/product/m/u/800x880/multicolor-led-string-lights-by-xergy-multicolor-led-string-lights-by-xergy-emyjlo.jpg" alt="" />
                        <h4>For ₹79 at 80% Off</h4>
                        <p>Vertical Ligth</p>
                    </Box>
                    <Box>
                        <Image src="https://ii1.pepperfry.com/media/catalog/product/x/e/800x880/xergy-battery-powered-copper-wire-led-string-lights-for-decoration--diwali--christmas-tree-decoratio-yg8vnb.jpg" alt="" />
                        <h4>For ₹119 at 91% Off</h4>
                        <p>Ligth Thread</p>
                        <p></p>
                    </Box>
                    <Box>
                        <Image src="https://ii1.pepperfry.com/media/catalog/product/b/r/800x880/brown-metal-wall-light-by-foziq-brown-metal-wall-light-by-foziq-bplykx.jpg" alt="" />
                        <h4>For ₹349 at 65% Off</h4>
                        <p>Geometric Lighting</p>
                    </Box>
                    <Box>
                        <Image src="https://ii1.pepperfry.com/media/catalog/product/g/o/800x880/gold-metal-wall-light-by-foziq-gold-metal-wall-light-by-foziq-rqyzdi.jpg" alt="" />
                        <h4> For ₹129 at 86% Off</h4>
                        <p>Fixed Wall Light</p>
                    </Box>
                    
                </Box>
                </ReactLink>
            </Box>
        </>
    )
}

