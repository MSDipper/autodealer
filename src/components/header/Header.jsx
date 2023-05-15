const Header = () => {
    return ( 
        <>
            <div id="header">
                <div className="top_info">
                    <div className="logo">
                        <a href="#">Auto<span>Dealer</span></a>
                    </div>
                    <div className="header_contacts">
                        <div className="phone">+1 (800) 455-55-95</div>
                        <div>WinterJuice, LLC, 1875 South Grant Street, Suite 680, San Mateo, CA 94402</div>
                    </div>
                    <div className="socials">
                        <a href="#"><img src="images/fb_icon.png" alt=""/></a>
                        <a href="#"><img src="images/twitter_icon.png" alt=""/></a>
                        <a href="#"><img src="images/in_icon.png" alt=""/></a>
                    </div>
                </div>
                <div className="bg_navigation">
                    <div className="navigation_wrapper">
                        <div id="navigation">
                            <span>Home</span>
                            <ul>
                                <li className="current"><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">For Salers</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </div>
                        <div id="search_form">
                            <form method="get" action="#">
                                <input type="text" onblur="if(this.value=='') this.value='Search on site';" onfocus="if(this.value=='Search on site') this.value='';" value="Search on site" className="txb_search"/>
                                <input type="submit" value="Search" className="btn_search"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Header;