import headerCSS from './header.css';

export default function Header() {
    console.log(headerCSS);
    
    return (
        `
        <style type="text/css" scoped>
            ${
                headerCSS
            }
        </style>
        <div className="header-row">
            <div className="header-text">
                What would you like to eat?
            </div>
            <span className="header-icon-notification mdi mdi-bell-outline">
            </span>
        </div>
        `
    );
}