import icondesgin from '../assets/images/icon-design.svg';
import icondev from '../assets/images/icon-dev.svg';
import iconapp from '../assets/images/icon-app.svg';
import iconphoto from '../assets/images/icon-photo.svg';
import avatar1 from '../assets/images/avatar-1.png';
import avatar2 from '../assets/images/avatar-2.png';
import avatar3 from '../assets/images/avatar-3.png';
import avatar4 from '../assets/images/avatar-4.png';
import logo1 from '../assets/images/logo-1-color.png';
import logo2 from '../assets/images/logo-2-color.png';
import logo3 from '../assets/images/logo-3-color.png';
import logo4 from '../assets/images/logo-4-color.png';
import logo5 from '../assets/images/logo-5-color.png';
import logo6 from '../assets/images/logo-6-color.png';
import { IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline } from 'react-icons/io5';
export { data, testimonialsData, logo,infoTile};

let data = [{
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level.",
    image: icondev,
    button: "More"
},
{
    title: "Web Development",
    description: "High-quality development of sites at the professional level.",
    image: icondesgin,
    button: "help"
}, {
    title: "Mobile Apps",
    description: "Professional development of applications for iOS and Android.",
    image: iconapp,
    button: "more"
}, {
    title: "Photography",
    description: "I make high-quality photos of any category at a professional level.",
    image: iconphoto,
    button: "help"
}];
let testimonialsData = [{
    title: "Daniel lewis",
    description: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    image: avatar1
},
{
    title: "Jessica miller",
    description: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    image: avatar2
}, {
    title: "Henry william",
    description: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    image: avatar3
}, {
    title: "Emily evans",
    description: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    image: avatar4
},]

let logo = [logo1, logo2, logo3, logo4, logo5, logo6];


  let infoTile=[{
    title:"Email",
    link: "durraniabdullah@gmail.com",
    image: IoMailOutline
  },
  {
    title:"Phone",
    link: "+92 308 232323",
    image: IoPhonePortraitOutline
  },{
    title:"Birthday",
    link: "June 23, 1982",
    image: IoCalendarOutline
  },{
    title:"Location",
    link: "Sacramento, California, USA",
    image: IoLocationOutline
  },]