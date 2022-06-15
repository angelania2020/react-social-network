import n from './Navbar.module.css';

// let n = {
//     "nav": "Navbar_nav__3VQJI",
//     "item": "Navbar_item__12rdH",
// }

const Navbar = () => {
    return <nav className={n.nav}>
        <div className={n.item}><a>Profile</a></div>
        <div className="item"><a href="">Messages</a></div>
        <div className="item"><a href="">News</a></div>
        <div className="item"><a href="">Music</a></div>
        <div className="item"><a href="">Settings</a></div>
    </nav>
}

export default Navbar;