import React from 'react'
import './appdownload.css'
import { assets } from '../../assets/assets'

const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/> Food Zone App</p>
        {
            <div className="app-download-platforms">
                <img src={assets.play_store } alt="" />
                <img src={assets.app_store } alt="" />
            </div>
        }
      
    </div>
  )
}

export default Appdownload
