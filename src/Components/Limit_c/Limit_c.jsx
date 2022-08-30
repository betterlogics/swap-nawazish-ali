import React from "react";
import "./Limit_c.css";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Moda from "../Moda/Moda";
import {MdOutlineContentCopy} from 'react-icons/md'
import Connect from "../Connect/Connect";

function Limit_c() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <div className="Limit_main">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-2 col-2">
                    <svg
                      viewBox="0 0 23 22"
                      color="textSubtle"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      class="sc-8a800401-0 hFFRYD"
                    >
                      <path
                        d="M21.5 1l-20 20"
                        stroke-width="2"
                        stroke="currentColor"
                        stroke-linecap="round"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.033 19H19.5a1 1 0 100-2H9.033l-2 2zm3-3H18.5a1 1 0 001-1V6.533l-2 2V14h-2v-3.467l-2 2V14h-1.467l-2 2zm.936-8H10.5a1 1 0 00-1 1v.469L10.969 8zm-2 2L5.5 13.469V11a1 1 0 011-1h2.469zM4.5 14.469l-2 2V6a1 1 0 012 0v8.469z"
                      ></path>
                    </svg>
                  </div>
                  <div className="col-md-8  col-8">
                    <p className="card_p ">Swap</p>
                  </div>
                  <div className="col-md-2 col-2">
                    <svg
                      viewBox="0 0 24 24"
                      color="textSubtle"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                      class="sc-8a800401-0 hFFRYD"
                    >
                      <path d="M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <p>Place a limit order to trade at a set price</p>
                  </div>
                </div>
                <div className="line1"></div>

                <div className="row">
                  <div className="d-flex">
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
                    <div className="col-md-2 col-sm-2 p-0 card_h">
                      <Button
                        className="modal_btn"
                        onClick={() => setModalShow(true)}
                      >
                        BNB
                        <span>
                          {" "}
                          <BsChevronDown className="card_h"></BsChevronDown>
                        </span>{" "}
                      </Button>

                      <Moda
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center mt-4">
                  <div className="col-md-10">
                    <input
                      type="text"
                      name="bnb"
                      placeholder="0.0"
                      className="input_card"
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-3">
                    <AiOutlineArrowDown className="arrow"></AiOutlineArrowDown>
                  </div>
                </div>
                <div className="row">
                  <div className="d-flex">
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
                    <div className="col-md-3     col-sm-2 p-0 card_h">
                      {" "}
                      <Button
                        className="modal_btn"
                        onClick={() => setModalShow(true)}
                      >
                        Cake
                        <span>
                          {" "}
                          <BsChevronDown className="card_h"></BsChevronDown>
                         
                        </span>{" "}
                        <span>
                        <MdOutlineContentCopy></MdOutlineContentCopy>
                        </span>
                      </Button>
                      <Moda
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mt-4">
                  <div className="col-md-10">
                    <input
                      type="text"
                      name="bnb"
                      placeholder="0.0"
                      className="input_card"
                    />
                  </div>
                </div>
                <div className="row justify-content-between mt-3">
                    <div className="col-md-5">
                        <p className="mdp">Slippage Tolerance</p>
                    </div>
                    <div className="col-md-5">
                        <p className="parr">0.5%</p>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <Button
                        className="ffoo"
                        onClick={() => setModalShow2(true)}
                      >
                        Connect Wallet
                      
                      </Button>
                      <Connect
                        show={modalShow2}
                        onHide={() => setModalShow2(false)}
                      />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Limit_c;
