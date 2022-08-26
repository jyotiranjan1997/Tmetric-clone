let btn = document.querySelector("#btn-area>button").addEventListener("click",function(){
    window.location.href = "register.html"
})

let video = document.querySelector("#box").addEventListener("click",function(){
    window.location.href = "https://youtu.be/d2LwNiALPIM?list=PL74QEPdFcvLY9y7ZGsu9IE2kMwGJmAT3f"
})

let brandsLogo = [
    {
        img : "https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png",
    },
    {
        img : "https://tmetric.com/media/w4mhgaul/time-tracking-software.png",
    },
    {
        img : "https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png",
    },
    {
        img : "https://tmetric.com/media/c2eewysw/g2_2022_main_page.png",
    },
    {
        img : "https://tmetric.com/media/a00doqsb/icon-customer-rating.png",
    },
    {
        img : "https://tmetric.com/media/0mxfl3xw/icon-customer-choice.png",
    },
    {
        img : "https://tmetric.com/media/jfxavlps/getapp-logotype.svg",
    },
]

displayBrands(brandsLogo);
function displayBrands(brandsLogo){
    brandsLogo.map((el,index)=> {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.img;
        div.append(img);
        document.querySelector("#brandsSection").append(div);
    })
}

// Business Tools Javascript Code Start Here

window.reload = btn1()
function bt (){
    btn1()
    document.querySelector("#img1").src = "https://tmetric.com/media/e5enfaae/img-advantages.png";
}
function btn1(){
    document.querySelector("#img1").style.filter = "grayscale(0%)";
    document.querySelector(".btn1").style.backgroundColor  = "#e7edfc";
    document.querySelector(".btn1").style.borderColor = "#3070f0";
    document.querySelector(".btn1").style.boxShadow = "-12px 16px 32px rgb(0 54 163 / 12%)";

    document.querySelector("#heading_content>#hide").style.display="inline-block";
    // document.querySelector("#img1").src = "https://tmetric.com/media/e5enfaae/img-advantages.png";

    // off Styling
    document.querySelector("#img2").style.filter = "grayscale(100%)";
    document.querySelector(".btn2").style.backgroundColor  = "white";
    document.querySelector(".btn2").style.borderColor = "#e2e7eb";
    document.querySelector(".btn2").style.boxShadow = "none";
    document.querySelector(".a2>#hide").style.display = "none"
    document.querySelector("#img3").style.filter = "grayscale(100%)";
    document.querySelector(".btn3").style.backgroundColor  = "white";
    document.querySelector(".btn3").style.borderColor = "#e2e7eb";
    document.querySelector(".btn3").style.boxShadow = "none";
    document.querySelector("#img4").style.filter = "grayscale(100%)";
    document.querySelector(".btn4").style.backgroundColor  = "white";
    document.querySelector(".btn4").style.borderColor = "#e2e7eb";
    document.querySelector(".btn4").style.boxShadow = "none";
    document.querySelector("#img5").style.filter = "grayscale(100%)";
    document.querySelector(".btn5").style.backgroundColor  = "white";
    document.querySelector(".btn5").style.borderColor = "#e2e7eb";
    document.querySelector(".btn5").style.boxShadow = "none";
    document.querySelector("#img6").style.filter = "grayscale(100%)";
    document.querySelector(".btn6").style.backgroundColor  = "white";
    document.querySelector(".btn6").style.borderColor = "#e2e7eb";
    document.querySelector(".btn6").style.boxShadow = "none";

    document.querySelector(".a2>#hide").style.display = "none"
    document.querySelector(".a3>#hide").style.display = "none"
    document.querySelector(".a4>#hide").style.display = "none"
    document.querySelector(".a5>#hide").style.display = "none"
    document.querySelector(".a6>#hide").style.display = "none"

}
function btn2(){
    document.querySelector("#img1").style.filter = "grayscale(100%)";
    document.querySelector(".btn1").style.backgroundColor  = "white";
    document.querySelector(".btn1").style.borderColor = "#e2e7eb";
    document.querySelector(".btn1").style.boxShadow = "none";
    document.querySelector("#img3").style.filter = "grayscale(100%)";
    document.querySelector(".btn3").style.backgroundColor  = "white";
    document.querySelector(".btn3").style.borderColor = "#e2e7eb";
    document.querySelector(".btn3").style.boxShadow = "none";
    document.querySelector("#img4").style.filter = "grayscale(100%)";
    document.querySelector(".btn4").style.backgroundColor  = "white";
    document.querySelector(".btn4").style.borderColor = "#e2e7eb";
    document.querySelector(".btn4").style.boxShadow = "none";
    document.querySelector("#img5").style.filter = "grayscale(100%)";
    document.querySelector(".btn5").style.backgroundColor  = "white";
    document.querySelector(".btn5").style.borderColor = "#e2e7eb";
    document.querySelector(".btn5").style.boxShadow = "none";
    document.querySelector("#img6").style.filter = "grayscale(100%)";
    document.querySelector(".btn6").style.backgroundColor  = "white";
    document.querySelector(".btn6").style.borderColor = "#e2e7eb";
    document.querySelector(".btn6").style.boxShadow = "none";


    document.querySelector("#img2").style.filter = "grayscale(0%)";
    document.querySelector(".btn2").style.backgroundColor  = "#e7edfc";
    document.querySelector(".btn2").style.borderColor = "#3070f0";
    document.querySelector(".btn2").style.boxShadow = "-12px 16px 32px rgb(0 54 163 / 12%)";
    document.querySelector(".a2>#hide").style.display = "inline-block"
    document.querySelector("#heading_content>#hide").style.display="none";
    document.querySelector("#content_img").src = "https://tmetric.com/media/d2dhexfq/img-advantages-project-management.png"

    document.querySelector(".a3>#hide").style.display = "none"
    document.querySelector(".a4>#hide").style.display = "none"
    document.querySelector(".a5>#hide").style.display = "none"
    document.querySelector(".a6>#hide").style.display = "none"
}

