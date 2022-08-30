import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Liq.css'
import {AiFillSetting} from 'react-icons/ai'
import {MdOutlineHistory} from 'react-icons/md'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineCaretDown}  from 'react-icons/ai'
import Moda from '../Moda/Moda';
import logo4 from '../Assets/logo4.png'
import Connect from '../Connect/Connect';

function Liq(props) {
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
  return (
    <div>
       <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
      
        <div className="header_ico d-flex  cxvdf">
          <AiOutlineArrowLeft className='mt-3'></AiOutlineArrowLeft>
              <h4 className='ms-2  res_ha'>Add Liquidity</h4>
                 <div className="icccon">
            <AiFillSetting className='h_icon'></AiFillSetting>
            <MdOutlineHistory></MdOutlineHistory></div>
          </div>
           <p className='h_Para'>Receive LP tokens and earn 0.17% trading fees</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <h5 className='bl h5_he'>Chose a valid pair</h5>
       <div className="container">
        <div className="row mt-5">
          <div className="col-lg-5 col-md-5">
          <Button
                        className="btn_hh"
                        onClick={() => setModalShow(true)}
                      >
                           <svg viewBox="0 0 96 96" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 cziRfP" style={{marginRight: '8px'}}><circle cx="48" cy="48" r="48" fill="#F0B90B"></circle><path d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z" fill="white"></path></svg>
                        BNB
                        <AiOutlineCaretDown></AiOutlineCaretDown>
                        <span>
                          {" "}
                          
                        </span>{" "}
                      </Button>

                      <Moda
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
          </div>
          <div className="col-lg-2 col-md-2 res_btn1">
            +
          </div>
          <div className="col-lg-5 col-md-5">

            <button className='btn btn_hh' 
            onClick={() => setModalShow(true)}
            >
            
          <img src={logo4} className=' img_cir asdf' alt="" />
            cake 
            <AiOutlineCaretDown></AiOutlineCaretDown>
            </button>
            <Moda
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
          </div>
         
        </div>
        <div className="rowfsf">
          
              <p className='liq_PaRa'>LP reward APR</p>
         
       
              <p className='liqq_pa'>LP reward APR</p>
          
        </div>
       </div>
               
      </Modal.Body>
      <Modal.Footer>
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
    
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default Liq
