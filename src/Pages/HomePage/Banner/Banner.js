import React from 'react';
import banner from '../../../img/banner.webp';
import { Box } from '@mui/system';


const Banner = () => {
    const backgroundStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        width: '100%',
        height: '90vh',
        marginBottom: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div>
            <Box style={backgroundStyle}>
                {/* <h1 className="text-white" style={{ fontSize: "90px", textShadow: "5px 5px 15px black" }}>The Gift <br /> Of The Party </h1> */}
            </Box>
        </div>
    );
};

export default Banner;