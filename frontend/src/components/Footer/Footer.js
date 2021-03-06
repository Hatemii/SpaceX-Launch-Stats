import React, { Component } from 'react'
import "./FooterStyle.css"
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default class Footer extends Component {
    render() {
        return (
            <div>

                <footer className="page-footer">
                    <div className="container">
                        <ul className="list-unstyled list-inline text-center">

                            <li className="list-inline-item">
                                <a className="btn-floating btn-lg" href="https://www.facebook.com/spacenewsx" target="_blank" rel="noopener noreferrer">
                                    <i><FaFacebook size={20} /></i>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a className="btn-floating btn-lg" href="https://twitter.com/SpaceX?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
                                    <i><FaTwitter size={20} /> </i>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a className="btn-floating btn-lg" href="https://www.youtube.com/user/spacexchannel" target="_blank" rel="noopener noreferrer">
                                    <i><FaYoutube size={20} /></i>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a className="btn-floating btn-lg" href="https://www.instagram.com/spacex/?hl=en" target="_blank" rel="noopener noreferrer">
                                    <i><FaInstagram size={20} /></i>
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div style={{ color: "grey" }} className="footer-copyright text-center py-3">© 2020 Copyright</div>

                </footer>
            </div >
        )
    }
}
