
var pizza = {
    a1: ["Comet Ping Pong", "https://www.yelp.com/biz/comet-ping-pong-washington"],
    b2: ["Ghibellina", "https://www.yelp.com/biz/ghibellina-washington"],
    c3: ["2Amys", "https://www.yelp.com/biz/2-amys-neapolitan-pizzeria-washington" ],
    d4: ["District of Pi", "https://www.yelp.com/biz/district-of-pi-washington?osq=pizza" ],
    e5: ["Pizzeria Paradiso", "https://www.yelp.com/biz/pizzeria-paradiso-washington-4?osq=pizza"],
    f6: ["matchbox", "https://www.yelp.com/biz/matchbox-chinatown-washington"]
};
var pizzaArray = [pizza.a1, pizza.b2, pizza.c3, pizza.d4, pizza.e5, pizza.f6];

var subs = {
    a1: ["Bub and Pops", "https://www.yelp.com/search?find_desc=bub+and+pops&find_loc=Washington%2C+DC&ns=1"],
    b2: ["Taylor Gourmet", "https://www.yelp.com/biz/taylor-gourmet-washington-2?osq=Taylor+Gourmet"],
    c3: ["Stachowski’s Market", "https://www.yelp.com/biz/stachowskis-market-washington?osq=sandwiches"],
    d4: ["The Best Sandwich Place", "https://www.yelp.com/biz/the-best-sandwich-place-washington-4"], 
    e5: ["Wicked Waffle", "https://www.yelp.com/biz/wicked-waffle-washington"]
};
var subsArray = [subs.a1, subs.b2, subs.c3, subs.d4, subs.e5];

var variety = {
    a1: ["Chopt Creative Salad Co", "https://www.yelp.com/biz/chopt-creative-salad-co-washington-3?osq=Chopt+Creative+Salad+Co."],
    b2: ["Roti Mediterranean Grill", "https://www.yelp.com/biz/roti-modern-mediterranean-washington?osq=Roti+Modern+Mediterranean"],
    c3: ["Protein Bar", "https://www.yelp.com/biz/protein-bar-washington?osq=protein+bar"],    
    d4: ["Café Mozart", "https://www.yelp.com/biz/cafe-mozart-washington"],
    e5: ["Brasserre Beck", "https://www.yelp.com/biz/brasserie-beck-washington-3"],
    f6: ["Ben's Chili Bowl", "https://www.yelp.com/biz/bens-chili-bowl-washington"],
    g7: ["Maddy’s Taproom", "https://www.yelp.com/biz/maddys-taproom-washington"],
    h8: ["Nerd’s & Nibblers", "https://www.yelp.com/biz/nerds-and-nibblers-washington"],
    i9: ["Zaytihya", "https://www.yelp.com/biz/zaytinya-washington"],
};
var varietyArray = [variety.a1, variety.b2, variety.c3, variety.d4, variety.e5, variety.f6, variety.g7, variety.h8, variety.i9];

var italian = {
    a1: ["Sfoglina", "https://www.yelp.com/biz/sfoglina-washington"],
    b2: ["RPM Italian", "https://www.yelp.com/biz/rpm-italian-washington-4"],
    c3: ["Filomena Ristorante", "https://www.yelp.com/biz/filomena-ristorante-washington"],
    d4: ["Catch 15 Italian Kitchen + Oyster Bar", "https://www.yelp.com/biz/catch-15-washington-4"]
};
var italianArray = [italian.a1, italian.b2, italian.c3, italian.d4];

var mexican = {
    a1: ["Taco Bamba", "https://www.yelp.com/biz/taco-bamba-washington?osq=taco+bamba"],
    b2: ["District Taco", "https://www.yelp.com/biz/district-taco-washington-6?osq=District+Taco"],
    c3: ["El Centro DF", "https://www.yelp.com/biz/el-centro-df-14th-st-washington"],
    d4: ["Taberna del Alabardero DC", "https://www.yelp.com/biz/taberna-del-alabardero-washington?osq=Taberna+del+Alabardero+DC"],
    e5: ["Fogo Chao", "https://www.yelp.com/biz/fogo-de-ch%C3%A3o-brazilian-steakhouse-washington-5"],
    f6: ["Del Campo", "https://www.yelp.com/biz/del-campo-washington"]
};
var mexicanArray = [mexican.a1, mexican.b2, mexican.c3, mexican.d4, mexican.e5, mexican.f6];

