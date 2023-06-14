let time = 4200,
    currentImageIndex = -0,
    images = document
            .querySelectorAll("#slider div")
    max = images.length;

function nextImage() {
    images[currentImageIndex]
            .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0


    images[currentImageIndex]
            .classList.add("selected")
}

function start() {
        setInterval(() => {
            nextImage();
        }, time)
}

function Acessar(senha, email) {
    if (senha == "" || email == "") {
        alert("Prencher Todos os Campos")
    }
    else
    window.location.assign("../home/index.html")
}

window.addEventListener("load", start)