import React from 'react'
import FBIcon from '../assets/socialIcons/FBIcon.png'
import YoutubeIcon  from "../assets/socialIcons/YoutubeIcon.png"
import InstaIcon from "../assets/socialIcons/InstaIcon.png"
import MediumIcon from "../assets/socialIcons/MediumIcon.png"
import LinkdlnIcon from "../assets/socialIcons/LinkdlnIcon.png"
import QuoraIcon from "../assets/socialIcons/QuoraIcon.png"
import BloggerIcon from "../assets/socialIcons/BloggerIcon.png"
const SocialIcon=()=> {
  return (
   <div className="w-[600px] h-[50px] flex ">
  {/* Facebook*/}
  <div className="flex items-center gap-[16px]">
    {/* Icon */}
    <div className="w-[50px] h-[50px] ">
         <a
      href="https://www.facebook.com/profile.php?id=61565947096778"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={FBIcon} alt="Facebook" className="w-full h-full object-cover" />
      </a>
    </div>
    {/* Divider */}
    <div className="h-[50px] w-[1px] bg-white opacity-25 mx-[10px]"></div>
  </div>



{/* Youtube */}
  <div className="flex items-center gap-[16px]">
    <div className="w-[50px] h-[50px]">
         <a
      href="https://www.youtube.com/@trackpi"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={YoutubeIcon} alt="Youtube" className="w-full h-full object-cover" />
      </a>
    </div>
    <div className="h-[50px] w-[1px] bg-white opacity-25 mx-[10px]"></div>
  </div>



{/* instagram */}
  <div className="flex items-center gap-[16px]">
    <div className="w-[50px] h-[50px]">
           <a
      href="https://www.instagram.com/trackpi_official?igsh=YmwyaHpzYXBueWJz"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={InstaIcon} alt="Youtube" className="w-full h-full object-cover" />
      </a>
    </div>
    <div className="h-[50px] w-[1px] bg-white opacity-25 mx-[10px]"></div>
  </div>

{/* medium */}

  <div className="flex items-center gap-[16px]">
    <div className="w-[50px] h-[50px]">
            <a
      href="https://medium.com/@trackpi"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={MediumIcon} alt="Youtube" className="w-full h-full object-cover" />
      </a>
    </div>
    <div className="h-[50px] w-[1px] bg-white opacity-25 mx-[10px]"></div>
  </div>


{/* linkdln */}
  <div className="flex items-center gap-[16px]">
    <div className="w-[50px] h-[50px]">
             <a
      href="https://www.linkedin.com/company/trackpi-private-limited/?viewAsMember=true"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={LinkdlnIcon} alt="Youtube" className="w-full h-full object-cover" />
      </a>
    </div>
    <div className="h-[50px] w-[1px] bg-white opacity-25 mx-[10px]"></div>
  </div>

{/* Quora */}
  <div className="flex items-center gap-[16px]">
    <div className="w-[50px] h-[50px]">
               <a
      href="https://www.linkedin.com/company/trackpi-private-limited/?viewAsMember=true"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={QuoraIcon} alt="Youtube" className="w-full h-full object-cover" />
      </a>
    </div>
    <div className="h-[50px] w-[1px] bg-white opacity-25 mx-[10px]"></div>
  </div>

{/* blogger */}
  <div className="flex items-center gap-[16px]">
    <div className="w-[50px] h-[50px]">
                 <a
      href="https://trackpi.blogspot.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={BloggerIcon} alt="Youtube" className="w-full h-full object-cover" />
      </a>
    </div>
    <div className="h-[50px] w-[1px] bg-white opacity-25 mx-[10px]"></div>
  </div>
</div>
  )
}

export default SocialIcon
