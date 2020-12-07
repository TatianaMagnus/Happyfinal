const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

const map = L.map('mapid', options).setView([-29.933444, -50.9722312], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
    iconUrl: "public/images/map-marker.svg",
    iconSize: [48, 58],
})

L
    .marker([-29.933444, -50.9722312], { icon })
    .addTo(map)


// image gallery

function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classes ativas
    const buttons = document.querySelectorAll(".images button")

    // buttons.forEach( (button) => {button.classList.remove("active")} )

    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    imageContainer.src = image.src

    // atualizar o container de imagem

    // adicionar a classe active para o botão clicada
    button.classList.add("active")
}