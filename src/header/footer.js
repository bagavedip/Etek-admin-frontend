import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./footerstyles.js";

import FooterLogo from '../image/Footer_logo1.png';

const Footer = () => {
return (
	<Box style={{position: "fixed", left: "0", right: "0", bottom: "0"}}>
		<Container>
			<div>
				<Column style={{float:"right"}}>
					<img src={FooterLogo} style={{width:"75%"}} />
				</Column>
				{/* <Column>
					<p style={{fontSize:"14px", marginBottom:"0px"}}>All rights reserved &copy; 2022</p>
				</Column>
				<Column>
					<i className="fab fa-phone" aria-hidden="true"></i><span style={{ marginLeft: "10px" }}>
					+919876543210
					</span>
				</Column>
				<Column>
					<i className="fab fa-envelope" aria-hidden="true"></i><span style={{ marginLeft: "10px" }}>
					shashi1@gmail.com
					</span>
				</Column>
				<Column>
					<h6>Privacy Policy</h6>
				</Column> */}
			</div>
		</Container>
	</Box>
);
};
export default Footer;
