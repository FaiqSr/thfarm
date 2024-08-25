import React from "react";

function HomePage() {
  return (
    <div>
      <header className="container mx-auto max-w-5xl mt-[70px] mb-[50px]">
        <div className="container mx-auto text-center pb-5">
          <div className="container bg-third mx-auto w-full h-[345px]"></div>
        </div>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl">BuBro</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id
            aspernatur reiciendis culpa debitis aperiam, recusandae porro.
            Distinctio tempora quasi porro consectetur quam architecto, sapiente
            quaerat vel, vero possimus consequatur velit, molestiae saepe
            officia amet blanditiis earum sit unde! Ratione dolorum expedita
            repudiandae quam alias vitae, quis exercitationem minus illo.
          </p>
        </div>
      </header>
      <section className="flex mx-auto w-full bg-white-utama pb-5 h-[250px] items-center flex-col justify-center ">
        <div className="text-center">
          <h1 className="text-3xl pb-6">Team</h1>
        </div>
        <div className="columns-2 mx-auto gap-16">
          <div className="container w-60 h-32 bg-second rounded-lg border"></div>
          <div className="container w-60 h-32 bg-second rounded-lg border"></div>
        </div>
      </section>
      <section className="container border py-5  mx-auto my-24 flex-col max-w-5xl">
        <div className="mx-10 px-10 py-5 ">
          <h1 className="text-3xl pb-2">Brocademy</h1>
          <p className="text-lg pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eius
            explicabo in voluptates! Saepe obcaecati aliquam explicabo
            repellendus deleniti dignissimos rerum exercitationem, perspiciatis,
            adipisci tempora molestias ratione aperiam eum quam voluptates
            consequatur placeat natus accusantium veritatis, doloribus
            aspernatur. Repudiandae dolore ut animi consequuntur commodi
            veritatis porro, doloribus nulla vitae eius?
          </p>
          <button className=" rounded-lg  py-2 border text-lg px-10">
            Hubungi
          </button>
        </div>
        <div className="container flex flex-row justify-center gap-7 px-5 py-5">
          <div className="container w-60 h-80 bg-second rounded-lg border"></div>
          <div className="container w-60 h-80 bg-second rounded-lg border"></div>
          <div className="container w-60 h-80 bg-second rounded-lg border"></div>
        </div>
      </section>
      <section className="flex w-full bg-white-utama mx-auto items-center justify-center flex-col">
        <div>
          <h1 className="text-3xl my-5">Apa si kata orang?</h1>
        </div>
        <div className="mx-auto gap-16 columns-2 pb-10">
          <div className="container w-96 h-80 bg-second rounded-lg border"></div>
          <div className="container w-96 h-80 bg-second rounded-lg border"></div>
        </div>
      </section>

      <section className="container border py-5  mx-auto my-24 flex-col max-w-5xl">
        <div className="mx-10 px-10 py-5 ">
          <h1 className="text-3xl pb-2">Brocademy</h1>
          <p className="text-lg pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eius
            explicabo in voluptates! Saepe obcaecati aliquam explicabo
            repellendus deleniti dignissimos rerum exercitationem, perspiciatis,
            adipisci tempora molestias ratione aperiam eum quam voluptates
            consequatur placeat natus accusantium veritatis, doloribus
            aspernatur. Repudiandae dolore ut animi consequuntur commodi
            veritatis porro, doloribus nulla vitae eius?
          </p>
          <button className=" rounded-lg  py-2 border text-lg px-10">
            Hubungi
          </button>
        </div>
        <div className="container flex flex-row justify-center gap-7 px-5 py-5">
          <div className="container w-60 h-80 bg-second rounded-lg border"></div>
          <div className="container w-60 h-80 bg-second rounded-lg border"></div>
          <div className="container w-60 h-80 bg-second rounded-lg border"></div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