var american = {
    a1: ["Chicken + Whiskey", "https://www.yelp.com/biz/chicken-whiskey-washington-4?osq=chicken+and+whiskey"],
    b2: ["Astro Donuts", "https://www.yelp.com/biz/astro-doughnuts-and-fried-chicken-washington"],
    c3: ["Mason Dixie Biscuit Co", "https://www.yelp.com/biz/mason-dixie-biscuit-washington-3"],
    d4: ["Shake Shack", "https://www.yelp.com/biz/shake-shack-washington-8?osq=Shake+Shack"],
    e5: ["PJ Clarke’s DC", "https://www.yelp.com/biz/p-j-clarkes-washington?osq=Pj+Clark"],
    f6: ["Mastro’s Steakhouse", "https://www.yelp.com/biz/mastros-steakhouse-washington"],
    g7: ["Ruth’s Chris Steak House", "https://www.yelp.com/biz/ruths-chris-steak-house-washington?osq=Ruth%27s+Chris+Steak+House"],
    h8: ["Claudia’s", "https://www.yelp.com/biz/claudias-steakhouse-washington"],
    i9: ["Morton’s the Steakhouse", "https://www.yelp.com/biz/mortons-the-steakhouse-washington-3?osq=Morton%27s+The+Steakhouse"],
    j10: ["Bolt Burgers", "https://www.yelp.com/biz/bolt-burgers-washington"]
};
var americanArray = [american.a1, american.b2, american.c3, american.d4, american.e5, american.f6, american.g7, american.h8, american.i9, american.j10];

var coffee = {
    a1: ["Tryst", "https://www.yelp.com/biz/tryst-washington"],
    b2: ["Juan Valdez Cafe", "https://www.yelp.com/biz/juan-valdez-cafe-washington"],
    c3: ["Slipstream", "https://www.yelp.com/biz/slipstream-washington"],
    d4: ["Point Chuad Café & Crepes", "https://www.yelp.com/biz/point-chaud-caf%C3%A9-and-cr%C3%AApes-washington-3"]
};
var coffeeArray = [coffee.a1, coffee.b2, coffee.c3, coffee.d4];

var dessert = {
    a1: ["Dolcezza Gelato and Coffee", "https://www.yelp.com/biz/dolcezza-gelato-factory-and-coffee-lab-washington"],
    b2: ["Jeni’s Splendid Ice Creams", "https://www.yelp.com/biz/jenis-splendid-ice-creams-washington"],
    c3: ["IcyCode Ice Cream Rolls", "https://www.yelp.com/biz/icycode-ice-cream-rolls-washington-4"],
    d4: ["Danielle's Desserts", "https://www.yelp.com/biz/danielles-desserts-washington-2"],
    e5: ["Georgetown Cupcakes", "https://www.yelp.com/search?ns=1&amp;find_desc=Georgetown+Cupcake&amp;choq=1&amp;find_loc=Washington%2C+DC"],
    f6: ["Baked and Wired", "https://www.yelp.com/biz/baked-and-wired-washington"]
};
var dessertArray = [dessert.a1, dessert.b2, dessert.c3, dessert.d4, dessert.e5, dessert.f6];

var vegan = {
    a1: ["NuVegan Cafe", "https://www.yelp.com/biz/nuvegan-caf%C3%A9-washington-2?osq=New+Vegan+Cafe"],
    b2: ["Shouk", "https://www.yelp.com/biz/shouk-washington"],
    c3: ["Soupergirl", "https://www.yelp.com/biz/soupergirl-washington"],
    d4: ["Busboys and Poets", "https://www.yelp.com/biz/busboys-and-poets-5th-and-k-washington-2"],
    e5: ["Elizabeth’s gone raw", "https://www.yelp.com/biz/elizabeths-gone-raw-washington"],
    f6: ["Fare Well", "https://www.yelp.com/biz/fare-well-washington-2"]
};
var veganArray = [vegan.a1, vegan.b2, vegan.c3, vegan.d4, vegan.e5, vegan.f6];

