import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import bgImg from '../../assets/img/footerCover.png';

const Footer = () => {
    return ( 
        <footer className="mt-auto w-full">  {/* ← این خط رو اضافه کنید */}
            <div 
                className="bg-cover bg-[position:0%_15%] relative w-full"
                style={{backgroundImage: `url(${bgImg})`}}
            >
                <div className="flex py-20 bg-purple-900/50 justify-center items-center">
                    <div className="text-center px-4">
                        <h2 className='font-bold text-xl text-white'>
                            join now with your email address and choose your plan to get started
                        </h2>
                        <div className="flex mt-5 justify-center items-center gap-4 flex-wrap">
                            <input 
                                className="pl-2 border text-white placeholder:text-white outline-none border-white rounded-sm w-64 py-2" 
                                placeholder="email address"
                            />
                            <button className='bg-purple-500 py-2 px-8 rounded-tr-2xl rounded-bl-2xl'>
                                join now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='bg-black'>
                <div className='md:flex gap-24 py-20 border-b border-white px-4 md:px-16'>
                    <div className='flex-1 text-white'>
                        <h1 className='mb-10 text-4xl'>
                            <span className='text-primary font-bold text-5xl'>M</span>eta movie
                        </h1>
                        <p className='text-sm'>
                            Lorem Ipsum is placeholder text used in printing, typesetting,
                            and digital design to simulate content placeholder text used in printing.
                        </p>
                        <div className='flex gap-6 pt-4 pb-8 md:pt-10'>
                            <FaTwitter className='rounded-full text-2xl cursor-pointer' />
                            <FaInstagram className='text-2xl cursor-pointer' /> 
                            <FaFacebook className='text-2xl cursor-pointer' />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
                        <div>
                            <h1 className="text-lg font-bold mt-10 mb-2 text-white">Company</h1>
                            <ul className="space-y-2">
                                <li><a className="cursor-pointer text-white hover:text-blue-600">About Us</a></li>
                                <li><a className="cursor-pointer text-white hover:text-blue-600">Careers</a></li>
                                <li><a className="cursor-pointer text-white hover:text-blue-600">Press</a></li>
                                <li><a className="cursor-pointer text-white hover:text-blue-600">Investor</a></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold mt-10 mb-2 text-white">Help & Support</h1>
                            <ul className="space-y-2">
                                <li><a className="cursor-pointer text-white hover:text-blue-600">Help Center</a></li>
                                <li><a className="cursor-pointer text-white hover:text-blue-600">FAQ</a></li>
                                <li><a className="cursor-pointer text-white hover:text-blue-600">Support</a></li>
                                <li><a className="cursor-pointer text-white hover:text-blue-600">Account</a></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold mt-10 mb-2 text-white">Legal</h1>
                            <ul className="space-y-2">
                                <li><a className="cursor-pointer text-white hover:text-blue-600">Term of Service</a></li>
                                <li><a className="cursor-pointer text-white hover:text-blue-600">Privacy</a></li>
                                <li><a className="cursor-pointer text-white hover:text-blue-600">Cookies</a></li>
                                <li><a className="cursor-pointer text-white hover:text-blue-600">Accessibility</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='py-10 text-white text-center'>
                    © 2026 meta movie. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;