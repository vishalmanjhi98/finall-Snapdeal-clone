import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AttractionsIcon from '@mui/icons-material/Attractions'
import MuseumIcon from '@mui/icons-material/Museum'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded'
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded'
import './LoginT.css'
import { useAuth0 } from '@auth0/auth0-react'

const LoginT = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <div className="LoginT">
      <div className="LoginT__in">
        <h2 id="llog" onClick={() => loginWithRedirect()}>
          New Customer
        </h2>
        <h2 style={{ color: '#c7003d', fontSize: '17px' }}>Signup</h2>
      </div>
      <hr></hr>
      <div className="LoginT__in">
        <AccountCircleIcon />
        <p>My Profile</p>
      </div>
      <hr></hr>
      <div className="LoginT__in">
        <AttractionsIcon />
        <p>Snapdeal Plus Zone</p>
      </div>
      <hr></hr>
      <div className="LoginT__in">
        <MuseumIcon />
        <p>Orders</p>
      </div>
      <hr></hr>
      <div className="LoginT__in">
        <FavoriteRoundedIcon />
        <p>Wishlist</p>
      </div>
      <hr></hr>
      <div className="LoginT__in">
        <ConfirmationNumberRoundedIcon />
        <p>Rewards</p>
      </div>
      <hr></hr>
      <div className="LoginT__in">
        <CardGiftcardRoundedIcon />
        <p>Gift Cards</p>
      </div>
    </div>
  )
}

export default LoginT
