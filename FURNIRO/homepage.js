let pformat = new Intl.NumberFormat('de-DE', { minimumSignificantDigits : 2 }); 

function capitalization(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const truncatePrice = (price, k) => { 
    const factor = Math.pow(10, Math.abs(price).toString().length - k); 
    return Math.floor(price / factor) * factor; 
}

function genprod(product) {
    if(product.image){
        product.image = "data:image/png;base64," + product.image; 
    }
    if(product.old_price){
        product.old_price = pformat.format(product.old_price); 
    }
    if((!('old_price' in product)) && (product.discount !== 0)){
        product.old_price = pformat.format(truncatePrice(Math.floor((product.price)/(1-(product.discount)/(100))),2));
    }
    if(product.tag){
        product.tag = capitalization(product.tag); 
    }
    product.short_desc = capitalization(product.short_desc); 
    product.name = capitalization(product.name); 
    product.unit_price = capitalization(product.unit_price);
    product.price = pformat.format(product.price); 

    const markup = `
    <div class="product-container" id="${product.name}"> 
        <img class="product-image" src="${product.image}" alt="${product.name}">
        <p class="product-discount">${product.discount ? `-${product.discount}%` : ""}</p>
        <p class="product-tag">${product.tag ? `${product.tag}` : ""}</p>

        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.short_desc}</p>
        <h4 class="product-price">${product.unit_price} ${product.price}</h4>
        <p class="product-old_price"><del>${product.old_price ? `${product.unit_price} ${product.old_price}` : ""}</del></p>
        <div class="product-utility">
            <button class="product-cart">Add to Cart</button>
            <a href=""><span class="material-symbols-outlined">share</span>Share</a>
            <a href=""><span class="material-symbols-outlined">sync_alt</span>Compare</a>
            <a href=""><span class="material-symbols-outlined">favorite</span>Like</a>
        </div>
        <br></br>
    </div>
`;
    return markup;
}

let fetched = false;
let resp = null;
async function loadprod() {
    if (fetched == true){
        var sth = JSON.parse(sessionStorage.getItem("products"));
        return sth;
    }
    resp = await fetch("https://cdn.fbsbx.com/v/t59.2708-21/449343845_1131565694580699_2235725881703779531_n.json/data.json?_nc_cat=106&ccb=1-7&_nc_sid=2b0e22&_nc_ohc=nhlgVFRgJXMQ7kNvgHCKrCb&_nc_ht=cdn.fbsbx.com&oh=03_Q7cD1QF6Q3GQbLT7xkxUIQfdcmOmpoZfaSX6cyCyS1CoF5LbPw&oe=66834DED&dl=1"); 
    let prod = await resp.json(); 

    prod = prod.product_list;

    console.log(prod);

    const container = document.getElementById("final"); 

    
    prod.forEach((product) => { 
        const disprodhtml = genprod(product); 
        container.insertAdjacentHTML("beforeend",disprodhtml);
        var b = JSON.stringify(prod);
        sessionStorage.setItem("product_list",b);
    });
}

loadprod();