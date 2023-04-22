<html><head><link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script></head><body>//获取主页图片的函数,主要用于存储图片信息,函数内有许多的主题,随机抽取一个主题中的图片作为返回值
//© 2023 Lantern,All Rights Reserved.

//all themes:
//言叶之庭
var items_yyzt = [['https://pic4.zhimg.com/80/v2-c531bde86d6c9e2be33e434e4f5afd3b_1440w.webp',
    "https://pic2.zhimg.com/80/v2-7b7cb89e0385217d1e93fd12cc0e4c91_1440w.webp",
    "https://pic1.zhimg.com/80/v2-f56f4de505ad31184851fa110d72de9c_1440w.webp",
    "https://pic1.zhimg.com/80/v2-9dbe1f43ce1d260801f64ab8c3aa69e0_1440w.webp",
    "https://pic4.zhimg.com/80/v2-0ee4b4d43df620a3ca7adc7aac83169b_1440w.webp",
    "https://pic3.zhimg.com/80/v2-356df20a71494822c986867ad398c6d6_1440w.webp",
    "https://pic4.zhimg.com/80/v2-47f439309db5623886de628adca366a7_1440w.webp",
    "https://pic3.zhimg.com/80/v2-a455a6dcae602250a6ed7af41d964d4a_1440w.webp",
    "https://pic2.zhimg.com/80/v2-b4b9a36ea5eaec0f089ffc07f173a505_1440w.webp",
    "https://pic1.zhimg.com/80/v2-3ad92075c9abb9e2a50eff7ea76666f8_1440w.webp",
    "https://pic3.zhimg.com/80/v2-2a98f12ae476403c59ececd3366dd1fe_1440w.webp",
    "https://pic4.zhimg.com/80/v2-94d73d8147e0ba6ba67da075424a879f_1440w.webp",
    "https://pic1.zhimg.com/80/v2-ee35812cbaa59ea1cc51cdea6b485498_1440w.webp",
    "https://pic1.zhimg.com/80/v2-e2b0051ca04a56e1839eb3d35a8ba2b0_1440w.webp",
    ],
["http://freetyst.nf.migu.cn/public/product5th/product35/2019/12/0410/2018%E5%B9%B412%E6%9C%8818%E6%97%A515%E7%82%B955%E5%88%86%E6%89%B9%E9%87%8F%E9%A1%B9%E7%9B%AE%E6%AD%A3%E4%B8%9C100%E9%A6%96-15/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005661F31N.mp3"]];

//你的名字
var items_ndmz=[['https://pic2.zhimg.com/80/v2-4b6432b06430b33147bb84fdf4c644fd_1440w.webp'
,'https://pic1.zhimg.com/80/v2-bf370a6f52ad4f0c1aa7b824d6388488_1440w.webp'
,'https://pic4.zhimg.com/80/v2-929070dd9619b4ebfec8a2436809a327_1440w.webp'
,'https://pic3.zhimg.com/80/v2-532485552b59a937984d66a9ff3f1676_1440w.webp'
,'https://pic1.zhimg.com/80/v2-0b7e12a3277a995292bd4bdc3df82950_1440w.webp'
,'https://pic1.zhimg.com/80/v2-b1bc7f08e6a99c2f3cf6e43956c98f0c_1440w.webp'
,'https://pic3.zhimg.com/80/v2-33479cbb188907784604a45e698f6c06_1440w.webp'
,'https://pic4.zhimg.com/80/v2-3e75ab2d6194cf760dab8352f8c1b8ef_1440w.webp'
,'https://pic4.zhimg.com/80/v2-5c67f2ef6d6a67a7a98fd690dc096a8b_1440w.webp'
,'https://pic2.zhimg.com/80/v2-3b4c8a49ea24f7d21ae44ddcac4e7e65_1440w.webp'
,'https://pic1.zhimg.com/80/v2-cc1ed94a4d3a965c038dc1ec004d84a4_1440w.webp'
,'https://pic2.zhimg.com/80/v2-12146f5c9ee8b02b85eb3feac47c6339_1440w.webp'
,'https://pic4.zhimg.com/80/v2-e0b51eba5874d38b5885c835d02352df_1440w.webp'
,'https://pic1.zhimg.com/80/v2-628d55d0f8525c7525b935fbbf5ee60c_1440w.webp'
,'https://pic3.zhimg.com/80/v2-83746a8d97a0b33a8d90a395caadb5e2_1440w.webp'
,'https://pic4.zhimg.com/80/v2-38d034591351496c840efdf73e16e0eb_1440w.webp'
,'https://pic2.zhimg.com/80/v2-7b09996a6ec9d570bfe9b513643f8b09_1440w.webp'
,'https://pic4.zhimg.com/80/v2-1f7c2b0227242881975fee40ea9f2ef7_1440w.webp'
],
['http://freetyst.nf.migu.cn/public/product9th/product45/2021/10/2718/2020%E5%B9%B411%E6%9C%8825%E6%97%A521%E7%82%B910%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E7%B1%B3%E4%B8%9D%E5%85%8B185%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/69987100298181317.mp3']]


themes=['yyzt','ndmz']
var choose_theme=Math.floor(Math.random()*themes.length)
if(choose_theme=='yyzt') chosen_item=items_yyzt
if(choose_theme=='ndmz') chosen_item=items_ndmz

function getimg(){
    var item='',last_='';
    function choose(){item = chosen_item[0][Math.floor(Math.random()*chosen_item[0].length)];}
    choose()
    /*while(item==last_){
        choose();
        
    }*/
    last_=item;
    return last_;
}</body></html>