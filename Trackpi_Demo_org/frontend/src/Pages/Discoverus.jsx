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

      <div className="w-[1512px] h-[100px] mx-auto my-8"></div>


      <div className="w-[1512px] h-[600px] relative">
        <h2 className="text-4xl font-bold text-orange-400 mb-4 text-center pt-6">
          Our Social Networks
        </h2>



        <div className="relative w-full flex justify-center mt-10">
          <div className="w-[1310px] h-[424px] bg-gradient-to-b rounded-xl text-center py-8 px-6 flex flex-col items-center justify-between gap-4">


            <div className="w-full flex justify-between px-20">
              {[
                { src: "/icon1.png", alt: "YouTube", width: "113px", height: "142px", link: "https://www.youtube.com" },
                {
                  src: "/icon3.png", alt: "Company website", width: "110px", height: "174px",
                  left: '599.5px'
                },
                {
                  src: "/icon5.png", alt: "Medium", width: "112px", height: "142px", top: '20px',
                  left: '1198px'
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group transition-transform duration-300 pt-2"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: item.width, height: item.height }}
                    className={`transition-transform duration-300 group-hover:scale-110 group-hover:-translate-x-2 group-hover:translate-y-1`}
                  />
                  <span
                    className={`text-white text-lg mt-0 opacity-0 group-hover:opacity-100 transition-all duration-300
          ${index === 1
                        ? 'group-hover:-translate-y-6 group-hover:-translate-x-3'
                        : 'group-hover:-translate-y-4 group-hover:-translate-x-2'
                      }`}
                  >
                    {item.alt}
                  </span>
                </div>
              ))}
            </div>



            <div className="w-full flex justify-center gap-[340px] -mt-20">
              {[
                {
                  src: "/icon7.png", alt: "Instagram", width: "138px", height: "142px", top: '141px',
                  left: '300px'
                },
                {
                  src: "/icon2.png", alt: "Facebook", width: "131px", height: "142px", top: '141px',
                  left: '879px'
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group transition-transform duration-300 pt-2"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: item.width, height: item.height }}
                    className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-x-2 group-hover:translate-y-1"
                  />
                  <span className="text-white text-lg mt-0 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 group-hover:-translate-x-2 transition-all duration-300">
                    {item.alt}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-full flex justify-between px-20 -mt-28">
              {[
                {
                  src: "/icon4.png", alt: "Quora", width: "110px", height: "142px", top: '282px',
                  left: '100px'
                },
                {
                  src: "/icon6.png", alt: "LinkedIn", width: "117px", height: "142px", top: '272px',
                  left: '596px'
                },
                {
                  src: "/icon8.png", alt: "Blogger", width: "110px", height: "142px", top: '282px',
                  left: '1102px'
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group transition-transform duration-300 pt-2"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: item.width, height: item.height }}
                    className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-x-2 group-hover:translate-y-1"
                  />
                  <span className="text-white text-lg mt-0 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 group-hover:-translate-x-2 transition-all duration-300">
                    {item.alt}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
        <div className="w-[1512px] h-[100px] mx-auto my-8"></div>
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








  );
}
export default Discoverus;