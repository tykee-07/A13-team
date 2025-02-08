// document.querySelector(".favorite").addEventListener("click", function() {
//     this.classList.toggle("active");
// });

let product=[
    {
        img:"./img/foto2.png",
        num:"-19%",
        text:"101 красная роза",
        kol:"2800 грн",
        sve:"./svg/foto.svg",
        lok:"2280 грн",
        id:1
    },
    {
        img:"./img/foto3.png",
        num:"-10%",
        text:"25 розовых пионовидных роз",
        kol:"2800 грн",
       
        lok:"1680 грн",
        id:2
    },
    {
        img:"./img/foto4.png",
        num:"-19%",
        text:"Влюбленность",
        kol:"2800 грн",
        sve:"./svg/foto.svg",
        lok:"1270 грн",
        id:3
    },
    {
        img:"./img/foto1.png",
        num:"-19%",
        text:"Конзина все для тебя",
        kol:"2800 грн",
        
        lok:"2020 грн",
        id:4
    },
    {
        img:"./img/foto2.png",
        num:"-19%",
        text:"101 красная роза",
        kol:"2800 грн",
        sve:"./svg/foto.svg",
        lok:"2280 грн",
        id:5
    },
    {
        img:"./img/foto3.png",
        num:"-10%",
        text:"25 розовых пионовидных роз",
        kol:"2800 грн",
       
        lok:"1680 грн",
        id:6
    },
    {
        img:"./img/foto4.png",
        num:"-19%",
        text:"Влюбленность",
        kol:"2800 грн",
        sve:"./svg/foto.svg",
        lok:"1270 грн",
        id:7
    },
    {
        img:"./img/foto1.png",
        num:"-19%",
        text:"Конзина все для тебя",
        kol:"2800 грн",
    
        lok:"2020 грн",
        id:8
    },
   
    
]
let promotion=document.querySelector(".promotion")

promotion.innerHTML=product.map((item)=>{
    return`
    <div class="flowers">
    <div class="flow1">
                    <img src="${item.img}" alt="">
                    <div class="number">${item.num}</div>
                    <div class="top">TOP</div>
                </div>
                <div class="lol">
                    <img src="${item.sve}" alt="">
                </div>
                <div class="flow2">
                    
                    <span>${item.text}</span>
                    <div class="prise">
                       <span class="kol">${item.kol}</span>
                       <span class="lok">${item.lok}</span>
                    </div>
                </div>
                <div class="but">
                    <button>Заказать</button>
                    <p>Быстрый заказ</p>
                </div>
                 </div>
    `
}).join("")


// `
// <div class="flowers">
//                 <div class="flow1">
//                     <img src="./img/foto1.png" alt="">
//                     <div class="number">-19%</div>
//                     <div class="top">TOP</div>
//                 </div>
//                 <div class="lol">
//                     <img src="./svg/foto.svg" alt="">
//                 </div>
//                 <div class="flow2">
                    
//                     <span>Конзина все для тебя</span>
//                     <div class="prise">
//                        <span class="kol">2800 грн</span>
//                        <span class="lok">2020 грн</span>
//                     </div>
//                 </div>
//                 <div class="but">
//                     <button>Заказать</button>
//                     <p>Быстрый заказ</p>
//                 </div>
//             </div>  
// `
