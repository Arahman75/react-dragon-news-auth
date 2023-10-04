import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import Qzone1 from '../../assets/qZone1.png';
import Qzone2 from '../../assets/qZone2.png';
import Qzone3 from '../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-4 mb-4'>
                <h2 className='text-2xl'>Login</h2>
                <button className="btn btn-outline">
                    <FaGoogle></FaGoogle>Login with Google
                </button>
                <button className="btn btn-outline">
                    <FaGithub></FaGithub>Login with Github
                </button>
            </div>
            <div className='p-4 mb-4'>
                <h2 className='text-2xl mb-4'>Find Us On</h2>
                <a href='/' className="border rounded-t-lg flex items-center  p-3">
                    <FaFacebook className='mr-3'></FaFacebook>Facebook
                </a>
                <a href='/' className="border-x flex items-center p-3">
                    <FaTwitter className='mr-3'></FaTwitter>Facebook
                </a>
                <a href='/' className="border rounded-b-lg flex items-center p-3">
                    <FaInstagram className='mr-3'></FaInstagram>Facebook
                </a>
            </div>
            {/* // Q zone */}
            <div className='p-4 mb-4'>
                <h2 className='text-2xl mb-4'>Q-Zone</h2>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;