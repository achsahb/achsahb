const colors = document.querySelectorAll('.color-box h2');
function generateColors(){
    colors.forEach((colors) => {
        let hexCode = '#' + Math.random().toString(16).substring(2,8);
        colors.style.backgroundColor = hexCode;
        colors.innerHTML = hexCode;
        console.log(hexCode);
    });
}
generateColors();