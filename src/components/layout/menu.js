import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MenuIcon from "@material-ui/icons/Menu"

function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="mobile_menu">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon className="contact-icon" fontSize="large" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link className="mobile-nav-item" to="/blog">
            Blog
          </Link>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>
          <Link className="mobile-nav-item" to="/projects">
            Projects
          </Link>
        </MenuItem> */}
        <MenuItem onClick={handleClose}>
          <Link className="mobile-nav-item" to="/resume">
            Resume
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className="mobile-nav-item" to="/contact">
            Contact
          </Link>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>
          <Link className="mobile-nav-item" to="/services">
            Services
          </Link>
        </MenuItem> */}
      </Menu>
    </div>
  )
}
export default MobileMenu;
