const giveMeanewJoke = document.querySelector("button")
const joke = document.getElementById("joke")
const firstName = document.getElementById("fieldName")
const lastName = document.getElementById("fieldLastName")
const products = document.getElementById("products")

const getAllProducts = async () => {
    const req = await fetch("https://fakestoreapi.com/products")
    const data = await req.json()

    data.forEach(product => {
        console.log(product)
        const newProduct = document.createElement("div")
        const title = document.createElement("h4")
        const image = document.createElement("img")
        const description = document.createElement("p")
        const price = document.createElement("p")
        const rating = document.createElement("p")
        
        image.src = product.image
        image.style.maxWidth = "150px"
        title.innerHTML = product.title
        description.innerHTML = product.description
        price.innerHTML = `Price: $${product.price}`
        rating.innerHTML = `Rating: ${product.rating.rate} out of ${product.rating.count} votes`

        newProduct.append(title)
        newProduct.append(image)
        newProduct.append(description)
        newProduct.append(price)
        newProduct.append(rating)
        products.append(newProduct)
        products.classList.add("container__products")        
        newProduct.classList.add("container__products--product")        
    });
}

getAllProducts()


// Here we are getting random joke from Chuck Norris api. We also apply name from our text fields.
// giveMeanewJoke.addEventListener('click',()=>{
//    // fetch("https://api.chucknorris.io/jokes/random").then(response => response.json()).then(data => joke.innerHTML = data.value).catch(err=> console.log(err.message))
//    betterCallToApi()
// })

// const betterCallToApi = async () =>{
//     try{

//     const req = await fetch(`https://api.chucknorris.io/jokes/random?name=${firstName.value}${lastName.value}`)
//     const data = await req.json()

//     joke.innerHTML = data.value
//     }catch(err){
//         console.log(err.message)
//     }
// }














