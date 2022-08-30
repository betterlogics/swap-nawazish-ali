import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { props } from "react";
import "./modal.css";
import logo from "../Assets/logo.png";
import logo1 from "../Assets/logo1.png";
import logo2 from "../Assets/logo2.png";
import logo3 from "../Assets/logo3.png";
import logo4 from "../Assets/logo4.png";
import logo5 from "../Assets/logo5.png";
import logo6 from "../Assets/logo6.png";
import logo7 from "../Assets/logo7.png";
import logo8 from "../Assets/logo8.png";
import logo9 from "../Assets/logo9.png";
import logo10 from "../Assets/logo10.png";
import logo11 from "../Assets/logo11.png";
import logo12 from "../Assets/logo12.png";
import logo13 from "../Assets/logo13.png";
// import{modalShow,MyVerticallyCenteredModal} from 'react-bootstrap'

function Moda(props) {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <Modal
              className="moda sdfgh"
              {...props}
              size="MD"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  <h4 className="blue"> Sell a Token</h4>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <input
                        type="text"
                        className=" modas"
                        placeholder="Sreach name or paste adress"
                      />
                    </div>
                  </div>
                </div>
                <p className="para">Common tokens</p>
                <div className="container">
                  <div className="row moda_r0">
                    <div className="col-md-2 d-flex cir">
                      <svg
                        viewBox="0 0 96 96"
                        width="24px"
                        color="text"
                        xmlns="http://www.w3.org/2000/svg"
                        class="sc-8a800401-0 cziRfP"
                        style={{ marginRight: "8px" }}
                      >
                        <circle cx="48" cy="48" r="48" fill="#F0B90B"></circle>
                        <path
                          d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z"
                          fill="white"
                        ></path>
                      </svg>
                      <span>BNB</span>
                    </div>
                    <div className="col-md-2 d-flex cir op">
                      {/* <svg
                        viewBox="0 0 96 96"
                        width="24px"
                        color="text"
                        xmlns="http://www.w3.org/2000/svg"
                        class="sc-8a800401-0 cziRfP"
                        style={{ marginRight: "8px" }}
                      >
                        <circle cx="48" cy="48" r="48" fill="#F0B90B"></circle>
                        <path
                          d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z"
                          fill="white"
                        ></path>
                      </svg> */}
                      <img src={logo3} className="img_cir immgs" alt="" />
                      <span className='blue1'>BUSD</span>
                    </div>
                    <div className="col-md-2 d-flex cir op">
                      {/* <svg
                        viewBox="0 0 96 96"
                        width="24px"
                        color="text"
                        xmlns="http://www.w3.org/2000/svg"
                        class="sc-8a800401-0 cziRfP"
                        style={{ marginRight: "8px" }}
                      >
                        <circle cx="48" cy="48" r="48" fill="#F0B90B"></circle>
                        <path
                          d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z"
                          fill="white"
                        ></path>
                      </svg> */}
                      <img src={logo4} className="img_cir immgs" alt="" />
                      <span className='blue1'>Cake</span>
                    </div>
                    <div className="col-md-2 d-flex cir op">
                      {/* <svg
                        viewBox="0 0 96 96"
                        width="24px"
                        color="text"
                        xmlns="http://www.w3.org/2000/svg"
                        class="sc-8a800401-0 cziRfP"
                        style={{ marginRight: "8px" }}
                      >
                        <circle cx="48" cy="48" r="48" fill="#F0B90B"></circle>
                        <path
                          d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z"
                          fill="white"
                        ></path>
                      </svg> */}
                      <img src={logo1} className="img_cir immgs" alt="" />
                      <span  className='blue1'>BTCB</span>
                    </div>
                  </div>
                </div>
                <div className="container scroll ">
                  <div className="row mt-4">
                    <div className="col-md-12 d-flex op1">
                      <svg
                        viewBox="0 0 96 96"
                        width="24px"
                        color="text"
                        xmlns="http://www.w3.org/2000/svg"
                        class="sc-8a800401-0 cziRfP"
                        style={{ marginRight: "8px" }}
                      >
                        <circle cx="48" cy="48" r="48" fill="#F0B90B"></circle>
                        <path
                          d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z"
                          fill="white"
                        ></path>
                      </svg>
                      <div>
                        <span  className='blue'>BNB</span> <br />
                        <p>Binace chain native token</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12 d-flex">
                      <img src={logo1} className="img_cir" alt="" />

                      <div className="ms-2">
                        <span  className='blue'>ALPACA</span> <br />
                        <p> ALPACA</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12 d-flex">
                      <img src={logo2} className="img_cir" alt="" />

                      <div className="ms-2">
                        <span  className='blue'>BELT</span> <br />
                        <p>BELT</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12 d-flex">
                      <img src={logo3} className="img_cir" alt="" />

                      <div className="ms-2">
                        <span  className='blue'>BTC</span> <br />
                        <p>BTC TOKEN</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12 d-flex">
                      <img src={logo4} className="img_cir" alt="" />

                      <div className="ms-2">
                        <span  className='blue'>BUNNY</span> <br />
                        <p>PANCAKE BUNNY</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12 d-flex">
                      <img src={logo5} className="img_cir" alt="" />

                      <div className="ms-2">
                        <span  className='blue'>BUSD</span> <br />
                        <p>BUSD</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12 d-flex">
                      <img src={logo6} className="img_cir" alt="" />

                      <div className="ms-2">
                        <span  className='blue'>CAKE</span> <br />
                        <p>PANCAKE SWAP TOKEN</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12 d-flex">
                      <img src={logo7} className="img_cir" alt="" />

                      <div className="ms-2">
                        <span  className='blue'>EPS</span> <br />
                        <p>Ellipsis</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12 d-flex">
                      <img src={logo8} className="img_cir" alt="" />

                      <div className="ms-2">
                        <span  className='blue'>ETH</span> <br />
                        <p>Ethereum Token</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12 d-flex">
                      <img src={logo9} className="img_cir" alt="" />

                      <div className="ms-2">
                        <span className='blue'>NRV</span> <br />
                        <p >Nerve Finance</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12 d-flex">
                      <img src={logo10} className="img_cir" alt="" />

                      <div className="ms-2">
                        <span  className='blue'>TKO</span> <br />
                        <p>TokoCrypto</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12 d-flex">
                      <img src={logo11} className="img_cir" alt="" />

                      <div className="ms-2">
                        <span  className='blue'>USDT</span> <br />
                        <p>Tether USD</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12 d-flex">
                      <img src={logo12} className="img_cir" alt="" />

                      <div className="ms-2">
                        <span  className='blue'>VAI</span> <br />
                        <p>VAI stablecoin</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12 d-flex">
                      <img src={logo13} className="img_cir" alt="" />

                      <div className="ms-2">
                        <span  className='blue'>WBNB</span> <br />
                        <p>Wrapped BNB</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12 d-flex">
                      <img src={logo2} className="img_cir" alt="" />

                      <div className="ms-2">
                        <span  className='blue'>XVS</span> <br />
                        <p>Venus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moda;
