import React from 'react'
import {AiFillSetting} from 'react-icons/ai'
import {BsClockHistory} from 'react-icons/bs'
import Liq from '../Liq/Liq';
import './Liquid.css'
import Button from "react-bootstrap/Button";


function Liquid() {
    const [modalShow3, setModalShow3] = React.useState(false);
  return (
    <div className='Limit_main'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="row justify-content-between">
                                <div className="col-lg-8 col-8 ps-0">
                                    <h4 className='blue'>Your Liquidity</h4>
                                </div>
                                <div className="col-lg-2  col-2">
                                    <AiFillSetting></AiFillSetting>
                                </div>
                                <div className="col-lg-2 col-2">
                                    <BsClockHistory></BsClockHistory>
                                </div>
                            </div>
                             <div className="row">
                                <div className="col-lg-6 p-0">
                                    <p className='liquid_para'>Remove liquidity to receive tokens back</p>
                                </div>
                             </div>
                               <div className="row">
                                <div className="col-lg-12 p-0">
                                    <div className="li_para">
                                        <p className='res_p'>Connect to a wallet to view your liquidity.</p>
                                    </div>

                                </div>
                               </div>
                               <div className="row justify-content-center mt-3">
                                <div className="col-lg-6">
                                    
                                    <Button
                        className="btn_liaa"
                        onClick={() => setModalShow3(true)}
                      >
                        Connect Wallet
                      
                      </Button>
                      <Liq
                        show={modalShow3}
                        onHide={() => setModalShow3(false)}
                      />

                                </div>
                               </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row justify-content-center mt-4">
                <div className="col-lg-5">
                      <div className="card card_liq">
                          <div className="card-body ">
                          <span role="img" aria-label="pancake-icon">🥞</span>
                          <span> By adding liquidity you'll earn 0.17% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.</span>
                          </div>
                      </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Liquid
