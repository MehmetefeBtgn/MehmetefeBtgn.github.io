function toggleCategories()
{
    const button = document.getElementsByClassName("kate")
    const menu = document.getElementsByClassName("box-typography-description")

    if (menu[0].classList[1] != 'visible') {
        menu[0].className += ' visible';
    } else {
        menu[0].className = menu[0].className.replace(" visible", "")
    }
}