const counters = document.querySelectorAll(".numberCounter");

counters.forEach(counter=>{

    const update = ()=>{

        const target=+counter.getAttribute("data-target");
        const current=+counter.innerText;

        const increment = target/100;

        if (current<target){

            counter.innerText=Math.ceil(current+increment);
            setTimeout(update, 10);

        }else{

            counter.innerText=target;

        }

    };

    update();

});

const bars = document.querySelectorAll(".progress-fill");

window.addEventListener("load",()=>{

    bars.forEach(bar=>{

        bar.style.width = bar.dataset.width+"%";
            
    });

});

function abrirCertificado(setor){

    const certificados = {

        "Recepção": "ASSETS/IMAGES/CERTIFICADOS/top1.jpeg",

        "Internamento": "ASSETS/IMAGES/CERTIFICADOS/top2.jpeg",

        "Estabilização": "ASSETS/IMAGES/CERTIFICADOS/top3.jpeg",

        "Observação": "ASSETS/IMAGES/CERTIFICADOS/top4.jpeg",

        "Medicação Rápida": "ASSETS/IMAGES/CERTIFICADOS/top5.jpeg",

        "Cirurgia e Ortopedia": "ASSETS/IMAGES/CERTIFICADOS/top6.jpeg",

    };

    document.getElementById("modal").style.display = "flex";

    document.getElementById("tituloCertificado").innerText = "Certificado - " + setor;

    document.getElementById("imagemCertificado").src = certificados[setor];

    document.body.classList.add("no-scroll");

};

function fecharModal(){

    document.getElementById("modal").style.display="none";

    document.body.classList.remove("no-scroll");

};

const imagens = document.querySelectorAll(".gallery img");

const modal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

const fecharModalFoto = document.querySelector(".image-close");

imagens.forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImage.src = img.src;
        document.body.classList.add("no-scroll");

    });

});

fecharModalFoto.addEventListener("click", () => {

    modal.style.display = "none";
    document.body.classList.remove("no-scroll");

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";
        document.body.classList.remove("no-scroll");

    }

});

window.onclick=function(e){

    const modal=document.getElementById("modal");

    if(e.target===modal){

        modal.style.display="none";
        document.body.classList.remove("no-scroll");

    };

};