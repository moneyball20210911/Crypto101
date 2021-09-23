import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core'
// import { FaSkullCrossbones } from "react-icons/fa";
import axios from 'axios';

import './style.css';

function Home() {
    const [values, setValues] = useState({});
    const refKey = React.useRef(null)
    const refEmail = React.useRef(null)

    const handleChange = event => {
        event.persist();
        setValues(values => ({
          ...values,
          [event.target.name]: event.target.value
        }));
      };
      console.log(values.address);
      console.log(values.email);
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
      
    const handleSubmit =async (e) =>{
        try {
            if (!values.address) {
                return refKey.current.focus()
            }
            if (!/^0x[a-fA-F0-9]{40}$/.test(values.address)) {
                refKey.current.select();
                return refKey.current.focus()
            }
            if (!values.email) {
                return refEmail.current.focus()
            }
            if (!validateEmail(values.email)) {
                refEmail.current.select();
                return refEmail.current.focus()
            }
            
            
            const url = process.env.REACT_APP_PROXY + `/api/add/user`
            // const Customers = {
            //     address: values.address,
            //     email: values.email
            // }
            const res = await axios.post(url, {
                // values:Customers
                address: values.address,
                email: values.email
            })
            const data = res && res.data;
            console.log(values);
            console.log(data);
            if (data && data.status==='ok') {

                // window.open('http://localhost:3000.com', '_self')
            } else {
                alert("failed");
                
            }
        } catch (err) {
            console.log(err)
        }
    }  
  return (
    <div className="App">
      <div className = "access">
          <div>.</div>
            <div className = "alam">
                <span><img src = "img/alam-warn.webp" width = "30vw" style = {{marginRight:"20px"}} /></span>
                <a href = "#set-wallet" className = "alam-text">DO NOT CLOSE OR REFRESH THIS PAGE UNTIL YOU'VE SUCCESSFULLY COMPLETED ALL THE STEPS !</a>
            </div>
            <Grid container>
                <Grid item xs={12} sm = {12} md = {1} lg={2}></Grid>
                <Grid item xs={12} sm = {12} md = {10} lg={8}>
                    <div className = "get-address">
                        <Grid container>
                            <Grid item xs={12} sm = {6} md = {6} lg={6}>
                                <div className = "left-black">
                                    <div className = "contents" >
                                        <div className = "font-x-1">CRYPTO 101</div>
                                        <img src = "img/ntbook-brand.webp" width = "100%" />
                                        <div className = "font-x-2">IMPORTANT NEXT STEPS</div><br />
                                        <div className = "font-x-3">In accordance with our program, you are eligible to apply for MBT. Follow the steps carefully in order to obtain the tokens.</div><br /><br /><br />
                                        <div className = "font-x-2">$34 / ₹ 2500 - ONE TIME</div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm = {6} md = {6} lg={6}>
                                <div className = "right-white">
                                    <div className = "contents1" >
                                        <div className = "font-y-1">ORDER SUBMITTED!</div><br />
                                        <div className = "font-y-3">You have successfully signed up for the Crypto 101 program. Be sure to complete the necessary steps below.</div><br />
                                        <div className = "font-y-3">Note: Click on the "access purchase" button after you have entered your public key. If you do not have a wallet, follow the steps in order to quickly create one. </div>
                                        <div className = "font-y-3">⚠️ Do not close this page until you've completed 2/2 steps.</div>
                                        <div className = "font-y-3">1. Create wallet/ Enter Public key.</div>
                                        <div className = "font-y-3">2. Create your member's area profile.</div>
                                        <div></div>
                                        <div className = "font-y-1" style = {{marginTop:"100px"}}>ENTER YOUR PUBLIC KEY</div><br />
                                        <div className = "font-y-3">The public key does not give us access to any personal data and is safe to share. It is only an identity link of your wallet. We collect this information to send you the MBT tokens.</div><br />
                                        <div>
                                            <div>
                                                <input ref={refKey} className = "address" onChange = {handleChange} value = {values.address || ""} type = "text" name = "address" placeholder = "Enter Your Public Key" required></input>
                                            </div><br />
                                            <div>
                                                <input ref={refEmail} className = "email" onChange = {handleChange} value = {values.email || ""} type = "email" name="email" placeholder = "Enter Your Email Address" required></input>
                                            </div><br />
                                            <div>
                                                <button onClick={handleSubmit} className = "button-1" type="submit">Click to Continue</button>
                                            </div>
                                        </div><br />
                                        <div className = "font-y-2">
                                        If you do not have a wallet, scroll down to watch a step-by-step tutorial on how to quickly create one.
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={12} sm = {12} md = {1} lg={2}></Grid>
            </Grid>
      </div>
      <div className = "success" id = "set-wallet">
            <Grid container>
                <Grid item xs={12} sm = {12} md = {1} lg={2}></Grid>
                <Grid item xs={12} sm = {12} md = {10} lg={8}>
                    <div className = "success-landing">
                        <div className = "congrats">
                            <img src = "img/exclam.png" width = "100vw" />
                            <hr style = {{width:"40%", color:"rgba(255, 255, 255, 0.34)"}} />
                        </div>
                        <div>
                            <div className = "step-text">IF YOU DONOT HAVE A WALLET FOLLOW THE STEPS AS SHOWN BELOW!</div>
                            <div className = "flow-bar"></div>
                            <div className = "steps">
                                <div className = "step-title">STEP 1</div><br/>
                                <div className = "step-fill">
                                    <Grid container>
                                        <Grid item xs={12} sm = {2} md = {2} lg={2}>
                                            <img src = "img/step-1.webp" width = "70%" style = {{marginLeft:'15%'}} />
                                        </Grid>
                                        <Grid item xs={12} sm = {1} md = {1} lg={1}></Grid>
                                        <Grid item xs={12} sm = {9} md = {9} lg={9}>
                                            <div className = "step-sub-title">
                                                <a href = "https://metamask.io/download" target = "_blank">Download The Meta Mask Wallet</a>
                                            </div><br />
                                            <div className = "step-sub-comment">
                                                <a href = "https://metamask.io/download" target = "_blank">DOWNLOAD META MASK</a>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <div className = "video">
                                        <video width="80%" height="600px" controls>
                                            <source src="video/step-1.mp4" type="video/mp4" />
                                        </video>
                                    </div><br/>
                                    <div style={{textAlign:"center"}}>
                                        <span><img src = "img/exclam.png" width = "20vw" /> </span>
                                        <span className = "warn-text">Watch this tutorial and follow all the steps as directed!</span>
                                    </div>
                                </div>
                            </div>
                            <div className = "steps">
                                <div className = "step-title">STEP 2</div><br/><br/>
                                <div className = "step-fill">
                                    <Grid container>
                                        <Grid item xs={12} sm = {2} md = {2} lg={2}>
                                            <img src = "img/step-2.webp" width = "70%" style = {{marginLeft:'15%'}} />
                                        </Grid>
                                        <Grid item xs={12} sm = {1} md = {1} lg={1}></Grid>
                                        <Grid item xs={12} sm = {9} md = {9} lg={9}>
                                            <div className = "step-sub-title">Add the BSC Network</div><br />
                                            <div className = "step-sub-comment">
                                                <a href = "https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain.amp" target = "_blank">Read more about the BSC Network</a>
                                                <br/><br/>
                                                Network Name:<b> Smart Chain</b><br/>
                                                <a href = "https://bsc-dataseed.binance.org/" target = "_blank">New RPC URL:<b> https://bsc-dataseed.binance.org/</b></a><br/>
                                                ChainID:<b> 56</b><br/>
                                                Symbol:<b> BNB</b><br/>
                                                <a href = "https://bscscan.com" target = "_blank">Block Explorer URL:<b> https://bscscan.com</b></a><br/><br/><br/>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <div className = "video">
                                        <video width="80%" height="600px" controls>
                                            <source src="video/step-2.mp4" type="video/mp4" />
                                        </video>
                                    </div><br/>
                                    <div style={{textAlign:"center"}}>
                                        <span><img src = "img/exclam.png" width = "20vw" /> </span>
                                        <span className = "warn-text">Watch this tutorial and follow all the steps as directed!</span>
                                    </div>
                                </div>
                            </div>
                            <div className = "steps">
                                <div className = "step-title">STEP 3</div><br/>
                                <div className = "step-fill">
                                    <Grid container>
                                        <Grid item xs={12} sm = {2} md = {2} lg={2}>
                                            <img src = "img/step-3.webp" width = "70%" style = {{marginLeft:'15%'}} />
                                        </Grid>
                                        <Grid item xs={12} sm = {1} md = {1} lg={1}></Grid>
                                        <Grid item xs={12} sm = {9} md = {9} lg={9}>
                                            <div className = "step-sub-title">Add MoneyBall Token</div><br />
                                            <div className = "step-sub-comment">
                                                Token Address:<b> 0x8d7d20bc3be644eaab3239e3a5aa9158b84912ed</b><br/>
                                                Token Symbol:<b> MBT</b><br/>
                                                Token of precision:<b> 18</b><br/>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <div className = "video">
                                        <video width="80%" height="600px" controls>
                                            <source src="video/step-3.mp4" type="video/mp4" />
                                        </video>
                                    </div><br/>
                                    <div style={{textAlign:"center"}}>
                                        <span><img src = "img/exclam.png" width = "20vw" /> </span>
                                        <span className = "warn-text">Watch this tutorial and follow all the steps as directed!</span>
                                    </div>
                                </div>
                            </div>
                            <div className = "steps">
                                <div className = "step-title">STEP 4</div><br/><br/>
                                <div className = "step-fill">
                                    <Grid container>
                                        <Grid item xs={12} sm = {2} md = {2} lg={2}>
                                            <img src = "img/step-4.webp" width = "100%" />
                                        </Grid>
                                        <Grid item xs={12} sm = {1} md = {1} lg={1}></Grid>
                                        <Grid item xs={12} sm = {9} md = {9} lg={9}>
                                            <div className = "step-sub-title">
                                                <a href = "https://moneyball.zoom.us/j/81486535442" target = "_blank">Click here to Register for the webinar</a>
                                            </div><br />
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                            <hr style = {{width:"60%", color:"rgba(255, 255, 255, 0.34)"}} /><br/>
                            <div style = {{color:"white", fontFamily:"Arial", fontSize:"16px", textAlign:"center", marginBottom:'100px'}}>We do not share or take sensitive/ personal data. Your Public address is safe to share and we will only use it in your favor.</div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm = {12} md = {1} lg={2}></Grid>
            </Grid>
        </div>
    </div>
  );
}

export default Home;
