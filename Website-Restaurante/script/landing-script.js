let hoverBox = document.getElementById("hover-box")
let bebidas = document.getElementById("bebidas")

const hoverBoxAppear = () => {
    hoverBox.style.display = 'block'
}

const hoverBoxDisappear = () => {
    hoverBox.style.display = 'none'
}

bebidas.addEventListener('mouseover', hoverBoxAppear)
bebidas.addEventListener('mouseout', hoverBoxDisappear)