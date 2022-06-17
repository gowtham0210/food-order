import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AppleIcon from '@mui/icons-material/Apple';
import "../styles/Footer.css"

function Footer() {
    return ( 
        <div className='footer'>
            <div className='socialMedia'>
                 <AppleIcon />
                 <InstagramIcon />
                 <TwitterIcon />
                 <WhatsAppIcon />
                 
            </div>
            <p>&copy; 2022 Indianfood.com</p>

        </div>


     );
}

export default Footer;