var asain = {
    a1: ["sushi taro", "https://www.yelp.com/biz/sushi-taro-washington"],
    b2: ["Chiko", "https://www.yelp.com/biz/chiko-washington"],
    c3: ["korean signature bibimbap", "https://www.yelp.com/biz/korean-signature-bibimbap-washington"],
    d4: ["Rasike West End", "https://www.yelp.com/biz/rasika-west-end-washington"],
    e5: ["Tiger Fork", "https://www.yelp.com/biz/tiger-fork-washington"],
    f6: ["Doi Moi", "https://www.yelp.com/biz/doi-moi-washington"],
    g7: ["Daikaya Izakaya", "https://www.yelp.com/biz/daikaya-izakaya-washington-8"],
    h8: ["Oki Bowl", "https://www.yelp.com/biz/oki-bowl-dc-washington"],
    i9: ["Toki Underground", "https://www.yelp.com/biz/toki-underground-washington"],
    j10: ["Thai and Pho Bistro", "https://www.yelp.com/biz/thai-and-pho-bistro-washington"],
    k11: ["Maketto", "https://www.yelp.com/biz/maketto-washington-2"],
    l12: ["Pho Viet Resturaunt", "https://www.yelp.com/biz/pho-viet-washington"],
    m13: ["Merzi", "https://www.yelp.com/biz/merzi-washington"],
    n14: ["Rasoi Indian Kitchen", "https://www.yelp.com/biz/rasoi-indian-kitchen-washington"]
};
var asainArray = [asain.a1, asain.b2, asain.c3, asain.d4, asain.e5, asain.f6, asain.g7, asain.h8, asain.i9, asain.j10, asain.k11, asain.l12, asain.m13, asain.n14];

var seafood = {
    a1: ["Siren by RW", "https://www.yelp.com/biz/siren-by-rw-washington"],
    b2: ["The Salt Line", "https://www.yelp.com/biz/the-salt-line-washington"],
    c3: ["Poke Papa", "https://www.yelp.com/biz/poke-papa-washington"],
    d4: ["Ocean Prime", "https://www.yelp.com/biz/ocean-prime-washington"],
    e5: ["Joe’s Seafood, Prime Steak, & Stone Crab", "https://www.yelp.com/biz/joes-seafood-prime-steak-and-stone-crab-washington"],
    f6: ["McCormick & Schmick’s seafood & steaks", "https://www.yelp.com/biz/mccormick-and-schmicks-seafood-and-steaks-washington?osq=McCormick+%26+Schmick%27s+Seafood+%26+Steaks"]
};
var seafoodArray = [seafood.a1, seafood.b2, seafood.c3, seafood.d4, seafood.e5, seafood.f6];

var vegitarian = {
    a1: ["fruitive", "https://www.yelp.com/biz/fruitive-washington-5"],
    b2: ["Beefsteak", "https://www.yelp.com/biz/beefsteak-washington-3?osq=Beefsteak"],
    c3: ["Equinox Restuarant", "https://www.yelp.com/biz/equinox-washington"],
    d4: ["sweetgreen", "https://www.yelp.com/biz/sweetgreen-washington-3?osq=sweetgreen"]
};
var vegitarianArray = [vegitarian.a1, vegitarian.b2, vegitarian.c3, vegitarian.d4];

