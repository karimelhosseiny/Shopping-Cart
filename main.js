let shop = document .getElementById("shop");
let shopItemsData = [{
    id : "1",
    name : "Casual Shirt",
    price : 45,
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing",
    image : "images/img-1.jpg"
},
{
    id : "2",
    name : "Office Shirt",
    price : 100,
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing",
    image : "images/img-2.jpg"
},
{
    id : "3",
    name : "T Shirt",
    price : 25,
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing",
    image : "images/img-3.jpg"
},
{
    id : "4",
    name : "Men Suit",
    price : 300,
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing",
    image : "images/img-4.jpg"
},
];

let generateShop = ()=> {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let {id ,name, price, description, image} = x;
        return `
    <div class="item">
    <img width ="220" src= ${image} alt="">
    <div id=product-id-${id} class="details">
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="price-quantatiy">
            <h2>$ ${price}</h2>
            <div class="buttons">
                <i onclick = "decrement()"class="bi bi-dash"></i>
                <div id=${id} class="quantity">0</div>
                <i onclick = "increment()" class="bi bi-plus-lg"></i>  
            </div>
        </div>
    </div>
</div>
    
` }).join("")
)};

generateShop(); 

let increment = () => {
    console.log("increment");

};

let decrement = () => {
    console.log("decrement");

};

let updateFunction = () => {

}; 

