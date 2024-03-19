import React from "react";
import { BreakpointDesktopWrapper } from "./BreakpointDesktopWrapper";
import { ColorDark } from "./ColorDark";
import { Contact } from "./Contact";
import { Cta } from "./Cta";
import { DivWrapper } from "./DivWrapper";
import { Facebook } from "./Facebook";
import { Faq } from "./Faq";
import { Header } from "./Header";
import { IconComponentNode } from "./IconComponentNode";
import { Instagram } from "./Instagram";
import { Layout } from "./Layout";
import { Layout24 } from "./Layout24";
import { LinkedIn } from "./LinkedIn";
import { NamecandidateNameStyleSecondaryScore10003 } from "./NamecandidateNameStyleSecondaryScore10003";
import { Portfolio } from "./Portfolio";
import { Relume } from "./Relume";
import { StylePrimarySmall } from "./StylePrimarySmall";
import { StyleSecondary } from "./StyleSecondary";
import { Team } from "./Team";
import { Testimonial } from "./Testimonial";
import { TypeDefault } from "./TypeDefault";
import { X } from "./X";
import { Youtube } from "./Youtube";
import "./style.css";

export const Home = (): JSX.Element => {
  return (
    <div className="home">
      <div className="navbar">
        <div className="content-25">
          <div className="div-3">
            <ColorDark className="color-dark" />
          </div>
          <div className="column-4">
            <div className="column-5">
              <div className="link-wrapper">
                <div className="link-2">Discover</div>
              </div>
              <div className="link-wrapper">
                <div className="link-2">About Us</div>
              </div>
              <div className="link-wrapper">
                <div className="link-2">Services</div>
              </div>
              <div className="link-four">
                <div className="nav-link-dropdown">
                  <div className="link-2">More</div>
                  <img className="icon-instance-node-3" alt="Chevron down" src="chevron-down.svg" />
                </div>
              </div>
            </div>
            <StyleSecondary
              className="style-secondary-small-true-dark-mode-false-icon-position-no-icon"
              divClassName="design-component-instance-node-2"
              text="Go"
            />
            <StylePrimarySmall
              className="style-primary-small-true-dark-mode-false-icon-position-no-icon"
              divClassName="design-component-instance-node-3"
              text="Submit"
            />
          </div>
        </div>
      </div>
      <Header
        breakpoint="desktop"
        className="design-component-instance-node-4"
        placeholderImage="placeholder-image-30.png"
        stylePrimarySmallWrapperDivClassName="design-component-instance-node-3"
        stylePrimarySmallWrapperStylePrimarySmallClassName="design-component-instance-node-5"
        stylePrimarySmallWrapperText="Learn More"
        styleSecondaryWrapperText="Sign Up"
        text="Building Ventures in South East Asia"
        text1="Jesselton Capital is a technology company that specializes in venture building within South East Asia. We invest in technology solutions that solve problems in the B2B and B2B2C space."
      />
      <Layout
        breakpoint="desktop"
        className="design-component-instance-node-4"
        placeholderImage="placeholder-image-31.png"
        text="Revolutionizing B2B and B2B2C Solutions with Innovative Technology"
        text1="At Jesselton Capital, we are dedicated to transforming the way businesses tackle challenges in the B2B and B2B2C sectors. Through our cutting-edge technology solutions, we empower companies to overcome obstacles and achieve their goals."
        text2="Innovative Solutions"
        text3="We empower businesses to thrive by providing them with game-changing technology solutions."
        text4="Empowering Businesses"
      />
      <BreakpointDesktopWrapper
        border="border-4.svg"
        border1="border-6.svg"
        borderClassName="layout-28"
        borderClassNameOverride="layout-instance"
        breakpoint="desktop"
        className="design-component-instance-node-4"
        img="border-5.svg"
        placeholderImage="placeholder-image-32.png"
        text="Innovation and Growth"
        text1="We foster innovation and drive growth by investing in cutting-edge technologies and disruptive ideas."
      />
      <DivWrapper
        breakpoint="desktop"
        className="design-component-instance-node-4"
        icon={<Relume className="icon-relume-2" />}
        icon1={<Relume className="icon-relume-2" />}
        override={<Relume className="icon-relume-2" />}
        placeholderImage="placeholder-image-33.png"
        text="Unlocking Opportunities for Startups and Businesses with Jesselton Capital"
        text1="Partnering with Jesselton Capital provides startups and businesses with a range of benefits. Our expertise in venture building, combined with our focus on technology solutions, allows us to help startups and businesses solve problems in the B2B and B2B2C space."
        text2="Opportunities for Growth and Expansion"
      />
      <Team
        breakpoint="desktop"
        className="design-component-instance-node-4"
        img="placeholder-image-18.png"
        placeholderImage="placeholder-image-17.png"
        placeholderImage1="placeholder-image-19.png"
        placeholderImage2="placeholder-image-20.png"
        placeholderImage3="placeholder-image-21.png"
        placeholderImage4="placeholder-image-22.png"
        placeholderImage5="placeholder-image-23.png"
        placeholderImage6="placeholder-image-24.png"
        text="Innovative"
        text1="Meet Our Team"
        text2="Get to know the talented individuals behind Jesselton Capital."
        text3="We&#39;re hiring!"
        text4="Join our team and be part of our exciting journey."
        text5="Open positions"
      />
      <Layout24
        breakpoint="desktop"
        className="design-component-instance-node-4"
        placeholderImage="placeholder-image-25.png"
        text="Building technology solutions to drive innovation and growth in Southeast Asia."
        text1="At Jesselton Capital, we are committed to leveraging technology to solve complex problems in the B2B and B2B2C space. Our mission is to drive innovation and growth in Southeast Asia by investing in and building cutting-edge technology solutions."
      />
      <Portfolio
        breakpoint="desktop"
        className="design-component-instance-node-4"
        img="placeholder-image-27.png"
        placeholderImage="placeholder-image-26.png"
        text="Investments"
        text1="Building Success Through Technology"
        text2="Explore our impactful portfolio of companies"
        text3="Company B"
        text4="Digital"
        text5="Marketing"
        text6="Analytics"
        text7="Company B is a leading provider of digital marketing analytics solutions. Our advanced analytics platform helps businesses optimize their marketing strategies and drive better results. With our data-driven insights, businesses can make informed decisions and stay ahead of the competition."
      />
      <Cta
        breakpoint="desktop"
        className="design-component-instance-node-4"
        namecandidateNameStyleSecondaryScore10001Text="Contact"
        placeholderImage="placeholder-image-28.png"
        stylePrimarySmallFalseDarkModeFalseIconPositionNoIconDivClassName="design-component-instance-node-3"
        stylePrimarySmallFalseDarkModeFalseIconPositionNoIconStylePrimarySmallClassName="design-component-instance-node-5"
        stylePrimarySmallFalseDarkModeFalseIconPositionNoIconText="Submit"
        text="Unlock Your Startup Potential"
        text1="Submit your pitch or get in touch with Jesselton Capital for potential investment opportunities."
      />
      <Faq
        breakpoint="desktop"
        className="design-component-instance-node-4"
        text="Common"
        text1="Find answers to frequently asked questions about venture building and investments in Jesselton Capital."
        text2="How can I contact?"
        text3="You can contact us by filling out the form on our Contact Us page or by sending an email to info@jesseltoncapital.com. We will get back to you as soon as possible."
      />
      <Testimonial
        avatarImage="avatar-image-4.png"
        avatarImage1="avatar-image-5.png"
        avatarImage2="avatar-image-6.png"
        breakpoint="desktop"
        className="design-component-instance-node-4"
        img="stars-4.svg"
        stars="stars-3.svg"
        stars1="stars-5.svg"
        text="Satisfied Clients"
        text1="Hear what our partners and invested companies have to say about working with Jesselton Capital."
        text2="“We highly recommend Jesselton Capital for their innovative solutions.”"
        text3="David Johnson"
        text4="COO, DEF Corporation"
      />
      <Contact
        breakpoint="desktop"
        className="design-component-instance-node-4"
        placeholderImage="placeholder-image-29.png"
        text="Connecting"
        text1="Get in Touch"
        text2="We would love to hear from you. Reach out to us for any inquiries."
        text3="info@jesseltoncapital.com"
        text4="+1 (555) 123-4567"
        text5="123 Main St, New York, NY 10001"
      />
      <div className="footer">
        <div className="content-26">
          <div className="links">
            <div className="color-dark-wrapper">
              <IconComponentNode className="color-dark" />
            </div>
            <div className="column-6">
              <div className="text-wrapper-7">About Us</div>
              <div className="footer-links">
                <div className="link-3">
                  <div className="text-wrapper-8">Home</div>
                </div>
                <div className="link-3">
                  <div className="text-wrapper-8">Team</div>
                </div>
                <div className="link-3">
                  <div className="text-wrapper-8">Portfolio</div>
                </div>
                <div className="link-3">
                  <div className="text-wrapper-9">Submit Pitch</div>
                </div>
                <div className="link-3">
                  <div className="text-wrapper-8">Contact Us</div>
                </div>
              </div>
            </div>
            <div className="column-6">
              <div className="text-wrapper-7">Column One</div>
              <div className="footer-links">
                <div className="link-3">
                  <div className="text-wrapper-8">Link One</div>
                </div>
                <div className="link-3">
                  <div className="text-wrapper-8">Link Two</div>
                </div>
                <div className="link-3">
                  <div className="text-wrapper-8">Link Three</div>
                </div>
                <div className="link-3">
                  <div className="text-wrapper-8">Link Four</div>
                </div>
                <div className="link-3">
                  <div className="text-wrapper-8">Link Five</div>
                </div>
              </div>
            </div>
            <div className="column-6">
              <div className="text-wrapper-7">Column Two</div>
              <div className="footer-links">
                <div className="link-3">
                  <div className="text-wrapper-8">Link Six</div>
                </div>
                <div className="link-3">
                  <div className="text-wrapper-8">Link Seven</div>
                </div>
                <div className="link-3">
                  <div className="text-wrapper-8">Link Eight</div>
                </div>
                <div className="link-3">
                  <div className="text-wrapper-9">Link Nine</div>
                </div>
                <div className="link-3">
                  <div className="text-wrapper-8">Link Ten</div>
                </div>
              </div>
            </div>
          </div>
          <div className="newslatter">
            <div className="div-4">
              <div className="text-wrapper-7">Subscribe</div>
              <p className="join-our-newsletter">Join our mailing list to receive updates and news.</p>
            </div>
            <div className="div-4">
              <div className="form">
                <TypeDefault
                  className="type-default-instance"
                  divClassName="design-component-instance-node-2"
                  text="Enter email address"
                />
                <NamecandidateNameStyleSecondaryScore10003
                  className="style-secondary-9"
                  divClassName="design-component-instance-node-2"
                  text="Subscribe"
                />
              </div>
              <p className="by-subscribing-you">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>
        </div>
        <div className="credits">
          <div className="divider" />
          <div className="row-3">
            <div className="div-3">
              <p className="element-relume-all">© 2023 Jesselton Capital. All rights reserved.</p>
              <div className="footer-links-2">
                <div className="text-wrapper-10">Privacy Policy</div>
                <div className="text-wrapper-10">Terms of Service</div>
                <div className="text-wrapper-10">Cookies Settings</div>
              </div>
            </div>
            <div className="social-links">
              <Facebook className="icon-instance-node-3" />
              <Instagram className="icon-instance-node-3" />
              <X className="icon-instance-node-3" />
              <LinkedIn className="icon-instance-node-3" />
              <Youtube className="icon-instance-node-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};