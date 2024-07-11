const themeSelector = document.getElementById('color theme');
const bodyElement = document.body;
const logoElement = document.querySelector('.logo');

function changeTheme() {
    //check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
    const selectedTheme = themeSelector.value;

    // if the value is dark then:
    if (selectedTheme === 'dark') {
        // add the dark class to the body
        bodyElement.classList.add('dark');

    // change the source of the logo to the white logo
        logoElement.src = 'byui-logo_white.png';
    } else {
        // otherwise
        // remove the dark class
        bodyElement.classList.remove('dark');

        // make sure the logo src is the blue logo.
        logoElement.src = 'byui-logo_blue.webp'
    }
}
    // add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);