var random = {
    a1: ["Fare Well", "https://www.yelp.com/biz/fare-well-washington-2"],
    b2: ["Soupergirl", "https://www.yelp.com/biz/soupergirl-washington"],
    c3: ["District Taco", "https://www.yelp.com/biz/district-taco-washington-6?osq=District+Taco"],
    d4: ["El Centro DF", "https://www.yelp.com/biz/el-centro-df-arlington"],
    e5: ["Tiger Fork", "https://www.yelp.com/biz/tiger-fork-washington"],
    f6: ["Oki Bowl", "https://www.yelp.com/biz/oki-bowl-dc-washington"],
    g7: ["PJ Clarke’s DC", "https://www.yelp.com/biz/p-j-clarkes-washington?osq=PJ+clark%27s+dc"],
    h8: ["Mastro’s Steakhouse", "https://www.yelp.com/biz/mastros-steakhouse-washington"],
    i9: ["Jeni’s Splendid Ice Creams", "https://www.yelp.com/biz/jenis-splendid-ice-creams-washington"],
    j10: ["IcyCode Ice Cream Rolls", "https://www.yelp.com/biz/icycode-ice-cream-rolls-washington-4"],
    k11: ["Astro Donuts", "https://www.yelp.com/biz/astro-doughnuts-and-fried-chicken-washington"],
    l12: ["Tryst", "https://www.yelp.com/biz/tryst-washington"],
    m13: ["Juan Valdez Cafe", "https://www.yelp.com/biz/juan-valdez-cafe-washington"],
    n14: ["RPM Italian", "https://www.yelp.com/biz/rpm-italian-washington-4"],
    o15: ["Roti Modern Mediterranean Grill", "https://www.yelp.com/biz/roti-modern-mediterranean-washington?osq=Roti+Mediterranean+Grill"],
    p16: ["Zaytihya", "https://www.yelp.com/biz/zaytinya-washington"],
    q17: ["Café Mozart", "https://www.yelp.com/biz/cafe-mozart-washington"],
    r18: ["Nerd’s & Nibblers", "https://www.yelp.com/biz/nerds-and-nibblers-washington"],
    s19: ["Taylor Gourmet", "https://www.yelp.com/biz/taylor-gourmet-washington-2?osq=Taylor+Gourmet"],
    t20: ["Wicked Waffle", "https://www.yelp.com/biz/wicked-waffle-washington"],
    u21: ["Ocean Prime", "https://www.yelp.com/biz/ocean-prime-washington"],
    v22: ["McCormick & Schmick’s seafood & steaks", "https://www.yelp.com/biz/mccormick-and-schmicks-seafood-and-steaks-washington?osq=McCormick+%26+Schmick%27s+Seafood+%26+Steaks"],
    w23: ["Comet Ping Pong", "https://www.yelp.com/biz/comet-ping-pong-washington"],
    x24: ["Ghibellina", "https://www.yelp.com/biz/ghibellina-washington"],
    y25: ["The Riggsby", "https://www.yelp.com/biz/the-riggsby-washington?osq=blue+frog+bagels"],
    z26: ["Equinox Restuarant", "https://www.yelp.com/biz/equinox-washington"]
};
var randomArray = [random.a1, random.b2, random.c3, random.d4, random.e5, random.f6, random.g7, random.h8, random.i9, random.j10, random.k11, random.l12, random.m13, random.n14, random.o15, random.p16, random.q17, random.r18, random.s19, random.t20, random.u21, random.v22, random.w23, random.x24, random.y25, random.z26];

var genNum;
var genSelected;


$("#pizzaBtn").on("click", function(){
    genNum = Math.floor(Math.random() * pizzaArray.length);
    genSelected = pizzaArray[genNum];
    $('.modal').modal();
    $('#modal1').modal('open');
    $("#printDiv").html('<a class= "orange-text" href="' + genSelected[1] + '" target="_blank">' + genSelected[0] + '</a>');
});

$("#dessertBtn").on("click", function(){
    genNum = Math.floor(Math.random() * dessertArray.length);
    genSelected = dessertArray[genNum];
    $('.modal').modal();
    $('#modal1').modal('open');
    $("#printDiv").html('<a class= "orange-text" href="' + genSelected[1] + '" target="_blank">' + genSelected[0] + '</a>');
});