function btn3(){
    document.querySelector("#content_img").src = "https://tmetric.com/media/b3abexjt/img-advantages-team-management.png"


    document.querySelector("#img1").style.filter = "grayscale(100%)";
    document.querySelector(".btn1").style.backgroundColor  = "white";
    document.querySelector(".btn1").style.borderColor = "#e2e7eb";
    document.querySelector(".btn1").style.boxShadow = "none";
    document.querySelector("#img2").style.filter = "grayscale(100%)";
    document.querySelector(".btn2").style.backgroundColor  = "white";
    document.querySelector(".btn2").style.borderColor = "#e2e7eb";
    document.querySelector(".btn2").style.boxShadow = "none";
    document.querySelector("#img4").style.filter = "grayscale(100%)";
    document.querySelector(".btn4").style.backgroundColor  = "white";
    document.querySelector(".btn4").style.borderColor = "#e2e7eb";
    document.querySelector(".btn4").style.boxShadow = "none";
    document.querySelector("#img5").style.filter = "grayscale(100%)";
    document.querySelector(".btn5").style.backgroundColor  = "white";
    document.querySelector(".btn5").style.borderColor = "#e2e7eb";
    document.querySelector(".btn5").style.boxShadow = "none";
    document.querySelector("#img6").style.filter = "grayscale(100%)";
    document.querySelector(".btn6").style.backgroundColor  = "white";
    document.querySelector(".btn6").style.borderColor = "#e2e7eb";
    document.querySelector(".btn6").style.boxShadow = "none";

    document.querySelector("#img3").style.filter = "grayscale(0%)";
    document.querySelector(".btn3").style.backgroundColor  = "#e7edfc";
    document.querySelector(".btn3").style.borderColor = "#3070f0";
    document.querySelector(".btn3").style.boxShadow = "-12px 16px 32px rgb(0 54 163 / 12%)";
    document.querySelector(".a3>#hide").style.display = "inline-block"
    document.querySelector("#heading_content>#hide").style.display="none";

    document.querySelector(".a2>#hide").style.display = "none"
    document.querySelector(".a4>#hide").style.display = "none"
    document.querySelector(".a5>#hide").style.display = "none"
    document.querySelector(".a6>#hide").style.display = "none"
}
function btn4(){
    document.querySelector("#content_img").src = "https://tmetric.com/media/nmmhl5l3/img-advantages-invoice.png"



    document.querySelector("#img1").style.filter = "grayscale(100%)";
    document.querySelector(".btn1").style.backgroundColor  = "white";
    document.querySelector(".btn1").style.borderColor = "#e2e7eb";
    document.querySelector(".btn1").style.boxShadow = "none";
    document.querySelector("#img2").style.filter = "grayscale(100%)";
    document.querySelector(".btn2").style.backgroundColor  = "white";
    document.querySelector(".btn2").style.borderColor = "#e2e7eb";
    document.querySelector(".btn2").style.boxShadow = "none";
    document.querySelector("#img3").style.filter = "grayscale(100%)";
    document.querySelector(".btn3").style.backgroundColor  = "white";
    document.querySelector(".btn3").style.borderColor = "#e2e7eb";
    document.querySelector(".btn3").style.boxShadow = "none";
    document.querySelector("#img5").style.filter = "grayscale(100%)";
    document.querySelector(".btn5").style.backgroundColor  = "white";
    document.querySelector(".btn5").style.borderColor = "#e2e7eb";
    document.querySelector(".btn5").style.boxShadow = "none";
    document.querySelector("#img6").style.filter = "grayscale(100%)";
    document.querySelector(".btn6").style.backgroundColor  = "white";
    document.querySelector(".btn6").style.borderColor = "#e2e7eb";
    document.querySelector(".btn6").style.boxShadow = "none";

    document.querySelector("#img4").style.filter = "grayscale(0%)";
    document.querySelector(".btn4").style.backgroundColor  = "#e7edfc";
    document.querySelector(".btn4").style.borderColor = "#3070f0";
    document.querySelector(".btn4").style.boxShadow = "-12px 16px 32px rgb(0 54 163 / 12%)";
    document.querySelector(".a4>#hide").style.display = "inline-block"
    document.querySelector("#heading_content>#hide").style.display="none";

    document.querySelector(".a2>#hide").style.display = "none"
    document.querySelector(".a3>#hide").style.display = "none"
    document.querySelector(".a5>#hide").style.display = "none"
    document.querySelector(".a6>#hide").style.display = "none"
}
function btn5(){
    document.querySelector("#content_img").src = "https://tmetric.com/media/bpli5hts/img-advantages-reporting.png"

    document.querySelector("#img1").style.filter = "grayscale(100%)";
    document.querySelector(".btn1").style.backgroundColor  = "white";
    document.querySelector(".btn1").style.borderColor = "#e2e7eb";
    document.querySelector(".btn1").style.boxShadow = "none";
    document.querySelector("#img2").style.filter = "grayscale(100%)";
    document.querySelector(".btn2").style.backgroundColor  = "white";
    document.querySelector(".btn2").style.borderColor = "#e2e7eb";
    document.querySelector(".btn2").style.boxShadow = "none";
    document.querySelector("#img3").style.filter = "grayscale(100%)";
    document.querySelector(".btn3").style.backgroundColor  = "white";
    document.querySelector(".btn3").style.borderColor = "#e2e7eb";
    document.querySelector(".btn3").style.boxShadow = "none";
    document.querySelector("#img4").style.filter = "grayscale(100%)";
    document.querySelector(".btn4").style.backgroundColor  = "white";
    document.querySelector(".btn4").style.borderColor = "#e2e7eb";
    document.querySelector(".btn4").style.boxShadow = "none";
    document.querySelector("#img6").style.filter = "grayscale(100%)";
    document.querySelector(".btn6").style.backgroundColor  = "white";
    document.querySelector(".btn6").style.borderColor = "#e2e7eb";
    document.querySelector(".btn6").style.boxShadow = "none";

    document.querySelector("#img5").style.filter = "grayscale(0%)";
    document.querySelector(".btn5").style.backgroundColor  = "#e7edfc";
    document.querySelector(".btn5").style.borderColor = "#3070f0";
    document.querySelector(".btn5").style.boxShadow = "-12px 16px 32px rgb(0 54 163 / 12%)";
    document.querySelector(".a5>#hide").style.display = "inline-block"
    document.querySelector("#heading_content>#hide").style.display="none";

    document.querySelector(".a2>#hide").style.display = "none"
    document.querySelector(".a3>#hide").style.display = "none"
    document.querySelector(".a4>#hide").style.display = "none"
    document.querySelector(".a6>#hide").style.display = "none"
}
function btn6(){
    document.querySelector("#content_img").src = "https://tmetric.com/media/kuqjgrfl/img-advantages-time-off.png"


    document.querySelector("#img1").style.filter = "grayscale(100%)";
    document.querySelector(".btn1").style.backgroundColor  = "white";
    document.querySelector(".btn1").style.borderColor = "#e2e7eb";
    document.querySelector(".btn1").style.boxShadow = "none";
    document.querySelector("#img2").style.filter = "grayscale(100%)";
    document.querySelector(".btn2").style.backgroundColor  = "white";
    document.querySelector(".btn2").style.borderColor = "#e2e7eb";
    document.querySelector(".btn2").style.boxShadow = "none";
    document.querySelector("#img3").style.filter = "grayscale(100%)";
    document.querySelector(".btn3").style.backgroundColor  = "white";
    document.querySelector(".btn3").style.borderColor = "#e2e7eb";
    document.querySelector(".btn3").style.boxShadow = "none";
    document.querySelector("#img4").style.filter = "grayscale(100%)";
    document.querySelector(".btn4").style.backgroundColor  = "white";
    document.querySelector(".btn4").style.borderColor = "#e2e7eb";
    document.querySelector(".btn4").style.boxShadow = "none";
    document.querySelector("#img5").style.filter = "grayscale(100%)";
    document.querySelector(".btn5").style.backgroundColor  = "white";
    document.querySelector(".btn5").style.borderColor = "#e2e7eb";
    document.querySelector(".btn5").style.boxShadow = "none";

    document.querySelector("#img6").style.filter = "grayscale(0%)";
    document.querySelector(".btn6").style.backgroundColor  = "#e7edfc";
    document.querySelector(".btn6").style.borderColor = "#3070f0";
    document.querySelector(".btn6").style.boxShadow = "-12px 16px 32px rgb(0 54 163 / 12%)";
    document.querySelector(".a6>#hide").style.display = "inline-block"
    document.querySelector("#heading_content>#hide").style.display="none";

    document.querySelector(".a2>#hide").style.display = "none"
    document.querySelector(".a3>#hide").style.display = "none"
    document.querySelector(".a4>#hide").style.display = "none"
    document.querySelector(".a5>#hide").style.display = "none"
    
}

