import React from "react";

const Home = () => {
  return <>
  
  {/*==========hero section==============* */}

  <>
  <section className="hero__section pt-[60px] 2xl:h-[800px]">
    <div className="container">
      <div className="flex felx-col lg:felx-row gap-[90px] items-center justify-between">


        {/*============== Hero Content================ */}
        <div>
          <div className="lg:w-[570px]">
            <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] 
            md:leading-[70px]">We help patients live a 
            healthy, longer life.</h1>
            <p className="text__para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis nisi, rem atque placeat unde dolor esse sequi, nobis beatae iste veritatis? Accusamus natus dolor inventore, consequuntur distinctio magnam temporibus. Et?
            </p>

            <button className="btn">Request an Appointment</button>
          </div>

        </div>
      </div>
    </div>
  </section>
  </>
  
  </>
};

export default Home;
