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
