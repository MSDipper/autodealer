const Footer = () => {
    return ( 
        <>
            		<div id="footer">
			<div className="bg_top_footer">
				<div className="top_footer">
					<div className="f_widget first">
						<h3><strong>About</strong> us</h3>
						<a href="#" className="footer_logo">AutoDealer</a>
						<p>Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do eiusmod tempor.
Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed do eius  mod tempor incididunt ut.</p>
					</div>
					<div className="f_widget divide second">
						<h3><strong>Open</strong> hours</h3>
						<ul className="schedule">
							<li>
								<strong>Monday</strong>
								<span>9:30 am - 6:00 pm</span>
							</li>
							<li>
								<strong>Tuesday</strong>
								<span>9:30 am - 6:00 pm</span>
							</li>
							<li>
								<strong>Wednesday</strong>
								<span>9:30 am - 6:00 pm</span>
							</li>
							<li>
								<strong>Thursday</strong>
								<span>9:30 am - 6:00 pm</span>
							</li>
							<li>
								<strong>Friday</strong>
								<span>9:30 am - 6:00 pm</span>
							</li>
							<li>
								<strong>Saturday</strong>
								<span>9:30 am - 4:00 pm</span>
							</li>
							<li>
								<strong>Sunday</strong>
								<span>closed</span>
							</li>
						</ul>
					</div>
					<div className="fwidget_separator"></div>
					<div className="f_widget third">
						<h3><strong>Our</strong> contacts</h3>
						<div className="f_contact f_contact_1"><strong>Address Info:<br/></strong>Lorem ipsum Dolor sit amet, 658 Consectetur, Adipisicing 56 D</div>
						<div className="f_contact f_contact_2"><strong>Phone:</strong> +1 (234) 567-8901 <br/><strong>FAX:</strong> +1 (234) 567-8902</div>
						<div className="f_contact f_contact_3"><strong>Email:</strong> <a href="mailto:#">testmail@sitename.com</a></div>
					</div>
					<div className="f_widget divide last frame_wrapper">
						<iframe width="204" height="219" src="https://maps.google.com.ua/maps?f=q&amp;source=s_q&amp;hl=ruamp;hl=en&amp;geocode=&amp;q=%D0%9C%D0%B0%D0%BD%D1%85%D1%8D%D1%82%D1%82%D0%B5%D0%BD,+%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA,+%D0%A1%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5+%D0%A8%D1%82%D0%B0%D1%82%D1%8B+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8&amp;aq=0&amp;oq=%D0%BC%D0%B0%D0%BD%D1%85&amp;sll=48.382803,31.17461&amp;sspn=7.573826,21.643066&amp;ie=UTF8&amp;hq=&amp;hnear=%D0%9C%D0%B0%D0%BD%D1%85%D1%8D%D1%82%D1%82%D0%B5%D0%BD,+%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA,+%D0%9D%D1%8C%D1%8E+%D0%99%D0%BE%D1%80%D0%BA,+%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA,+%D0%A1%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D1%91%D0%BD%D0%BD%D1%8B%D0%B5+%D0%A8%D1%82%D0%B0%D1%82%D1%8B+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8&amp;t=m&amp;ll=40.79042,-73.959961&amp;spn=0.113849,0.139389&amp;z=11&amp;iwloc=A&amp;output=embed"></iframe>
					</div>
				</div>
			</div>
			<div className="bottom_footer">
				<div className="f_widget ">
					<h3><strong>About</strong> us</h3>
					<ul>
						<li><a href="#">Contact</a></li>
						<li><a href="#">Our Partners</a></li>
						<li><a href="#">Advertising Online</a></li>
						<li><a href="#">Site Map</a></li>
					</ul>
				</div>
				<div className="f_widget divide">
					<h3><strong>Need</strong> help?</h3>
					<ul>
						<li><a href="#">How do I add an offer?</a></li>
						<li><a href="#">How do I find a vehicle</a></li>
						<li><a href="#">Price list</a></li>
						<li><a href="#">Office for car dealers</a></li>
					</ul>
				</div>
				<div className="fwidget_separator"></div>
				<div className="f_widget">
					<h3><strong>User</strong> area</h3>
					<ul>
						<li><a href="#">Add an offer</a></li>
						<li><a href="#">Register dealder</a></li>
						<li><a href="#">Login Dealer</a></li>
						<li><a href="#">News</a></li>
					</ul>
				</div>
				<div className="f_widget divide last">
					<h3><strong>Find</strong> us here</h3>
					<ul className="horizontal">
						<li><a href="#"><img src="images/fb_icon.png" alt=""/></a></li>
						<li><a href="#"><img src="images/twitter_icon.png" alt=""/></a></li>
						<li><a href="#"><img src="images/in_icon.png" alt=""/></a></li>
					</ul>
				</div>
			</div>
			<div className="copyright_wrapper">
				<div className="copyright">&copy; 2013 Auto Sale. All Rights Reserved.</div>
			</div>
		</div>
    </>
    );
}
 
export default Footer;