// services Javascript Code Start Here
let services = [
    {
        img : "https://tmetric.com/media/cshbmvwf/logo-integration-gsuite.svg",
    },
    {
        img : "https://tmetric.com/media/fnbggshs/logo-integration-msoffice.svg",
    },
    {
        img : "https://tmetric.com/media/plvb1mg0/logo-integration-gkeep.svg",
    },
    {
        img : "https://tmetric.com/media/smflyk5w/logo-integration-github.svg",
    },
    {
        img : "https://tmetric.com/media/kbrcntmi/logo-integration-excel.svg",
    },
    {
        img : "https://tmetric.com/media/4aeci1fh/logo-integration-asana.svg",
    },
    {
        img : "https://tmetric.com/media/caxbzjss/logo-integration-jira.svg",
    },
    {
        img : "https://tmetric.com/media/dw2nwjwv/logo-integration-gitlab.svg",
    },
    {
        img : "https://tmetric.com/media/me5ih5eu/logo-integration-gdocs.svg",
    },
    {
        img : "https://tmetric.com/media/0bzmfrlf/logo-integration-trello.svg",
    },
    {
        img : "https://tmetric.com/media/sdaj41fi/logo-integration-redmine.svg",
    },
    {
        img : "https://tmetric.com/media/1xedbfav/logo-integration-zendesk.svg",
    },
    {
        img : "https://tmetric.com/media/n3dmgi1p/logo-integration-wrike.svg",
    }

]

