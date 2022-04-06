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












