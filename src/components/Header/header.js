import headerCSS from './header.css';

export default function Header() {
    console.log(headerCSS);
    
    return (
        `
        <div class="header-row">
            <div class="header-text">
                What would you like to eat?
            </div>
            <span class="header-icon-notification mdi mdi-bell-outline">
            </span>
        </div>
        `
    );
}