displayServices(services)
function displayServices(services){
    services.map((el,index)=>{
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.img;
        div.append(img);
        document.querySelector("#service_container").append(div);
    })
}

// Customers Reviews Javascript Code Started Here

let business = [
    {
        img:"https://tmetric.com/media/wlmpffzm/logo_business_endygo.png",
    },
    {
        img:"https://tmetric.com/media/0ddgehbk/logo_business_itsyndicate.png",
    },
    {
        img:"https://tmetric.com/media/eozchehq/logo_business_pulso.png",
    },
    {
        img:"https://tmetric.com/media/rmvok0xh/logo_business_050media.png",
    },
    {
        img:"https://tmetric.com/media/ccpn231z/logo-business-jot-digi-tal.svg",
    },
    {
        img:"https://tmetric.com/media/z0fhmi1j/logo-business-freshlab.svg",
    },
    {
        img:"https://tmetric.com/media/xjogm2h2/logo-business-mvad.svg",
    },
    {
        img:"https://tmetric.com/media/nvalaok1/logo_business_swaven.png",
    }

]


displayBusiness(business)
function displayBusiness(business){
    business.map(function(el,index){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.img;
        div.append(img);
        document.querySelector("#business").append(div);
    })
}

let factsMain = [
    {
        img:"https://tmetric.com/media/zrvmvbl3/icon-straightforward.svg",
        text:"The most straightforward time tracking app",
    },
    {
        img : "https://tmetric.com/media/opdfdo3l/icon-platforms.svg",
        text:"Available on all platforms: macOS, Windows, Linux, iOS, and Android",
    },
    {
        img:"https://tmetric.com/media/igkmpmix/icon-freetrial.svg",
        text:"Free plan with basic time tracking for a team up to 5",
    },
    {
        img:"https://tmetric.com/media/htxfmpoe/icon-reasonableprice.svg",
        text:"Reasonable price makes it affordable for anyone",
    },
    {
        img:"https://tmetric.com/media/0uyowzzu/icon-multilang.svg",
        text:"Multilanguage solution",
    },
]

displayFacts(factsMain);
function displayFacts(factsMain){
    factsMain.map(function(el,index){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.img;
        let desc = document.createElement("p");
        desc.innerHTML = el.text;
        div.append(img,desc);
        document.querySelector("#facts_main").append(div);
    })
}