import React from 'react';
function Discoverus() {
  return (
// non responsive code
    // <div className="main-wrapper">
    //   <div className="min-h-screen flex items-center justify-center bg-[url('/bg.png')] bg-cover bg-center">

    //     <div className="leftside mt-48 ml-24 w-[768px] h-[611px]">
    //       <div className="header w-[768px] h-[147px] flex flex-col justify-between p-0.5 box-border">
    //         <div className="h1div w-[628px] h-[73px]">
    //           <h1 className="text-6xl font-bold text-white">
    //             Welcome to <span className="text-yellow-600">TrackPi</span>
    //           </h1>
    //         </div>
    //         <div className="h2div w-[700px] h-[49px]">
    //           <h2 className="text-[42px] mt-2 font-raleway font-semibold whitespace-nowrap text-white">
    //             Your strategic Growing partner
    //           </h2>
    //         </div>
    //       </div>

    //       <p className="text-[22px] mt-5 leading-relaxed font-roboto font-medium text-white">
    //         Trackpi is one of the best business consulting firms in Kerala. We have a highly experienced team that develops strategies to promote growth and development. With our expert consulting services, we help businesses thrive in a competitive environment.
    //       </p>

    //       <p className="text-[22px] mt-5 font-roboto font-medium text-white">
    //         Trackpi is building Kerala’s largest freelance community, where anyone can join instantly upon completing their freelance course. Focused on innovation and client-centric excellence, Trackpi empowers businesses and individuals for sustainable success.
    //       </p>

    //       <div className="button-group mt-7 flex gap-5">
    //         <button className="bg-yellow-600 px-6 py-3 rounded-md font-bold text-white hover:bg-yellow-700 transition">
    //           Let's Connect
    //         </button>
    //         <button className="bg-yellow-600 px-6 py-3 rounded-md font-bold text-white hover:bg-yellow-700 transition">
    //           Company Brochure
    //         </button>
    //       </div>
    //     </div>

    //     <div className="rightside w-[568px] h-[611px] mt-48 flex items-center justify-center overflow-hidden">
    //       <div className="image-cluster relative w-full h-full">

    //         <img
    //           src="/img3.png"
    //           alt="Person 3"
    //           className="circle-img absolute top-[230px] left-[250px] w-[308px] h-[300px] rounded-[200px] border-4 border-transparent object-cover z-[10]"
    //         />


    //         <img
    //           src="/img2.png"
    //           alt="Person 2"
    //           className="circle-img absolute top- left-[250px] w-[308px] h-[300px] rounded-[200px] border-4 border-transparent object-cover z-[20]"
    //         />


    //         <img
    //           src="/img1.png"
    //           alt="Person 1"
    //           className="circle-img absolute top-[110px] right-[240px] w-[308px] h-[300px] rounded-[200px] border-4 border-transparent object-cover z-[30]"
    //         />
    //       </div>

    //     </div>



    //   </div>

    //   <div className="w-[1512px] h-[50px] mx-auto my-8"></div>


    //   <div className="w-[1512px] h-[300px] relative">
    //     <h2 className="text-4xl font-bold text-orange-400 mb-4 text-center pt-6">
    //       Our Social Networks
    //     </h2>

    //     <div className="relative w-full h-[100px] flex justify-center mt-20 ml-10">
    //       <div className="relative w-[1200px] h-[123px] flex flex-wrap gap-[12.3px]">
    //         {/* Facebook */}
    //         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    //           <div className="
    //     relative flex items-center
    //     w-[123px] h-[123px]
    //     bg-black
    //     rounded-full
    //     overflow-hidden
    //     transition-all duration-300
    //     group
    //     hover:w-[250px] hover:rounded-full
    //     hover:bg-white
    //     hover:border-4 hover:border-blue-600
    //     cursor-pointer
    //   ">
    //             <div className="
    //       w-[123px] h-[123px]
    //       flex items-center justify-center
    //       bg-black group-hover:bg-blue-600
    //       rounded-full
    //       transition-all duration-300
    //       translate-x-[29px] group-hover:translate-x-0
    //     ">
    //               <img
    //                 src="/fbvector.png"
    //                 alt="Facebook"
    //                 className="
    //           w-[60px] h-[60px] object-contain
    //           transition-all duration-300
    //         "
    //               />
    //             </div>
    //             <span className="
    //       ml-0
    //       text-blue-600
    //       font-medium
    //       opacity-0
    //       group-hover:opacity-100
    //       group-hover:ml-4
    //       transition-all duration-300
    //     ">
    //               Facebook
    //             </span>
    //           </div>
    //         </a>

    //         {/* Instagram */}
    //         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    //           <div className="
    //     relative flex items-center
    //     w-[123px] h-[123px]
    //     bg-black
    //     rounded-full
    //     overflow-hidden
    //     transition-all duration-300
    //     group
    //     hover:w-[250px] hover:rounded-full
    //     hover:bg-white
    //     hover:border-4 hover:border-pink-600
    //     cursor-pointer
    //   ">
    //             <div className="
    //       w-[123px] h-[123px]
    //       flex items-center justify-center
    //       bg-black group-hover:bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500
    //       rounded-full
    //       transition-all duration-300
    //       translate-x-[35px] group-hover:translate-x-0
    //     ">
    //               <img
    //                 src="/instavector.png"
    //                 alt="Instagram"
    //                 className="
    //           w-[60px] h-[60px] object-contain
    //           transition-all duration-300
    //         "
    //               />
    //             </div>
    //             <span className="
    //       ml-0
    //       bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500
    //       bg-clip-text text-transparent
    //       font-medium
    //       opacity-0
    //       group-hover:opacity-100
    //       group-hover:ml-4
    //       transition-all duration-300
    //     ">
    //               Instagram
    //             </span>
    //           </div>
    //         </a>

    //         {/* Youtube */}
    //         <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    //           <div className="
    //     relative flex items-center
    //     w-[123px] h-[123px]
    //     bg-black
    //     rounded-full
    //     overflow-hidden
    //     transition-all duration-300
    //     group
    //     hover:w-[250px] hover:rounded-full
    //     hover:bg-white
    //     hover:border-4 hover:border-red-600
    //     cursor-pointer
    //   ">
    //             <div className="
    //       w-[123px] h-[123px]
    //       flex items-center justify-center
    //       bg-black group-hover:bg-red-600
    //       rounded-full
    //       transition-all duration-300
    //       translate-x-[30px] group-hover:translate-x-0
    //     ">
    //               <img
    //                 src="/ytvector.png"
    //                 alt="Youtube"
    //                 className="
    //           w-[60px] h-[60px] object-contain
    //           transition-all duration-300
    //         "
    //               />
    //             </div>
    //             <span className="
    //       ml-0
    //       text-red-600
    //       font-medium
    //       opacity-0
    //       group-hover:opacity-100
    //       group-hover:ml-4
    //       transition-all duration-300
    //     ">
    //               Youtube
    //             </span>
    //           </div>
    //         </a>

    //         {/* Trackpi */}
    //         <a href="https://trackpi.example.com" target="_blank" rel="noopener noreferrer">
    //           <div className="
    //     relative flex items-center
    //     w-[123px] h-[123px]
    //     bg-black
    //     rounded-full
    //     overflow-hidden
    //     transition-all duration-300
    //     group
    //     hover:w-[250px] hover:rounded-full
    //     hover:bg-white
    //     hover:border-4 hover:border-yellow-600
    //     cursor-pointer
    //   ">
    //             <div className="
    //       w-[123px] h-[123px]
    //       flex items-center justify-center
    //       bg-black group-hover:bg-yellow-600
    //       rounded-full
    //       transition-all duration-300
    //       translate-x-[20px] group-hover:translate-x-0
    //     ">
    //               <img
    //                 src="/trackvector.png"
    //                 alt="Trackpi"
    //                 className="
    //           w-[60px] h-[60px] object-contain
    //           transition-all duration-300
    //         "
    //               />
    //             </div>
    //             <span className="
    //       ml-0
    //       text-yellow-600
    //       font-medium
    //       opacity-0
    //       group-hover:opacity-100
    //       group-hover:ml-4
    //       transition-all duration-300
    //     ">
    //               Trackpi
    //             </span>
    //           </div>
    //         </a>

    //         {/* Linkedin */}
    //         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    //           <div className="
    //     relative flex items-center
    //     w-[123px] h-[123px]
    //     bg-black
    //     rounded-full
    //     overflow-hidden
    //     transition-all duration-300
    //     group
    //     hover:w-[250px] hover:rounded-full
    //     hover:bg-white
    //     hover:border-4 hover:border-blue-400
    //     cursor-pointer
    //   ">
    //             <div className="
    //       w-[123px] h-[123px]
    //       flex items-center justify-center
    //       bg-black group-hover:bg-blue-400
    //       rounded-full
    //       transition-all duration-300
    //       translate-x-[28px] group-hover:translate-x-0
    //     ">
    //               <img
    //                 src="/linkedvector.png"
    //                 alt="Linkedin"
    //                 className="
    //           w-[60px] h-[60px] object-contain
    //           transition-all duration-300
    //         "
    //               />
    //             </div>
    //             <span className="
    //       ml-0
    //       text-blue-400
    //       font-medium
    //       opacity-0
    //       group-hover:opacity-100
    //       group-hover:ml-4
    //       transition-all duration-300
    //     ">
    //               Linkedin
    //             </span>
    //           </div>
    //         </a>

    //         {/* Medium */}
    //         <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
    //           <div className="
    //     relative flex items-center
    //     w-[123px] h-[123px]
    //     bg-black
    //     rounded-full
    //     overflow-hidden
    //     transition-all duration-300
    //     group
    //     hover:w-[250px] hover:rounded-full
    //     hover:bg-white
    //     hover:border-4 hover:border-black-600
    //     cursor-pointer
    //   ">
    //             <div className="
    //       w-[123px] h-[123px]
    //       flex items-center justify-center
    //       bg-black group-hover:bg-black-600
    //       rounded-full
    //       transition-all duration-300
    //       translate-x-[20px] group-hover:translate-x-0
    //     ">
    //               <img
    //                 src="/mevector.png"
    //                 alt="Medium"
    //                 className="
    //           w-[60px] h-[60px] object-contain
    //           transition-all duration-300
    //         "
    //               />
    //             </div>
    //             <span className="
    //       ml-0
    //       text-black
    //       font-medium
    //       opacity-0
    //       group-hover:opacity-100
    //       group-hover:ml-4
    //       transition-all duration-300
    //     ">
    //               Medium
    //             </span>
    //           </div>
    //         </a>

    //         {/* Quora */}
    //         <a href="https://www.quora.com" target="_blank" rel="noopener noreferrer">
    //           <div className="
    //     relative flex items-center
    //     w-[123px] h-[123px]
    //     bg-black
    //     rounded-full
    //     overflow-hidden
    //     transition-all duration-300
    //     group
    //     hover:w-[250px] hover:rounded-full
    //     hover:bg-white
    //     hover:border-4 hover:border-red-800
    //     cursor-pointer
    //   ">
    //             <div className="
    //       w-[123px] h-[123px]
    //       flex items-center justify-center
    //       bg-black group-hover:bg-red-800
    //       rounded-full
    //       transition-all duration-300
    //       translate-x-[20px] group-hover:translate-x-0
    //     ">
    //               <img
    //                 src="/Quoravector.png"
    //                 alt="Quora"
    //                 className="
    //           w-[60px] h-[60px] object-contain
    //           transition-all duration-300
    //         "
    //               />
    //             </div>
    //             <span className="
    //       ml-0
    //       text-red-800
    //       font-medium
    //       opacity-0
    //       group-hover:opacity-100
    //       group-hover:ml-4
    //       transition-all duration-300
    //     ">
    //               Quora
    //             </span>
    //           </div>
    //         </a>

    //         {/* Blogger */}
    //         <a href="https://www.blogger.com" target="_blank" rel="noopener noreferrer">
    //           <div className="
    //     relative flex items-center
    //     w-[123px] h-[123px]
    //     bg-black
    //     rounded-full
    //     overflow-hidden
    //     transition-all duration-300
    //     group
    //     hover:w-[250px] hover:rounded-full
    //     hover:bg-white
    //     hover:border-4 hover:border-orange-400
    //     cursor-pointer
    //   ">
    //             <div className="
    //       w-[123px] h-[123px]
    //       flex items-center justify-center
    //       bg-black group-hover:bg-orange-400
    //       rounded-full
    //       transition-all duration-300
    //       translate-x-[20px] group-hover:translate-x-0
    //     ">
    //               <img
    //                 src="/blogvector.png"
    //                 alt="Blogger"
    //                 className="
    //           w-[60px] h-[60px] object-contain
    //           transition-all duration-300
    //         "
    //               />
    //             </div>
    //             <span className="
    //       ml-0
    //       text-orange-300
    //       font-medium
    //       opacity-0
    //       group-hover:opacity-100
    //       group-hover:ml-4
    //       transition-all duration-300
    //     ">
    //               Blogger
    //             </span>
    //           </div>
    //         </a>
    //       </div>
    //     </div>


    //     <div className="w-[1512px] h-[10px] mx-auto my-8"></div>
    //   </div>



    //   <div className="relative w-[1512px] h-[1856px]">


    //     <div
    //       className="absolute inset-0 bg-cover bg-center"
    //       style={{
    //         backgroundImage: "url('/chessmain.png')",
    //         filter: 'brightness(25%)',
    //         zIndex: 0,
    //       }}
    //     />


    //     <div className="relative z-10 top-[125px] left-[70px] w-[1372px] h-[1722px]">
    //       <div className="w-full flex flex-col gap-[100px] p-0">


    //         <div className="w-full flex justify-between gap-[28px]">
    //           <div className="w-[762px] flex flex-col gap-[28px]">
    //             <h2 className="w-full flex justify-center items-center text-[46px] font-bold font-roboto text-white leading-none whitespace-nowrap">
    //               <span>Our Commitment</span>
    //               <span className="ml-2 font-raleway font-semibold text-orange-400">– Our Mission</span>
    //             </h2>
    //             <p className="text-white text-[24px] font-roboto font-medium leading-[40px] text-justify capitalize">
    //               Trackpi Private Limited Is Dedicated To Empowering Businesses By Providing Strategic Insights, Innovative Solutions, And Hands-On Support To Drive Sustainable Growth And Operational Excellence. Through Services Such As Market Research, Digital Strategy, And Sales Outsourcing, Trackpi Aims To Enhance Business Performance, Optimize Processes, And Build Long-Term Partnerships. The Company Is Committed To Delivering Tailored Strategies That Help Businesses Adapt, Compete, And Thrive In A Dynamic Marketplace. Additionally, Trackpi Is Focused On Nurturing Talent By Fostering Kerala’s Largest Freelance Community, Providing Aspiring Freelancers With The Skills And Opportunities To Succeed In The Digital Economy.
    //             </p>
    //           </div>
    //           <div className="w-[550px] h-[500px]">
    //             <img src="/chess img1.png" alt="Our Mission" className="w-full h-full object-cover rounded-md" />
    //           </div>
    //         </div>


    //         <div className="w-full flex justify-between gap-[60px]">
    //           <div className="w-[550px] h-[500px] rounded-[15px] overflow-hidden">
    //             <img src="/brick img.png" alt="Vision Visual" className="w-full h-full object-cover" />
    //           </div>
    //           <div className="w-[762px] flex flex-col gap-[28px] items-center">
    //             <h2 className="text-[46px] font-bold font-roboto text-white flex justify-center items-center whitespace-nowrap">
    //               <span>Our Aspiration</span>
    //               <span className="ml-2 font-raleway font-semibold text-orange-400">– Our Vision</span>
    //             </h2>
    //             <p className="text-white text-[24px] font-roboto font-medium leading-[40px] text-justify capitalize">
    //               Trackpi Envisions Itself As A Leading Strategic Growth Partner, Helping Businesses Navigate Challenges And Achieve Long-Term Success Through Innovation, Expertise, And Client-Focused Solutions. The Company Strives To Be At The Forefront Of Business Transformation, Continuously Evolving To Meet Market Demands And Create Impactful Solutions. By Fostering A Collaborative And Knowledge-Driven Ecosystem, Trackpi Aims To Empower Businesses And Individuals Alike, Positioning Itself As A Key Player In Driving Economic Growth And Professional Development Across Industries.
    //             </p>
    //           </div>
    //         </div>


    //         <div className="w-full flex justify-between gap-[60px]">
    //           <div className="w-[742px] flex flex-col justify-start gap-[28px]">
    //             <h2 className="text-[46px] font-bold font-roboto text-white flex justify-center items-center capitalize">
    //               <span className="mr-2">Our Standards</span>
    //               <span className="font-raleway font-semibold text-orange-400">– Our Values</span>
    //             </h2>
    //             <ul className="list-disc pl-6 text-white font-roboto text-[24px] leading-[36px] capitalize text-justify space-y-2">
    //               <li><strong>Empowerment</strong> – Helping businesses grow with strategic insights and support.</li>
    //               <li><strong>Innovation</strong> – Encouraging new technologies and creative solutions.</li>
    //               <li><strong>Sustainability</strong> – Promoting responsible growth that benefits both people and the planet.</li>
    //               <li><strong>Client-Centric Excellence</strong> – Delivering tailored solutions with a focus on long-term success.</li>
    //               <li><strong>Community Development</strong> – Building Kerala’s largest freelance community and fostering talent.</li>
    //             </ul>
    //           </div>
    //           <div className="w-[570px] h-[500px]">
    //             <img src="/values img.png" alt="Our Values" className="w-full h-full object-cover rounded-[15px]" />
    //           </div>
    //         </div>

    //       </div>
    //     </div>

    //   </div>






    // </div>






    //     </div>



    //// Responsive code

    // <div className="main-wrapper">
    //   {/* Hero Section */}
    //   <div className="min-h-screen flex items-center justify-center bg-[url('/bg.png')] bg-cover bg-center px-4">
    //     {/* Left Side */}
    //     <div className="leftside mt-12 md:mt-48 ml-0 md:ml-24 w-full md:w-[768px] h-auto md:h-[611px]">
    //       <div className="header w-full md:w-[768px] h-auto md:h-[147px] flex flex-col justify-between p-0.5 box-border">
    //         <div className="h1div w-full md:w-[628px] h-auto">
    //           <h1 className="text-4xl md:text-6xl font-bold text-white">
    //             Welcome to <span className="text-yellow-600">TrackPi</span>
    //           </h1>
    //         </div>
    //         <div className="h2div w-full md:w-[700px] h-auto">
    //           <h2 className="text-2xl md:text-[42px] mt-2 font-raleway font-semibold whitespace-nowrap text-white">
    //             Your strategic Growing partner
    //           </h2>
    //         </div>
    //       </div>

    //       <p className="text-lg md:text-[22px] mt-5 leading-relaxed font-roboto font-medium text-white">
    //         Trackpi is one of the best business consulting firms in Kerala. We have a highly experienced team that develops strategies to promote growth and development. With our expert consulting services, we help businesses thrive in a competitive environment.
    //       </p>

    //       <p className="text-lg md:text-[22px] mt-5 font-roboto font-medium text-white">
    //         Trackpi is building Kerala’s largest freelance community, where anyone can join instantly upon completing their freelance course. Focused on innovation and client-centric excellence, Trackpi empowers businesses and individuals for sustainable success.
    //       </p>
    //       <div className="button-group mt-7 flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-5 w-full sm:w-auto">
    //         <button className="bg-yellow-600 px-4 md:px-6 py-3 rounded-md font-bold text-white hover:bg-yellow-700 transition whitespace-nowrap">
    //           Let's Connect
    //         </button>
    //         <button className="bg-yellow-600 px-4 md:px-6 py-3 rounded-md font-bold text-white hover:bg-yellow-700 transition whitespace-nowrap">
    //           Company Brochure
    //         </button>
    //       </div>

    //     </div>

    //     {/* Right Side */}
    //     <div className="rightside w-full md:w-[568px] h-auto md:h-[611px] mt-12 md:mt-48 flex items-center justify-center overflow-hidden">
    //       <div className="image-cluster relative w-full h-full">
    //         <img
    //           src="/img3.png"
    //           alt="Person 3"
    //           className="absolute top-[230px] left-[250px] w-[308px] h-[300px] rounded-full border-4 border-transparent object-cover z-[10]"
    //         />
    //         <img
    //           src="/img2.png"
    //           alt="Person 2"
    //           className="absolute top-0 left-[250px] w-[308px] h-[300px] rounded-full border-4 border-transparent object-cover z-[20]"
    //         />
    //         <img
    //           src="/img1.png"
    //           alt="Person 1"
    //           className="absolute top-[110px] right-[240px] w-[308px] h-[300px] rounded-full border-4 border-transparent object-cover z-[30]"
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   {/* Spacer */}
    //   <div className="w-full max-w-[1512px] h-[50px] mx-auto my-8"></div>

    //   {/* Social Section */}
    //   <div className="w-full max-w-[1512px] h-auto relative px-4">
    //     <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4 text-center pt-6">
    //       Our Social Networks
    //     </h2>

    //     <div className="relative w-full h-auto flex justify-center mt-10">
    //       <div className="relative w-full md:w-[1200px] h-auto flex flex-wrap gap-[12.3px] justify-center">
    //         {[
    //           {
    //             href: 'https://www.facebook.com',
    //             src: '/fbvector.png',
    //             label: 'Facebook',
    //             borderColor: 'blue-600',
    //             bgHover: 'bg-blue-600',
    //             textColor: 'text-blue-600'
    //           },
    //           {
    //             href: 'https://www.instagram.com',
    //             src: '/instavector.png',
    //             label: 'Instagram',
    //             borderColor: 'pink-600',
    //             bgHover: 'bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500',
    //             textColor: 'bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent'
    //           },
    //           {
    //             href: 'https://www.youtube.com',
    //             src: '/ytvector.png',
    //             label: 'Youtube',
    //             borderColor: 'red-600',
    //             bgHover: 'bg-red-600',
    //             textColor: 'text-red-600'
    //           },
    //           {
    //             href: 'https://trackpi.example.com',
    //             src: '/trackvector.png',
    //             label: 'Trackpi',
    //             borderColor: 'yellow-600',
    //             bgHover: 'bg-yellow-600',
    //             textColor: 'text-yellow-600'
    //           },
    //           {
    //             href: 'https://www.linkedin.com',
    //             src: '/linkedvector.png',
    //             label: 'Linkedin',
    //             borderColor: 'blue-400',
    //             bgHover: 'bg-blue-400',
    //             textColor: 'text-blue-400'
    //           },
    //           {
    //             href: 'https://medium.com',
    //             src: '/mevector.png',
    //             label: 'Medium',
    //             borderColor: 'black',
    //             bgHover: 'bg-black',
    //             textColor: 'text-black'
    //           },
    //           {
    //             href: 'https://www.quora.com',
    //             src: '/Quoravector.png',
    //             label: 'Quora',
    //             borderColor: 'red-800',
    //             bgHover: 'bg-red-800',
    //             textColor: 'text-red-800'
    //           },
    //           {
    //             href: 'https://www.blogger.com',
    //             src: '/blogvector.png',
    //             label: 'Blogger',
    //             borderColor: 'orange-400',
    //             bgHover: 'bg-orange-400',
    //             textColor: 'text-orange-300'
    //           }
    //         ].map((social, index) => (
    //           <a
    //             key={index}
    //             href={social.href}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <div
    //               className={`
    //           relative flex items-center
    //           w-[123px] h-[123px]
    //           bg-black
    //           rounded-full
    //           overflow-hidden
    //           transition-all duration-300
    //           group
    //           hover:w-[250px] hover:rounded-full
    //           hover:bg-white
    //           hover:border-4 hover:border-${social.borderColor}
    //           cursor-pointer
    //         `}
    //             >
    //               <div
    //                 className={`
    //             w-[123px] h-[123px]
    //             flex items-center justify-center
    //             bg-black group-hover:${social.bgHover}
    //             rounded-full
    //             transition-all duration-300
    //             translate-x-[30px] group-hover:translate-x-0
    //           `}
    //               >
    //                 <img
    //                   src={social.src}
    //                   alt={social.label}
    //                   className="w-[60px] h-[60px] object-contain transition-all duration-300"
    //                 />
    //               </div>
    //               <span
    //                 className={`
    //             ml-0
    //             ${social.textColor}
    //             font-medium
    //             opacity-0
    //             group-hover:opacity-100
    //             group-hover:ml-4
    //             transition-all duration-300
    //           `}
    //               >
    //                 {social.label}
    //               </span>
    //             </div>
    //           </a>
    //         ))}
    //       </div>
    //     </div>
    //   </div>

    //   <div className="relative w-full max-w-[1512px] mx-auto overflow-x-hidden">
    //     {/* Background Image */}
    //     <div
    //       className="absolute inset-0 bg-cover bg-center"
    //       style={{
    //         backgroundImage: "url('/chessmain.png')",
    //         filter: 'brightness(25%)',
    //         zIndex: 0,
    //       }}
    //     />

    //     {/* Main Content */}
    //     <div className="relative z-10 pt-[125px] px-4 lg:px-[70px] w-full">
    //       <div className="w-full flex flex-col gap-[100px]">

    //         {/* Our Commitment Section */}
    //         <div className="w-full flex flex-col lg:flex-row justify-between gap-[28px]">
    //           <div className="w-full lg:w-[762px] flex flex-col gap-[28px]">
    //             <h2 className="w-full flex justify-center items-center text-[32px] md:text-[46px] font-bold font-roboto text-white leading-none text-center lg:text-left whitespace-nowrap">
    //               <span>Our Commitment</span>
    //               <span className="ml-2 font-raleway font-semibold text-orange-400">– Our Mission</span>
    //             </h2>

    //             <p className="text-white text-[18px] md:text-[24px] font-roboto font-medium leading-[32px] md:leading-[40px] text-justify capitalize">
    //               Trackpi Private Limited Is Dedicated To Empowering Businesses By Providing Strategic Insights, Innovative Solutions, And Hands-On Support To Drive Sustainable Growth And Operational Excellence. Through Services Such As Market Research, Digital Strategy, And Sales Outsourcing, Trackpi Aims To Enhance Business Performance, Optimize Processes, And Build Long-Term Partnerships. The Company Is Committed To Delivering Tailored Strategies That Help Businesses Adapt, Compete, And Thrive In A Dynamic Marketplace. Additionally, Trackpi Is Focused On Nurturing Talent By Fostering Kerala’s Largest Freelance Community, Providing Aspiring Freelancers With The Skills And Opportunities To Succeed In The Digital Economy.
    //             </p>
    //           </div>
    //           <div className="w-full lg:w-[550px] h-[300px] md:h-[500px]">
    //             <img src="/chess img1.png" alt="Our Mission" className="w-full h-full object-cover rounded-md" />
    //           </div>
    //         </div>

    //         {/* Our Aspiration Section */}
    //         <div className="w-full flex flex-col-reverse lg:flex-row justify-between gap-[60px]">
    //           <div className="w-full lg:w-[550px] h-[300px] md:h-[500px] rounded-[15px] overflow-hidden">
    //             <img src="/brick img.png" alt="Vision Visual" className="w-full h-full object-cover" />
    //           </div>
    //           <div className="w-full lg:w-[762px] flex flex-col gap-[28px] items-center lg:items-start">
    //             <h2 className="text-[32px] md:text-[46px] font-bold font-roboto text-white flex justify-center lg:justify-start items-center text-center lg:text-left whitespace-nowrap">
    //               <span>Our Aspiration</span>
    //               <span className="ml-2 font-raleway font-semibold text-orange-400">– Our Vision</span>
    //             </h2>
    //             <p className="text-white text-[18px] md:text-[24px] font-roboto font-medium leading-[32px] md:leading-[40px] text-justify capitalize">
    //               Trackpi Envisions Itself As A Leading Strategic Growth Partner, Helping Businesses Navigate Challenges And Achieve Long-Term Success Through Innovation, Expertise, And Client-Focused Solutions. The Company Strives To Be At The Forefront Of Business Transformation, Continuously Evolving To Meet Market Demands And Create Impactful Solutions. By Fostering A Collaborative And Knowledge-Driven Ecosystem, Trackpi Aims To Empower Businesses And Individuals Alike, Positioning Itself As A Key Player In Driving Economic Growth And Professional Development Across Industries.
    //             </p>
    //           </div>
    //         </div>


    //         {/* Our Standards Section */}
    //         <div className="w-full flex flex-col lg:flex-row justify-between gap-[60px]">
    //           <div className="w-full lg:w-[742px] flex flex-col justify-start gap-[28px]">
    //             <h2 className="text-[32px] md:text-[46px] font-bold font-roboto text-white flex justify-center lg:justify-start items-center text-center lg:text-left capitalize">
    //               <span className="mr-2">Our Standards</span>
    //               <span className="font-raleway font-semibold text-orange-400">– Our Values</span>
    //             </h2>
    //             <ul className="list-disc pl-6 text-white font-roboto text-[18px] md:text-[24px] leading-[32px] md:leading-[36px] capitalize text-justify space-y-2">
    //               <li><strong>Empowerment</strong> – Helping businesses grow with strategic insights and support.</li>
    //               <li><strong>Innovation</strong> – Encouraging new technologies and creative solutions.</li>
    //               <li><strong>Sustainability</strong> – Promoting responsible growth that benefits both people and the planet.</li>
    //               <li><strong>Client-Centric Excellence</strong> – Delivering tailored solutions with a focus on long-term success.</li>
    //               <li><strong>Community Development</strong> – Building Kerala’s largest freelance community and fostering talent.</li>
    //             </ul>
    //           </div>
    //           <div className="w-full lg:w-[570px] h-[300px] md:h-[500px]">
    //             <img src="/values img.png" alt="Our Values" className="w-full h-full object-cover rounded-[15px]" />
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   </div>


    // </div>
  

    //mobile view

    <div className="relative w-[393px] mt-9 ml-0">
      {/* First Child: Main content with transparent background */}
      <div
        className="text-white relative flex flex-col p-4 rounded-lg overflow-hidden "
        style={{

          height: "620px",
          backgroundColor: "rgba(10, 10, 10, 0.6)", // transparent dark background
        }}
      >
        {/* Background Image with brightness filter */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bg.png')",
            filter: "brightness(0.4)",
            zIndex: 0,
          }}
        />
        {/* Content container */}
        <div className="relative z-10 ">
          {/* Welcome Text */}
          <div className="flex flex-col items-start gap-2.5 w-[325px]">
            <div className="text-left font-montserrat font-bold text-[26px] leading-[100%] w-[272px] ml-[10px]">
              Welcome to <span className="text-yellow-500">Trackpi</span>
            </div>
            <div className="text-left font-raleway font-semibold text-[18px] leading-[100%] w-[254px] ml-[10px]">
              Your Strategic Partner
            </div>
          </div>

          {/* Paragraph Container */}
          <div className="rounded-lg p-4 text-left mb-6 w-[325px] space-y-5 font-roboto font-medium text-[12px] leading-5 capitalize">
            <p>
              Trackpi is one of the best business consulting firms in Kerala. We have a
              highly experienced team that develops strategies to promote growth and
              development. With our expert consulting services, we help businesses thrive
              in a competitive environment.
            </p>
            <p>
              Trackpi is building Kerala’s largest freelance community, where anyone can
              join instantly upon completing their freelance course. Focused on innovation
              and client-centric excellence, Trackpi empowers businesses and individuals
              for sustainable success.
            </p>

            {/* Buttons Container */}
            <div className="flex space-x-3">
              <button className="bg-yellow-600 text-white font-semibold rounded-[3.26px] px-4.5 py-2.5 w-[103px] h-[27px] flex items-center justify-center gap-1 text-[12px]">
                <span>Let’s</span>
                <span>Connect</span>
              </button>
              <button className="bg-yellow-600 text-white font-semibold rounded-[3.26px] px-4.5 py-2.5 w-[129px] h-[27px] flex items-center justify-center gap-1 text-[12px]">
                <span>Company</span>
                <span>Brochure</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[393px] h-[100px]mt-2.5">
          <div className="absolute top-[453px] left-[27px] flex items-center w-[393px] h-[120px]">
            {/* img1 on the left (top layer) */}
            <img
              src="/img1.png"
              alt="Person 1"
              className="w-[120px] h-[120px] rounded-full border-4 border-transparent object-cover z-30"
            />
            {/* img2 overlays img3 but behind img1 */}
            <img
              src="/img2.png"
              alt="Person 2"
              className="-ml-6 w-[120px] h-[120px] rounded-full border-4 border-transparent object-cover z-20"
            />
            {/* img3 at the back */}
            <img
              src="/img3.png"
              alt="Person 3"
              className="-ml-6 w-[120px] h-[120px] rounded-full border-4 border-transparent object-cover z-10"
            />
          </div>


        </div>
      </div>

      {/* Second Child Div below the first */}
      <div className="relative w-[393px] h-[480px] bg-black">
        {/* Heading */}
        <div className="absolute top-[20px] left-[22px] w-[295px] h-[31px] text-[#FF9D00] flex items-center justify-center rounded-lg">
          <span className="font-raleway font-semibold text-[26px] leading-none text-center capitalize">
            Our Social Network
          </span>
        </div>

        {/* Content Box */}
        <div
          className="absolute"
          style={{
            width: "313px",
            height: "454px", // height for 5 divs with gap
            gap: "20px",
            top: "90px",
            left: "80px",
          }}
        >
          {/* 1st row: Facebook & Instagram */}
          <div
            className="flex flex-row gap-[40px]"
            style={{ width: "313px", height: "67.24px" }}
          >
            {/* Facebook */}

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center w-[90.24px] h-[67.24px] bg-black rounded-full overflow-hidden transition-all duration-300 group hover:w-[146px] hover:rounded-full hover:bg-white hover:border-4 hover:border-blue-600 cursor-pointer"
            >
              <div
                className="w-[67.24px] h-[67.24px] flex items-center justify-center bg-black group-hover:bg-blue-600 rounded-full transition-all duration-300 translate-x-[15px] group-hover:translate-x-0"
              >
                <img
                  src="/fbvector.png"
                  alt="facebook"
                  className="w-[30.24px] h-[30.24px] object-contain transition-none"  // Removed zoom effect
                />
              </div>
              <span
                className="ml-0 text-blue-600 font-medium opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 whitespace-nowrap"
              >
                Facebook
              </span>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center w-[97.24px] h-[67.24px] bg-black rounded-full overflow-hidden transition-all duration-300 group hover:w-[146px] hover:rounded-full hover:bg-white hover:border-4 hover:border-pink-600 cursor-pointer"
            >
              <div
                className="w-[67.24px] h-[67.24px] flex items-center justify-center bg-black group-hover:bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 rounded-full transition-all duration-300 translate-x-[17px] group-hover:translate-x-0"
              >
                <img
                  src="/instavector.png"
                  alt="Instagram"
                  className="w-[30.24px] h-[30.24px] object-contain transition-none"  // Removed zoom effect
                />
              </div>
              <span
                className="ml-0 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent font-medium opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 whitespace-nowrap"
              >
                Instagram
              </span>
            </a>
          </div>

          {/* 2nd row: YouTube & Trackpi */}
          <div
            className="flex flex-row gap-[40px]"
            style={{ width: "313px", height: "67.24px", marginTop: "20px" }}
          >
            {/* YouTube */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center w-[90.24px] h-[67.24px] bg-black rounded-full overflow-hidden transition-all duration-300 group hover:w-[140px] hover:rounded-full hover:bg-white hover:border-4 hover:border-red-600 cursor-pointer"
            >
              <div
                className="w-[67.24px] h-[67.24px] flex items-center justify-center bg-black group-hover:bg-red-600 rounded-full transition-all duration-300 translate-x-[15px] group-hover:translate-x-0"
              >
                <img
                  src="/ytvector.png"
                  alt="YouTube"
                  className="w-[30px] h-[30px] object-contain transition-none"  // Removed zoom effect
                />
              </div>
              <span
                className="ml-0 text-red-600 font-medium opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 whitespace-nowrap"
              >
                YouTube
              </span>
            </a>

            {/* Trackpi */}
            <a
              href="https://trackpi.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center w-[90.24px] h-[67.24px] bg-black rounded-full overflow-hidden transition-all duration-300 group hover:w-[140px] hover:rounded-full hover:bg-white hover:border-4 hover:border-yellow-600 cursor-pointer"
            >
              <div
                className="w-[67.24px] h-[67.24px] flex items-center justify-center bg-black group-hover:bg-yellow-600 rounded-full transition-all duration-300 translate-x-[10px] group-hover:translate-x-0"
              >
                <img
                  src="/trackvector.png"
                  alt="Trackpi"
                  className="w-[30px] h-[30px] object-contain transition-none"  // Removed zoom effect
                />
              </div>
              <span
                className="ml-0 text-yellow-600 font-medium opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 whitespace-nowrap"
              >
                Trackpi
              </span>
            </a>
          </div>

          {/* 3rd row: (Empty for now, you can add more later if needed) */}

          {/* 4th row: LinkedIn & Medium */}
          <div
            className="flex flex-row gap-[40px]"
            style={{ width: "313px", height: "67.24px", marginTop: "20px" }}
          >
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center w-[90.24px] h-[67.24px] bg-black rounded-full overflow-hidden transition-all duration-300 group hover:w-[140px] hover:rounded-full hover:bg-white hover:border-4 hover:border-blue-400 cursor-pointer"
            >
              <div
                className="w-[67.24px] h-[67.24px] flex items-center justify-center bg-black group-hover:bg-blue-400 rounded-full transition-all duration-300 translate-x-[14px] group-hover:translate-x-0"
              >
                <img
                  src="/linkedvector.png"
                  alt="LinkedIn"
                  className="w-[30px] h-[30px] object-contain transition-none"  // Removed zoom effect
                />
              </div>
              <span
                className="ml-0 text-blue-400 font-medium opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 whitespace-nowrap"
              >
                LinkedIn
              </span>
            </a>

            {/* Medium */}
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center w-[90.24px] h-[67.24px] bg-black rounded-full overflow-hidden transition-all duration-300 group hover:w-[140px] hover:rounded-full hover:bg-white hover:border-4 hover:border-gray-800 cursor-pointer"
            >
              <div
                className="w-[67.24px] h-[67.24px] flex items-center justify-center bg-black group-hover:bg-gray-800 rounded-full transition-all duration-300 translate-x-[10px] group-hover:translate-x-0"
              >
                <img
                  src="/mevector.png"
                  alt="Medium"
                  className="w-[30px] h-[30px] object-contain transition-none"  // Removed zoom effect
                />
              </div>
              <span
                className="ml-0 text-gray-800 font-medium opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 whitespace-nowrap"
              >
                Medium
              </span>
            </a>
          </div>

          {/* 5th row: Quora & Blogger */}
          <div
            className="flex flex-row gap-[40px]"
            style={{ width: "313px", height: "123px", marginTop: "20px", marginLeft: "-10px" }}
          >
            {/* Quora */}
            <a
              href="https://www.quora.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center w-[90.24px] h-[60.24px] bg-black rounded-full overflow-hidden transition-all duration-300 group hover:w-[150px] hover:rounded-full hover:bg-white hover:border-4 hover:border-red-800 cursor-pointer"
            >
              <div
                className="w-[60.24px] h-[60.24px] flex items-center justify-center bg-black group-hover:bg-red-800 rounded-full transition-all duration-300 translate-x-[20px] group-hover:translate-x-0"
              >
                <img
                  src="/Quoravector.png"
                  alt="Quora"
                  className="w-[30.24px] h-[30.24px] object-contain transition-none"
                />
              </div>
              <span
                className="ml-0 text-red-800 font-medium opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 whitespace-nowrap"
              >
                Quora
              </span>
            </a>

            {/* Blogger */}
            <a
              href="https://www.blogger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center w-[90.24px] h-[60.24px] bg-black rounded-full overflow-hidden transition-all duration-300 group hover:w-[150px] hover:rounded-full hover:bg-white hover:border-4 hover:border-orange-400 cursor-pointer"
            >
              <div
                className="w-[60.24px] h-[60.24px] flex items-center justify-center bg-black group-hover:bg-orange-400 rounded-full transition-all duration-300 translate-x-[20px] group-hover:translate-x-0"
              >
                <img
                  src="/blogvector.png"
                  alt="Blogger"
                  className="w-[30.24px] h-[30.24px] object-contain transition-none"
                />
              </div>
              <span
                className="ml-0 text-orange-400 font-medium opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 whitespace-nowrap"
              >
                Blogger
              </span>
            </a>
          </div>

        </div>


      </div>

      <div className="w-[392px] flex flex-col gap-[28px] bg-black">
        {/* Upper Div */}
        <div className="h-[336px] px-6 flex flex-col gap-[28px]">
          {/* Heading */}
          <div
            className="w-[339px] font-raleway font-semibold text-[24px] leading-[24px] text-center capitalize text-white whitespace-nowrap"
          >
            <span>Our Commitment</span> - <span className="text-yellow-500">Our Mission</span>
          </div>

          {/* Paragraph */}
          <p
            className="font-roboto font-medium text-[12px] leading-[20px] text-justify capitalize text-white flex-grow ml-2"
            style={{ minHeight: "280px", width: "324px" }}
          >
            Trackpi Private Limited is dedicated to empowering businesses by providing strategic insights, innovative solutions, and hands-on support to drive sustainable growth and operational excellence. Through services such as market research, digital strategy, and sales outsourcing, Trackpi aims to enhance business performance, optimize processes, and build long-term partnerships. The company is committed to delivering tailored strategies that help businesses adapt, compete, and thrive in a dynamic marketplace. Additionally, Trackpi is focused on nurturing talent by fostering Kerala’s largest freelance community, providing aspiring freelancers with the skills and opportunities to succeed in the digital economy.
          </p>
        </div>

        {/* Lower Div */}
        <div className="w-[320px] h-[291px] rounded-[15px] ml-6">
          <img src="/chess img1.png" alt="Your content" className="w-full h-full object-cover rounded-[15px]" />
        </div>

      </div>
<div className="w-[392px] flex flex-col gap-[0] pt-[20px] bg-black">
  {/* Upper Div */}
  <div className="h-[336px] px-6 flex flex-col gap-[28px]">
    {/* Heading */}
    <div className="w-[339px] font-raleway font-semibold text-[24px] leading-[24px] text-center capitalize text-white whitespace-nowrap">
      <span>Our Aspiration </span> - <span className="text-yellow-500"> Our Vision</span>
    </div>

    {/* Paragraph */}
    <p
      className="font-roboto font-medium text-[12px] leading-[20px] text-justify capitalize text-white flex-grow ml-2"
      style={{ minHeight: "280px", width: "324px" }}
    >
      Trackpi envisions itself as a leading strategic growth partner, helping businesses navigate challenges and achieve long-term success through innovation, expertise, and client-focused solutions. The company strives to be at the forefront of business transformation, continuously evolving to meet market demands and create impactful solutions. By fostering a collaborative and knowledge-driven ecosystem, Trackpi aims to empower businesses and individuals alike, positioning itself as a key player in driving economic growth and professional development across industries.
    </p>
  </div>

  {/* Lower Div */}
  <div className="w-[320px] h-[291px] rounded-[15px] ml-9 ">
    <img src="/brick img.png" alt="Your content" className="w-full h-full object-cover rounded-[15px]" />
  </div>
</div>

      


      <div className="w-[392px] h-[571px] flex flex-col gap-[28px] bg-black pt-[20px]">
        {/* Upper Div */}
        <div className="h-[246pxpx] px-6 flex flex-col gap-[28px]">
          {/* Heading */}
          <div
            className="w-[339px] font-raleway font-semibold text-[24px] leading-[24px] text-center capitalize text-white whitespace-nowrap"
          >
            <span>Our Standards  </span> - <span className="text-yellow-500">  Our Values</span>
          </div>

          {/* Paragraph */}
          <div
            className="
    w-[342px]
    h-[190px]
    text-[12px]
    text-white
    font-roboto
    font-medium
    tracking-[0%]
    text-justify
    capitalize
  "
          >
            <ul className="list-disc pl-4 space-y-[10px]">
              <li className="leading-relaxed">
                <strong>Empowerment</strong> – Helping Businesses Grow With Strategic Insights And Support.
              </li>
              <li className="leading-relaxed">
                <strong>Innovation</strong> – Encouraging New Technologies And Creative Solutions.
              </li>
              <li className="leading-relaxed">
                <strong>Sustainability</strong> – Promoting Responsible Growth That Benefits Both People And The Planet.
              </li>
              <li className="leading-relaxed">
                <strong>Client-Centric Excellence</strong> – Delivering Tailored Solutions With A Focus On Long-Term Success.
              </li>
              <li className="leading-relaxed">
                <strong>Community Development</strong> – Building Kerala’s Largest Freelance Community And Fostering Talent.
              </li>
            </ul>
          </div>


        </div>

        {/* Lower Div */}
        <div className="w-[320px] h-[291px] rounded-[15px] ml-9 mt-9">
          <img src="/values img.png" alt="Your content" className="w-full h-full object-cover rounded-[15px]" />
        </div>


      </div>









    </div>




  );
}
export default Discoverus;