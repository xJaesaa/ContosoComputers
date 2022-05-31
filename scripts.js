function openNav(){
    const navElement = document.querySelector('#nav')
    const navStyle = getComputedStyle(navElement)
    if (navStyle.display === "none"){
        document.getElementById("nav").style.display = "block";
        document.getElementById("aside").style.display = "none"
    }else{
        document.getElementById("nav").style.display = "none"
    }
}

function openAside(){
    const asideElement = document.querySelector('#aside')
    const asideStyle = getComputedStyle(asideElement)
    if (asideStyle.display === "none"){
        document.getElementById("aside").style.display = "block";
        document.getElementById("nav").style.display = "none"
    }else{
        document.getElementById("aside").style.display = "none"
    }
}

function submitForm(){
    alert("Form Submission Successful");
}

function secret(){
    const secret1 = document.querySelector('#secret')
    const secret2 = getComputedStyle(secret1)
    if (secret2.display === "none"){
        document.getElementById("secret").style.display = "block";
    }else{
        document.getElementById("secret").style.display = "none"
    }
}
