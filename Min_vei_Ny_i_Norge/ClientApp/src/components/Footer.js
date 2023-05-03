import { react } from 'react'
import './Footer.css';

export const Footer = () => {

    return (
        <div className="footer">
            <div className="blue-box"></div>
            <div className="footer-box">
                <div className="footer-description">
                    <p>Norge.no is a guide developed by a bachelor group at OsloMet</p>
                </div>
                <div className="footer-info">
                    <div>
                        <p><b>Log in help:</b></p>
                        <p><u>Help pages</u></p>
                        <p><u>brukerstotte@digdir.no</u></p>
                        <p>800 30 300</p>
                    </div>
                    <div className="footer-info2">
                        <p><u>About Norge.no</u></p>
                        <p><u>Privacy statement</u></p>
                        <p><u>Accessibility statement</u></p>
                    </div>
                </div>
                <div className="footer-to-top">
                    <p>Top of page</p>
                </div>
            </div>
        </div>
        );
}