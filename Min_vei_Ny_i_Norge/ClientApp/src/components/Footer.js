import './Footer.css';

export const Footer = () => {
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <footer className="footer">
            <div className="footer-box">
                <div className="footer-description">
                    <p>This digital guide is developed by a bachelor group at OsloMet</p>
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
                    <button onClick={topFunction} className="til-topp" aria-hidden="true">
                        Top of page
                        <span class="material-symbols-outlined">
                            arrow_upward
                        </span>
                    </button>
                </div>
            </div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </footer>
        );
}
