import "./styles.css";

const Footer = () => {
    return (
        <div className="container-fluid p-3 bg-dark text-center">
            <p className="mb-0"> 
                <a className="icon" href="https://github.com/puneet-goel/countries-react">
                    <i className="fa fa-github" aria-hidden="true"></i>
                </a> 
            </p>
            <small >
                <span>&#174;</span> Puneet All Rights Reserved.
            </small>
        </div>
    );
  }
  
export default Footer;
