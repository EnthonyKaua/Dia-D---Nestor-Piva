const counters = document.querySelectorAll(".numberCounter");

const logo = document.querySelector(".logo");

logo.addEventListener("click",()=>{

    window.scrollTo(0, 0);

});

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

function abrirCertificado(setor, auditoria){

    let certificados ={};

    if(auditoria === 1){

        certificados = {

            "Recepção": "ASSETS/IMAGES/CERTIFICADOS_1AUDITORIA/top1.jpeg",

            "Internamento": "ASSETS/IMAGES/CERTIFICADOS_1AUDITORIA/top2.jpeg",

            "Estabilização": "ASSETS/IMAGES/CERTIFICADOS_1AUDITORIA/top3.jpeg",

            "Observação": "ASSETS/IMAGES/CERTIFICADOS_1AUDITORIA/top4.jpeg",

            "Medicação Rápida": "ASSETS/IMAGES/CERTIFICADOS_1AUDITORIA/top5.jpeg",

            "Cirurgia e Ortopedia": "ASSETS/IMAGES/CERTIFICADOS_1AUDITORIA/top6.jpeg",

        }

    }else if (auditoria === 2){

         certificados = {

            "Recepção": "ASSETS/IMAGES/CERTIFICADOS_2AUDITORIA/top1.1.jpeg",

            "Internamento": "ASSETS/IMAGES/CERTIFICADOS_2AUDITORIA/top1.2.jpeg",

            "Medicação Rápida": "ASSETS/IMAGES/CERTIFICADOS_2AUDITORIA/top1.3.jpeg",

            "Cirurgia Geral": "ASSETS/IMAGES/CERTIFICADOS_2AUDITORIA/top1.4.jpeg",

            "Observação": "ASSETS/IMAGES/CERTIFICADOS_2AUDITORIA/top2.jpeg",

            "Estabilização": "ASSETS/IMAGES/CERTIFICADOS_2AUDITORIA/top3.jpeg",

            "Ortopedia": "ASSETS/IMAGES/CERTIFICADOS_2AUDITORIA/top4.jpeg",

        }
    
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

var observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        entry.target.toggleAttribute("visible-on-scroll", entry.isIntersecting);
        if(entry.isIntersecting) observer.unobserve(entry.target);

    });

}, {

    threshold: 0.2

});

secoes.forEach(secao => {

    observer.observe(secao);

});
