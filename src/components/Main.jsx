import Navbars from "./Navbars";
import Cards from "./Cards";
import "./../css/style.css";
import "animate.css";
import Footer from "./Footer";
import Gallery from "./Gallery";

const Main = () => {
  return (
    <div>
      <Navbars />

      <div className="heder">
        <h1
          style={{
            color: "white",
            textAlign: "center",
            padding: "10bpx",
            fontWeight: "900",
            paddingTop: "130px",
            fontSize: "50px",
          }}
        >
          <span style={{ color: "yellow" }}>MAHIR</span> Quran & Sunnah
        </h1>
        <h1
          style={{
            color: "white",
            textAlign: "center",
            padding: "10bpx",
            fontWeight: "900",
            paddingTop: "20px",
            fontSize: "50px",
          }}
        >
          Pondok Pesantren Pendidikan Quran Al Mahir
        </h1>
        <p
          style={{
            color: "yellow",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "40px",
            fontSize: "20px",
          }}
          className="pb-20"
        >
          YAYASAN ALMAHIR ATTARBAWIYYAH SURAKARTA
        </p>
      </div>

      <div className="m-20" id="galery">
        <Gallery />
      </div>

      <div className="flex  justify-center gap-10 " id="unit">
        <div id="cads">
          {" "}
          <h1
            className="font-extrabold mt-5"
            style={{
              color: "white",

              fontSize: "50px",
              textAlign: "center",
            }}
          >
            UNIT-UNIT PPQ <span style={{ color: "yellow" }}>ALMAHIR</span>
          </h1>
          <div
            id="cads"
            className="flex flex-wrap  justify-center gap-10  pt-10 pb-10"
            style={{ backgroundColor: "#CDDDE1", backgroundImage: "" }}
          >
            <Cards />
          </div>
        </div>
      </div>
      <div
        className="text-center mt-10"
        id="contact"
        style={{ fontSize: "50px", fontWeight: "900", color: "#1D2931" }}
      >
        Contact
      </div>
      <div className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <i className="ri ri-home-2-fill"></i>
              <span className="font-bold">
                <h5>JL. Adi Sumarmo RT.01/RW.07</h5>
                <p>Gawanan, Colomadu, Karanganyar, Jawa Tegah</p>
              </span>
            </div>
            <div>
              <i className="ri ri-phone-line"></i>
              <span className="font-bold">
                <h5>0813-2892-1421</h5>
              </span>
            </div>
            <div>
              <i className="ri ri-mail-line"></i>
              <span className="font-bold">
                <a href="https://ppqita.com/">
                  <h5 style={{ color: "blue" }}>info@ppqita.com</h5>
                </a>

                <p>support@ppqita.com</p>
              </span>
            </div>
            <div id="don">
              <i className="ri-hand-coin-fill"></i>
              <span className="font-bold">
                <h5>Konfirmasi Donasi</h5>
                <p>+62 812-3210-4431</p>
              </span>
            </div>
          </div>
          <div
            className="contact-col"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.376928395943!2d110.75908037361813!3d-7.533804174356933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a147e46eda873%3A0xd2f585378cd3f5e3!2sPPQ%20AL-MAHIR!5e0!3m2!1sid!2sid!4v1687330168127!5m2!1sid!2sid"
              width="400"
              height="300"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
