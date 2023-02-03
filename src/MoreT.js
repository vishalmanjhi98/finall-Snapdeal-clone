import React from 'react'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined'
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone'
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'
import './MoreT.css'

const MoreT = () => {
  return (
    <div className="moret">
      <div className="moret__in">
        <NotificationsActiveOutlinedIcon />
        <p>Notification Preferences</p>
      </div>
      <hr></hr>
      <div className="moret__in">
        <MonetizationOnTwoToneIcon />
        <p>Sell on Snapdeal</p>
      </div>
      <hr></hr>
      <div className="moret__in">
        <LiveHelpOutlinedIcon />
        <p>24x7 Customer Care</p>
      </div>
      <hr></hr>
      <div className="moret__in">
        <AutoGraphIcon />
        <p>Advertise</p>
      </div>
      <hr></hr>
      <div className="moret__in">
        <DownloadForOfflineIcon />
        <p>Download App</p>
      </div>
    </div>
  )
}

export default MoreT
