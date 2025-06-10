import React from 'react';
function Discoverus() {
  return (

    <div className="main-wrapper">
      <div className="min-h-screen flex items-center justify-center bg-[url('/bg.png')] bg-cover bg-center">

        <div className="leftside mt-48 ml-24 w-[768px] h-[611px]">
          <div className="header w-[768px] h-[147px] flex flex-col justify-between p-0.5 box-border">
            <div className="h1div w-[628px] h-[73px]">
              <h1 className="text-6xl font-bold text-white">
                Welcome to <span className="text-yellow-600">TrackPi</span>
              </h1>
            </div>
            <div className="h2div w-[700px] h-[49px]">
              <h2 className="text-[42px] mt-2 font-raleway font-semibold whitespace-nowrap text-white">
                Your strategic Growing partner
              </h2>
            </div>
          </div>

          <p className="text-[22px] mt-5 leading-relaxed font-roboto font-medium text-white">
            Trackpi is one of the best business consulting firms in Kerala. We have a highly experienced team that develops strategies to promote growth and development. With our expert consulting services, we help businesses thrive in a competitive environment.
          </p>

          <p className="text-[22px] mt-5 font-roboto font-medium text-white">
            Trackpi is building Kerala’s largest freelance community, where anyone can join instantly upon completing their freelance course. Focused on innovation and client-centric excellence, Trackpi empowers businesses and individuals for sustainable success.
          </p>

          <div className="button-group mt-7 flex gap-5">
            <button className="bg-yellow-600 px-6 py-3 rounded-md font-bold text-white hover:bg-yellow-700 transition">
              Let's Connect
            </button>
            <button className="bg-yellow-600 px-6 py-3 rounded-md font-bold text-white hover:bg-yellow-700 transition">
              Company Brochure
            </button>
          </div>
        </div>

        <div className="rightside w-[568px] h-[611px] mt-48 flex items-center justify-center overflow-hidden">
          <div className="image-cluster relative w-full h-full">

            <img
              src="/img3.png"
              alt="Person 3"
              className="circle-img absolute top-[230px] left-[250px] w-[308px] h-[300px] rounded-[200px] border-4 border-transparent object-cover z-[10]"
            />


            <img
              src="/img2.png"
              alt="Person 2"
              className="circle-img absolute top- left-[250px] w-[308px] h-[300px] rounded-[200px] border-4 border-transparent object-cover z-[20]"
            />


            <img
              src="/img1.png"
              alt="Person 1"
              className="circle-img absolute top-[110px] right-[240px] w-[308px] h-[300px] rounded-[200px] border-4 border-transparent object-cover z-[30]"
            />
          </div>

        </div>



      </div>

      <div className="w-[1512px] h-[50px] mx-auto my-8"></div>


      <div className="w-[1512px] h-[300px] relative">
        <h2 className="text-4xl font-bold text-orange-400 mb-4 text-center pt-6">
          Our Social Networks
        </h2>

        <div className="relative w-full h-[100px] flex justify-center mt-20 ml-10">
          <div className="relative w-[1200px] h-[123px] flex flex-wrap gap-[12.3px]">
            {/* Facebook */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="
        relative flex items-center
        w-[123px] h-[123px]
        bg-black
        rounded-full
        overflow-hidden
        transition-all duration-300
        group
        hover:w-[250px] hover:rounded-full
        hover:bg-white
        hover:border-4 hover:border-blue-600
        cursor-pointer
      ">
                <div className="
          w-[123px] h-[123px]
          flex items-center justify-center
          bg-black group-hover:bg-blue-600
          rounded-full
          transition-all duration-300
          translate-x-[29px] group-hover:translate-x-0
        ">
                  <img
                    src="/fbvector.png"
                    alt="Facebook"
                    className="
              w-[60px] h-[60px] object-contain
              transition-all duration-300
            "
                  />
                </div>
                <span className="
          ml-0
          text-blue-600
          font-medium
          opacity-0
          group-hover:opacity-100
          group-hover:ml-4
          transition-all duration-300
        ">
                  Facebook
                </span>
              </div>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="
        relative flex items-center
        w-[123px] h-[123px]
        bg-black
        rounded-full
        overflow-hidden
        transition-all duration-300
        group
        hover:w-[250px] hover:rounded-full
        hover:bg-white
        hover:border-4 hover:border-pink-600
        cursor-pointer
      ">
                <div className="
          w-[123px] h-[123px]
          flex items-center justify-center
          bg-black group-hover:bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500
          rounded-full
          transition-all duration-300
          translate-x-[35px] group-hover:translate-x-0
        ">
                  <img
                    src="/instavector.png"
                    alt="Instagram"
                    className="
              w-[60px] h-[60px] object-contain
              transition-all duration-300
            "
                  />
                </div>
                <span className="
          ml-0
          bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500
          bg-clip-text text-transparent
          font-medium
          opacity-0
          group-hover:opacity-100
          group-hover:ml-4
          transition-all duration-300
        ">
                  Instagram
                </span>
              </div>
            </a>

            {/* Youtube */}
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <div className="
        relative flex items-center
        w-[123px] h-[123px]
        bg-black
        rounded-full
        overflow-hidden
        transition-all duration-300
        group
        hover:w-[250px] hover:rounded-full
        hover:bg-white
        hover:border-4 hover:border-red-600
        cursor-pointer
      ">
                <div className="
          w-[123px] h-[123px]
          flex items-center justify-center
          bg-black group-hover:bg-red-600
          rounded-full
          transition-all duration-300
          translate-x-[30px] group-hover:translate-x-0
        ">
                  <img
                    src="/ytvector.png"
                    alt="Youtube"
                    className="
              w-[60px] h-[60px] object-contain
              transition-all duration-300
            "
                  />
                </div>
                <span className="
          ml-0
          text-red-600
          font-medium
          opacity-0
          group-hover:opacity-100
          group-hover:ml-4
          transition-all duration-300
        ">
                  Youtube
                </span>
              </div>
            </a>

            {/* Trackpi */}
            <a href="https://trackpi.example.com" target="_blank" rel="noopener noreferrer">
              <div className="
        relative flex items-center
        w-[123px] h-[123px]
        bg-black
        rounded-full
        overflow-hidden
        transition-all duration-300
        group
        hover:w-[250px] hover:rounded-full
        hover:bg-white
        hover:border-4 hover:border-yellow-600
        cursor-pointer
      ">
                <div className="
          w-[123px] h-[123px]
          flex items-center justify-center
          bg-black group-hover:bg-yellow-600
          rounded-full
          transition-all duration-300
          translate-x-[20px] group-hover:translate-x-0
        ">
                  <img
                    src="/trackvector.png"
                    alt="Trackpi"
                    className="
              w-[60px] h-[60px] object-contain
              transition-all duration-300
            "
                  />
                </div>
                <span className="
          ml-0
          text-yellow-600
          font-medium
          opacity-0
          group-hover:opacity-100
          group-hover:ml-4
          transition-all duration-300
        ">
                  Trackpi
                </span>
              </div>
            </a>

            {/* Linkedin */}
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="
        relative flex items-center
        w-[123px] h-[123px]
        bg-black
        rounded-full
        overflow-hidden
        transition-all duration-300
        group
        hover:w-[250px] hover:rounded-full
        hover:bg-white
        hover:border-4 hover:border-blue-400
        cursor-pointer
      ">
                <div className="
          w-[123px] h-[123px]
          flex items-center justify-center
          bg-black group-hover:bg-blue-400
          rounded-full
          transition-all duration-300
          translate-x-[28px] group-hover:translate-x-0
        ">
                  <img
                    src="/linkedvector.png"
                    alt="Linkedin"
                    className="
              w-[60px] h-[60px] object-contain
              transition-all duration-300
            "
                  />
                </div>
                <span className="
          ml-0
          text-blue-400
          font-medium
          opacity-0
          group-hover:opacity-100
          group-hover:ml-4
          transition-all duration-300
        ">
                  Linkedin
                </span>
              </div>
            </a>

            {/* Medium */}
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
              <div className="
        relative flex items-center
        w-[123px] h-[123px]
        bg-black
        rounded-full
        overflow-hidden
        transition-all duration-300
        group
        hover:w-[250px] hover:rounded-full
        hover:bg-white
        hover:border-4 hover:border-black-600
        cursor-pointer
      ">
                <div className="
          w-[123px] h-[123px]
          flex items-center justify-center
          bg-black group-hover:bg-black-600
          rounded-full
          transition-all duration-300
          translate-x-[20px] group-hover:translate-x-0
        ">
                  <img
                    src="/mevector.png"
                    alt="Medium"
                    className="
              w-[60px] h-[60px] object-contain
              transition-all duration-300
            "
                  />
                </div>
                <span className="
          ml-0
          text-black
          font-medium
          opacity-0
          group-hover:opacity-100
          group-hover:ml-4
          transition-all duration-300
        ">
                  Medium
                </span>
              </div>
            </a>

            {/* Quora */}
            <a href="https://www.quora.com" target="_blank" rel="noopener noreferrer">
              <div className="
        relative flex items-center
        w-[123px] h-[123px]
        bg-black
        rounded-full
        overflow-hidden
        transition-all duration-300
        group
        hover:w-[250px] hover:rounded-full
        hover:bg-white
        hover:border-4 hover:border-red-800
        cursor-pointer
      ">
                <div className="
          w-[123px] h-[123px]
          flex items-center justify-center
          bg-black group-hover:bg-red-800
          rounded-full
          transition-all duration-300
          translate-x-[20px] group-hover:translate-x-0
        ">
                  <img
                    src="/Quoravector.png"
                    alt="Quora"
                    className="
              w-[60px] h-[60px] object-contain
              transition-all duration-300
            "
                  />
                </div>
                <span className="
          ml-0
          text-red-800
          font-medium
          opacity-0
          group-hover:opacity-100
          group-hover:ml-4
          transition-all duration-300
        ">
                  Quora
                </span>
              </div>
            </a>

            {/* Blogger */}
            <a href="https://www.blogger.com" target="_blank" rel="noopener noreferrer">
              <div className="
        relative flex items-center
        w-[123px] h-[123px]
        bg-black
        rounded-full
        overflow-hidden
        transition-all duration-300
        group
        hover:w-[250px] hover:rounded-full
        hover:bg-white
        hover:border-4 hover:border-orange-400
        cursor-pointer
      ">
                <div className="
          w-[123px] h-[123px]
          flex items-center justify-center
          bg-black group-hover:bg-orange-400
          rounded-full
          transition-all duration-300
          translate-x-[20px] group-hover:translate-x-0
        ">
                  <img
                    src="/blogvector.png"
                    alt="Blogger"
                    className="
              w-[60px] h-[60px] object-contain
              transition-all duration-300
            "
                  />
                </div>
                <span className="
          ml-0
          text-orange-300
          font-medium
          opacity-0
          group-hover:opacity-100
          group-hover:ml-4
          transition-all duration-300
        ">
                  Blogger
                </span>
              </div>
            </a>
          </div>
        </div>


        <div className="w-[1512px] h-[10px] mx-auto my-8"></div>
      </div>



      <div className="relative w-[1512px] h-[1856px]">


        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/chessmain.png')",
            filter: 'brightness(25%)',
            zIndex: 0,
          }}
        />


        <div className="relative z-10 top-[125px] left-[70px] w-[1372px] h-[1722px]">
          <div className="w-full flex flex-col gap-[100px] p-0">


            <div className="w-full flex justify-between gap-[28px]">
              <div className="w-[762px] flex flex-col gap-[28px]">
                <h2 className="w-full flex justify-center items-center text-[46px] font-bold font-roboto text-white leading-none whitespace-nowrap">
                  <span>Our Commitment</span>
                  <span className="ml-2 font-raleway font-semibold text-orange-400">– Our Mission</span>
                </h2>
                <p className="text-white text-[24px] font-roboto font-medium leading-[40px] text-justify capitalize">
                  Trackpi Private Limited Is Dedicated To Empowering Businesses By Providing Strategic Insights, Innovative Solutions, And Hands-On Support To Drive Sustainable Growth And Operational Excellence. Through Services Such As Market Research, Digital Strategy, And Sales Outsourcing, Trackpi Aims To Enhance Business Performance, Optimize Processes, And Build Long-Term Partnerships. The Company Is Committed To Delivering Tailored Strategies That Help Businesses Adapt, Compete, And Thrive In A Dynamic Marketplace. Additionally, Trackpi Is Focused On Nurturing Talent By Fostering Kerala’s Largest Freelance Community, Providing Aspiring Freelancers With The Skills And Opportunities To Succeed In The Digital Economy.
                </p>
              </div>
              <div className="w-[550px] h-[500px]">
                <img src="/chess img1.png" alt="Our Mission" className="w-full h-full object-cover rounded-md" />
              </div>
            </div>


            <div className="w-full flex justify-between gap-[60px]">
              <div className="w-[550px] h-[500px] rounded-[15px] overflow-hidden">
                <img src="/brick img.png" alt="Vision Visual" className="w-full h-full object-cover" />
              </div>
              <div className="w-[762px] flex flex-col gap-[28px] items-center">
                <h2 className="text-[46px] font-bold font-roboto text-white flex justify-center items-center whitespace-nowrap">
                  <span>Our Aspiration</span>
                  <span className="ml-2 font-raleway font-semibold text-orange-400">– Our Vision</span>
                </h2>
                <p className="text-white text-[24px] font-roboto font-medium leading-[40px] text-justify capitalize">
                  Trackpi Envisions Itself As A Leading Strategic Growth Partner, Helping Businesses Navigate Challenges And Achieve Long-Term Success Through Innovation, Expertise, And Client-Focused Solutions. The Company Strives To Be At The Forefront Of Business Transformation, Continuously Evolving To Meet Market Demands And Create Impactful Solutions. By Fostering A Collaborative And Knowledge-Driven Ecosystem, Trackpi Aims To Empower Businesses And Individuals Alike, Positioning Itself As A Key Player In Driving Economic Growth And Professional Development Across Industries.
                </p>
              </div>
            </div>


            <div className="w-full flex justify-between gap-[60px]">
              <div className="w-[742px] flex flex-col justify-start gap-[28px]">
                <h2 className="text-[46px] font-bold font-roboto text-white flex justify-center items-center capitalize">
                  <span className="mr-2">Our Standards</span>
                  <span className="font-raleway font-semibold text-orange-400">– Our Values</span>
                </h2>
                <ul className="list-disc pl-6 text-white font-roboto text-[24px] leading-[36px] capitalize text-justify space-y-2">
                  <li><strong>Empowerment</strong> – Helping businesses grow with strategic insights and support.</li>
                  <li><strong>Innovation</strong> – Encouraging new technologies and creative solutions.</li>
                  <li><strong>Sustainability</strong> – Promoting responsible growth that benefits both people and the planet.</li>
                  <li><strong>Client-Centric Excellence</strong> – Delivering tailored solutions with a focus on long-term success.</li>
                  <li><strong>Community Development</strong> – Building Kerala’s largest freelance community and fostering talent.</li>
                </ul>
              </div>
              <div className="w-[570px] h-[500px]">
                <img src="/values img.png" alt="Our Values" className="w-full h-full object-cover rounded-[15px]" />
              </div>
            </div>

          </div>
        </div>

      </div>






    </div>





    
    //     </div>


      // <div className="main-wrapper">
      // <div className="min-h-screen flex items-center justify-center bg-[url('/bg.png')] bg-cover bg-center">

      //   <div className="leftside mt-48 ml-24 w-[768px] h-[611px]">
      //     <div className="header w-[768px] h-[147px] flex flex-col justify-between p-0.5 box-border">
      //       <div className="h1div w-[628px] h-[73px]">
      //         <h1 className="text-6xl font-bold text-white">
      //           Welcome to <span className="text-yellow-600">TrackPi</span>
      //         </h1>
      //       </div>
      //       <div className="h2div w-[700px] h-[49px]">
      //         <h2 className="text-[42px] mt-2 font-raleway font-semibold whitespace-nowrap text-white">
      //           Your strategic Growing partner
      //         </h2>
      //       </div>
      //     </div>

      //     <p className="text-[22px] mt-5 leading-relaxed font-roboto font-medium text-white">
      //       Trackpi is one of the best business consulting firms in Kerala. We have a highly experienced team that develops strategies to promote growth and development. With our expert consulting services, we help businesses thrive in a competitive environment.
      //     </p>

      //     <p className="text-[22px] mt-5 font-roboto font-medium text-white">
      //       Trackpi is building Kerala’s largest freelance community, where anyone can join instantly upon completing their freelance course. Focused on innovation and client-centric excellence, Trackpi empowers businesses and individuals for sustainable success.
      //     </p>

      //     <div className="button-group mt-7 flex gap-5">
      //       <button className="bg-yellow-600 px-6 py-3 rounded-md font-bold text-white hover:bg-yellow-700 transition">
      //         Let's Connect
      //       </button>
      //       <button className="bg-yellow-600 px-6 py-3 rounded-md font-bold text-white hover:bg-yellow-700 transition">
      //         Company Brochure
      //       </button>
      //     </div>
      //   </div>

      //   <div className="rightside w-[568px] h-[611px] mt-48 flex items-center justify-center overflow-hidden">
      //     <div className="image-cluster relative w-full h-full">

      //       <img
      //         src="/img3.png"
      //         alt="Person 3"
      //         className="circle-img absolute top-[230px] left-[250px] w-[308px] h-[300px] rounded-[200px] border-4 border-transparent object-cover z-[10]"
      //       />

      //       <img
      //         src="/img2.png"
      //         alt="Person 2"
      //         className="circle-img absolute top-[140px] left-[250px] w-[308px] h-[300px] rounded-[200px] border-4 border-transparent object-cover z-[20]"
      //       />

      //       <img
      //         src="/img1.png"
      //         alt="Person 1"
      //         className="circle-img absolute top-[110px] right-[240px] w-[308px] h-[300px] rounded-[200px] border-4 border-transparent object-cover z-[30]"
      //       />
      //     </div>
      //   </div>
      // </div>
      // </div>


  );
}
export default Discoverus;