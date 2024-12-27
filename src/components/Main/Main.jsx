import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='Main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user} alt="" />
        </div>
        <div className="main-container">
            {!showResult
            ?<>
            <div className="greet">
                <p><span>Hello, there</span></p>
                <p>How can I help you Today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest scenic routes for a road trip through the countryside</p>
                    <img src={assets.compass} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize the importance of urban planning in sustainable cities</p>
                    <img src={assets.bulb} alt="" />
                </div>
                <div className="card">
                    <p>What are some unique team bonding ideas for a remote work environment?</p>
                    <img src={assets.message} alt="" />
                </div>
                <div className="card">
                    <p>How can I optimize the performance of this JavaScript function?</p>
                    <img src={assets.code} alt="" />
                </div>
            </div>
            </>
            :<div className='result '>
                <div className="result-title">
                    <img src={assets.user} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    
                </div>
            </div>
            }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Ask Gemini' />
                    <div>
                        <img src={assets.gallery} alt="" />
                        <img src={assets.mic} alt="" />
                        {input?<img onClick={()=>onSent()} src={assets.send} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inacurate info, including about people, so double-check its responses.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main