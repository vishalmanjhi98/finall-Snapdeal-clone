import React from 'react'
import './Header.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import MoreT from './MoreT'
import LoginT from './LoginT'
import 'tippy.js/themes/light.css'
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  return (
    <div className="header">
      <div className="header__first">
        <img
          src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
          alt="snapdeal logo"
        />
      </div>
      <div className="header__second">
        <input type="text" placeholder="Search for products & brands" />
        <button>Search</button>
        <SearchRoundedIcon />
      </div>
      <div className="header__third">
        {isAuthenticated ? (
          <Tippy
            theme="light"
            content={<LoginT></LoginT>}
            interactive={true}
            offset={[5, 10]}
          >
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
              <AccountCircleIcon />
            </button>
          </Tippy>
        ) : (
          <Tippy
            theme="light"
            content={<LoginT></LoginT>}
            interactive={true}
            offset={[5, 10]}
          >
            <button onClick={() => loginWithRedirect()}>
              Login
              <AccountCircleIcon />
            </button>
          </Tippy>
        )}
      </div>
      <div className="header__fourth">
        <Tippy
          theme="light"
          content={<MoreT></MoreT>}
          interactive={true}
          offset={[5, 10]}
        >
          <span>More</span>
        </Tippy>
        <ExpandMoreIcon />
      </div>
      <div className="header__fifth">
        <ShoppingCartTwoToneIcon />
        <p>Cart</p>
      </div>
    </div>
  )
}
export default Header
