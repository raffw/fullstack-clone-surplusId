import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";


export default function Footer() {
    return (
      <>
        <hr className="w-full text-bold"></hr>
        <footer className="flex flex-col py-10">
          <div className="flex h-1/5 justify-between">
            <div className="py-1 px-20 pr-0 ">
              <h1 className="font-bold">BISNIS</h1>
              <div className="py-3 w-40">
                <p>Kebijakan Privasi</p>
                <p>Syarat dan Ketentuan</p>
              </div>
            </div>
            <div className="py-1 px-20 ">
              <h1 className="font-bold">PELANGGAN</h1>
              <div className="py-3 w-40">
                <p>Kebijakan Privasi</p>
                <p>Syarat dan Ketentuan</p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex flex-col mr-20 w-full items-center">
              <h1 className="font-bold">Cari tahu informasi terbaru</h1>
              <div className="py-5 flex gap-3 items-center text-3xl">
                <a href="">
                <BiLogoGmail />
                </a>
                <a href="">
                <FaLinkedin />
                </a>
                <a href="">
                <FaWhatsapp />
                </a>
                <a href="">
                  <FaYoutube/>
                </a>
                <a href="">
                <FaXTwitter />
                </a>
              </div>
              <div>
                <h1 className="py-2 font-bold">Unduh Aplikasi</h1>
                <div className="flex gap-5 text-3xl">
                  <a href="">
                  <FaGooglePlay />
                  </a>
                  <a href="">
                  <FaAppStore />
                  </a>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden flex-col py-4 pl-20 w-1/2 items-center">
              <h1 className="font-bold">Cari tahu informasi terbaru</h1>
              <div className="py-5 flex gap-3 items-center text-3xl">
                <a href="">
                <BiLogoGmail />
                </a>
                <a href="">
                <FaLinkedin />
                </a>
                <a href="">
                <FaWhatsapp />
                </a>
                <a href="">
                  <FaYoutube/>
                </a>
                <a href="">
                <FaXTwitter />
                </a>
              </div>
              <div>
                <h1 className="py-2 font-bold">Unduh Aplikasi</h1>
                <div className="flex gap-5 text-3xl">
                  <a href="">
                  <FaGooglePlay />
                  </a>
                  <a href="">
                  <FaAppStore />
                  </a>
                </div>
              </div>
            </div>
          <div className="md:flex justify-between items-center py-2 px-20">
            <p className="md:w-1/3 text-start">
              Surplus Indonesia - PT Ekonomi Sirkular Indonesia Jl Gudang Peluru
              Timur Blok H no. 201, Kebon Baru, Tebet, Kota Jakarta Selatan, DKI
              Jakarta, Indonesia
            </p>
          </div>
        </footer>
      </>
    );
  }
  