$("#varietyBtn").on("click", function(){
    genNum = Math.floor(Math.random() * varietyArray.length);
    genSelected = varietyArray[genNum];
    $('.modal').modal();
    $('#modal1').modal('open');
    $("#printDiv").html('<a class= "orange-text" href="' + genSelected[1] + '" target="_blank">' + genSelected[0] + '</a>');
});

$("#subsBtn").on("click", function(){
    genNum = Math.floor(Math.random() * subsArray.length);
    genSelected = subsArray[genNum];
    $('.modal').modal();
    $('#modal1').modal('open');
    $("#printDiv").html('<a class= "orange-text" href="' + genSelected[1] + '" target="_blank">' + genSelected[0] + '</a>');
});

$("#italianBtn").on("click", function(){
    genNum = Math.floor(Math.random() * italianArray.length);
    genSelected = italianArray[genNum];
    $('.modal').modal();
    $('#modal1').modal('open');
    $("#printDiv").html('<a class= "orange-text" href="' + genSelected[1] + '" target="_blank">' + genSelected[0] + '</a>');
});

$("#mexicanBtn").on("click", function(){
    genNum = Math.floor(Math.random() * mexicanArray.length);
    genSelected = mexicanArray[genNum];
    $('.modal').modal();
    $('#modal1').modal('open');
    $("#printDiv").html('<a class= "orange-text" href="' + genSelected[1] + '" target="_blank">' + genSelected[0] + '</a>');
});

$("#americanBtn").on("click", function(){
    genNum = Math.floor(Math.random() * americanArray.length);
    genSelected = americanArray[genNum];
    $('.modal').modal();
    $('#modal1').modal('open');
    $("#printDiv").html('<a class= "orange-text" href="' + genSelected[1] + '" target="_blank">' + genSelected[0] + '</a>');
});

$("#coffeeBtn").on("click", function(){
    genNum = Math.floor(Math.random() * coffeeArray.length);
    genSelected = coffeeArray[genNum];
    $('.modal').modal();
    $('#modal1').modal('open');
    $("#printDiv").html('<a class= "orange-text" href="' + genSelected[1] + '" target="_blank">' + genSelected[0] + '</a>');
});

$("#veganBtn").on("click", function(){
    genNum = Math.floor(Math.random() * veganArray.length);
    genSelected = veganArray[genNum];
    $('.modal').modal();
    $('#modal1').modal('open');
    $("#printDiv").html('<a class= "orange-text" href="' + genSelected[1] + '" target="_blank">' + genSelected[0] + '</a>');
});

$("#asainBtn").on("click", function(){
    genNum = Math.floor(Math.random() * asainArray.length);
    genSelected = asainArray[genNum];
    $('.modal').modal();
    $('#modal1').modal('open');
    $("#printDiv").html('<a class= "orange-text" href="' + genSelected[1] + '" target="_blank">' + genSelected[0] + '</a>');
});

$("#seafoodBtn").on("click", function(){
    genNum = Math.floor(Math.random() * seafoodArray.length);
    genSelected = seafoodArray[genNum];
    $('.modal').modal();
    $('#modal1').modal('open');
    $("#printDiv").html('<a class= "orange-text" href="' + genSelected[1] + '" target="_blank">' + genSelected[0] + '</a>');
});

$("#vegitarianBtn").on("click", function(){
    genNum = Math.floor(Math.random() * vegitarianArray.length);
    genSelected = vegitarianArray[genNum];
    $('.modal').modal();
    $('#modal1').modal('open');
    $("#printDiv").html('<a class= "orange-text" href="' + genSelected[1] + '" target="_blank">' + genSelected[0] + '</a>');
});

$("#randomBtn").on("click", function(){
    genNum = Math.floor(Math.random() * randomArray.length);
    genSelected = randomArray[genNum];
    $('.modal').modal();
    $('#modal1').modal('open');
    $("#printDiv").html('<a class= "orange-text" href="' + genSelected[1] + '" target="_blank">' + genSelected[0] + '</a>');
});