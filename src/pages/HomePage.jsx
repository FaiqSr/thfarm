import React from "react";
import { team } from "../data/web";

function HomePage() {
  return (
    <div>
      <header className="container mx-auto max-w-5xl mt-[70px] mb-[50px]">
        <div className="container mx-auto text-center pb-5">
          <div className="container bg-third mx-auto w-full h-[345px] border"></div>
        </div>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl">BuBro</h1>
          <p className="text-lg text-justify ">
            <span className="font-semibold">BUBRO FARM </span>adalah perusahaan
            pertanian modern yang mengkhususkan diri dalam budidaya hidroponik
            dan akuakultur. Kami memadukan teknologi canggih dengan praktik
            tradisional untuk menghasilkan produk berkualitas tinggi yang sehat
            dan ramah lingkungan.
          </p>
        </div>
      </header>
      <section className="flex mx-auto w-full bg-white-utama py-5 min-h-[250px] items-center flex-col justify-center ">
        <div className="text-center">
          <h1 className="text-3xl pb-6">Team</h1>
        </div>
        <div className="container flex justify-center flex-wrap columns-2 gap-16 img">
          {team.map((data) => {
            return (
              <div key={data.id} className="container max-w-80 rounded">
                <a href={data.tautan}>
                  <img src={data.img} alt="bubro" className="rounded-lg" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container border py-5  mx-auto my-24 flex items-center flex-col max-w-5xl">
        <div className="mx-10 px-10 py-5 ">
          <h1 className="text-6xl p-0 pb-3">Brocademy</h1>
          <p className="text-lg pb-5 text-justify ">
            Selamat datang di Brocademy, program pelatihan interaktif yang
            dirancang khusus untuk anak-anak SD dan usia di bawahnya! Di sini,
            mereka akan belajar cara menanam sayuran dengan metode hidroponik
            dan beternak ikan seperti lele dengan cara yang mudah dan
            menyenangkan.
          </p>
          <p className="text-lg pb-5 text-justify ">
            Dengan Brocademy, anak-anak tidak hanya belajar tentang pentingnya
            menjaga lingkungan, tetapi juga bagaimana menghasilkan makanan
            sendiri dengan cara yang ramah lingkungan. Pelajaran ini dikemas
            dengan praktis dan penuh keseruan, sehingga si kecil bisa belajar
            sambil bermain!
          </p>
          <p className="text-lg pb-5 text-justify ">
            Yuk, Bergabung dan Mulai Petualangan Belajar yang Menarik!
          </p>
          <button className=" rounded-lg  py-2 border text-lg px-10 hover:bg-white-utama transition-all">
            Hubungi
          </button>
        </div>
        <div className="container flex flex-row flex-wrap justify-center gap-7 px-5 py-5">
          <div className="container max-w-60 h-80 bg-second rounded-lg border"></div>
          <div className="container max-w-60 h-80 bg-second rounded-lg border"></div>
          <div className="container max-w-60 h-80 bg-second rounded-lg border"></div>
        </div>
      </section>
      <section className="flex w-full bg-white-utama mx-auto items-center justify-center flex-col">
        <div>
          <h1 className="text-3xl my-5">Testimoni</h1>
        </div>
        <div className=" container flex flex-wrap justify-center mx-auto gap-16 columns-2 pb-10">
          <div className="container max-w-96 h-80 bg-second rounded-lg border"></div>
          <div className="container max-w-96 h-80 bg-second rounded-lg border"></div>
        </div>
      </section>
      <section className="container border py-5  mx-auto my-24 flex items-center flex-col max-w-5xl">
        <div className="mx-10 px-10 ">
          <h1 className="text-3xl pb-2">Produk</h1>
        </div>
        <div className="container flex flex-row flex-wrap justify-center gap-7 px-5 py-5">
          <div className="container max-w-60 h-80 bg-second rounded-lg border"></div>
          <div className="container max-w-60 h-80 bg-second rounded-lg border"></div>
          <div className="container max-w-60 h-80 bg-second rounded-lg border"></div>
        </div>

        <a href="/market">
          <button className=" rounded-lg  py-2 border text-lg px-10 hover:bg-white-utama active:bg-primary transition-all ease-out">
            Barang lainnya
          </button>
        </a>
      </section>
    </div>
  );
}

export default HomePage;
