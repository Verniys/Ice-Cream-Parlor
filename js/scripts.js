/*!
* Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const modalBase = document.getElementById('modalBase')
modalBase.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget
    const modalBodyInput = modalBase.querySelector('.modal-body input')
    modalBodyInput.value = button.id
})

const modalBaseImgList = modalBase.querySelectorAll('.modal-body img')
const modalBaseClose = modalBase.querySelector('.close')
modalBaseImgList.forEach((modalBaseImg) =>
    modalBaseImg.addEventListener('click', event => {
        modalBaseImgClick(modalBaseImg)
    })
);

const modalSyrup = document.getElementById('modalSyrup')
modalSyrup.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget
    const modalBodyInput = modalSyrup.querySelector('.modal-body input')
    modalBodyInput.value = button.id
})

const modalSyrupImgList = modalSyrup.querySelectorAll('.modal-body img')
const modalSyrupClose = modalSyrup.querySelector('.close')
modalSyrupImgList.forEach((modalSyrupImg) =>
    modalSyrupImg.addEventListener('click', event => {
        modalSyrupImgClick(modalSyrupImg)
    })
);

const modalTopping = document.getElementById('modalTopping')
modalTopping.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget
    const modalBodyInput = modalTopping.querySelector('.modal-body input')
    modalBodyInput.value = button.id
})

const modalToppingImgList = modalTopping.querySelectorAll('.modal-body img')
const modalToppingClose = modalTopping.querySelector('.close')
modalToppingImgList.forEach((modalToppingImg) =>
    modalToppingImg.addEventListener('click', event => {
        modalToppingImgClick(modalToppingImg)
    })
);

const code = document.getElementById("code")

const radBases1 = document.getElementById("radBases1")
const radBases2 = document.getElementById("radBases2")
const radBases3 = document.getElementById("radBases3")

const btnBtmBse = document.getElementById("btnBtmBse")
const btnBtmSyr = document.getElementById("btnBtmSyr")
const btnMidBse = document.getElementById("btnMidBse")
const btnMidSyr = document.getElementById("btnMidSyr")
const btnTopBse = document.getElementById("btnTopBse")
const btnTopSyr = document.getElementById("btnTopSyr")
const btnTopTop = document.getElementById("btnTopTop")

function modalBaseImgClick(button) {
    const target = modalBase.querySelector('.modal-body input').value
    document.getElementById(target).setAttribute("value", button.getAttribute("value"))
    const image = target.replace("btn", "img")
    document.getElementById(image).setAttribute("src", button.getAttribute("src"))
    modalBaseClose.click()
    updateCode()
}

function modalSyrupImgClick(button) {
    const target = modalSyrup.querySelector('.modal-body input').value
    document.getElementById(target).setAttribute("value", button.getAttribute("value"))
    const image = target.replace("btn", "img")
    document.getElementById(image).setAttribute("src", button.getAttribute("src"))
    modalSyrupClose.click()
    updateCode()
}

function modalToppingImgClick(button) {
    const target = modalTopping.querySelector('.modal-body input').value
    document.getElementById(target).setAttribute("value", button.getAttribute("value"))
    const image = target.replace("btn", "img")
    document.getElementById(image).setAttribute("src", button.getAttribute("src"))
    modalToppingClose.click()
    updateCode()
}

function updateCode() {
    if (radBases1.checked) {
        code.innerHTML = 'A' +
            btnTopBse.getAttribute("value") +
            btnTopSyr.getAttribute("value") +
            btnTopTop.getAttribute("value")
    } else if (radBases2.checked) {
        code.innerHTML =
            btnMidBse.getAttribute("value") +
            btnMidSyr.getAttribute("value") + 'A' +
            btnTopBse.getAttribute("value") +
            btnTopSyr.getAttribute("value") +
            btnTopTop.getAttribute("value")
    } else if (radBases3.checked) {
        code.innerHTML =
            btnBtmBse.getAttribute("value") +
            btnBtmSyr.getAttribute("value") +
            btnMidBse.getAttribute("value") +
            btnMidSyr.getAttribute("value") + 'A' +
            btnTopBse.getAttribute("value") +
            btnTopSyr.getAttribute("value") +
            btnTopTop.getAttribute("value")
    } else {
        code.innerHTML = "How ???"
    }
};

const preview = document.getElementById("preview")

const imgBtmCon = document.getElementById("imgBtmCon")
const imgBtmBse = document.getElementById("imgBtmBse")
const imgBtmSyr = document.getElementById("imgBtmSyr")
const imgMidCon = document.getElementById("imgMidCon")
const imgMidBse = document.getElementById("imgMidBse")
const imgMidSyr = document.getElementById("imgMidSyr")
const imgTopCon = document.getElementById("imgTopCon")
const imgTopBse = document.getElementById("imgTopBse")
const imgTopSyr = document.getElementById("imgTopSyr")
const imgTopTop = document.getElementById("imgTopTop")
const btnRemoveSyrup = document.getElementById("btnRemoveSyrup")
const btnRemoveTopping = document.getElementById("btnRemoveTopping")

// TODO make a 2D array list an map it there
function updateList() {
    if (radBases1.checked) {
        preview.classList.add("bottom");
        preview.classList.remove("middle");
        
        btnBtmBse.hidden = true
        btnBtmSyr.hidden = true
        btnMidBse.hidden = true
        btnMidSyr.hidden = true

        imgBtmCon.hidden = true
        imgBtmBse.hidden = true
        imgBtmSyr.hidden = true
        imgMidCon.hidden = true
        imgMidBse.hidden = true
        imgMidSyr.hidden = true
        imgTopCon.hidden = false
        imgTopBse.hidden = false
        imgTopSyr.hidden = false
        imgTopTop.hidden = false
    } else if (radBases2.checked) {
        preview.classList.remove("bottom");
        preview.classList.add("middle");

        btnBtmBse.hidden = true
        btnBtmSyr.hidden = true
        btnMidBse.hidden = false
        btnMidSyr.hidden = false

        imgBtmCon.hidden = true
        imgBtmBse.hidden = true
        imgBtmSyr.hidden = true
        imgMidCon.hidden = false
        imgMidBse.hidden = false
        imgMidSyr.hidden = false
        imgTopCon.hidden = false
        imgTopBse.hidden = false
        imgTopSyr.hidden = false
        imgTopTop.hidden = false
    } else if (radBases3.checked) {
        preview.classList.remove("bottom");
        preview.classList.remove("middle");

        btnBtmBse.hidden = false
        btnBtmSyr.hidden = false
        btnMidBse.hidden = false
        btnMidSyr.hidden = false

        imgBtmCon.hidden = false
        imgBtmBse.hidden = false
        imgBtmSyr.hidden = false
        imgMidCon.hidden = false
        imgMidBse.hidden = false
        imgMidSyr.hidden = false
        imgTopCon.hidden = false
        imgTopBse.hidden = false
        imgTopSyr.hidden = false
        imgTopTop.hidden = false
    }
    updateCode();
}

btnRemoveSyrup.addEventListener('click', event => {
    modalSyrupImgClick(btnRemoveSyrup)
})
btnRemoveTopping.addEventListener('click', event => {
    modalToppingImgClick(btnRemoveTopping)
})

// Enable tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
const clipboard = document.getElementById("clipboard")
const clipboardTooltip = bootstrap.Tooltip.getInstance('#clipboard') 

// Click to copy
const delay = ms => new Promise(res => setTimeout(res, ms));
async function copyCode() {
    navigator.clipboard.writeText(code.innerHTML);
    // code.setAttribute("data-bs-title", "Copied!")
    clipboardTooltip.setContent({ '.tooltip-inner': 'Copied!' })

    clipboard.classList.replace("bi-clipboard", "bi-check2")
    await delay(3000);
    // code.setAttribute("data-bs-title", "Copy to clipboard")
    clipboardTooltip.setContent({ '.tooltip-inner': 'Copy to clipboard' })

    clipboard.classList.replace("bi-check2", "bi-clipboard")
}

document.addEventListener("DOMContentLoaded", function () {
    updateList()
});
