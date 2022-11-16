function Card(heading, description, image) {
    this.heading = heading
    this.description = description
    this.image = image
    
    this.appendTo = function (destinationElement) {

        let card = document.createElement('a')
        card.classList.add('card')
        card.href = 'https://sony.com'

        let that = this 

        card.addEventListener('click', function (e){
            e.preventDefault()
            console.log(this)

            let nuevoItemCarrito = document.createElement('div')
            nuevoItemCarrito.classList.add('carrito__item')
            nuevoItemCarrito.innerHTML = that.heading
            console.log(nuevoItemCarrito)

            elemSectionCarrito.append(nuevoItemCarrito)
        })



    card.innerHTML = `<article class="card__article">
                <div class="card__image-container">
                <img
                    class="card__image"
                    src=${image}
                    alt=${heading}
                />
                </div>
                <div class="card__content">
                <h2 class="card__heading">${heading}</h2>
                <div class="card__description">
                    <p>${description}</p>
                </div>
                </div>
            </article>`


            destinationElement.appendChild(card)
    }



}

const elemCardsContainer = document.getElementsByClassName('cards-container')[0]
console.log (elemCardsContainer)



const card1 = new Card(
            'celular',
            'iphone 7',
            'img/productos/iphone-14.jpg',
    )

    const card2 = new Card(
        'celular',
        'iphone 8',
        'img/productos/iphone-13a.jpg',
    )

    const card3 = new Card(
        'celular',
        'iphone 9',
        'img/productos/iphone1.jpg',
    )

    const card4 = new Card(
        'celular',
        'iphone X',
        'img/productos/iphone2.png',
    )

    const card5 = new Card(
        'celular',
        'iphone 11 pro',
        'img/productos/iphone-11-pro.jpg',
    )

    const card6 = new Card(
        'celular',
        'iphone 12',
        'img/productos/iphone-12.jpg',
    )

    const card7 = new Card(
        'celular',
        'iphone 13',
        'img/productos/iphone-13.jpg',
    )

    const card8 = new Card(
        'celular',
        'iphone 14',
        'img/productos/iphone3.jpg',
    )

    const card9 = new Card(
        'celular',
        'iphone 14 pro',
        'img/productos/iphone-14-pro.jpg',
    )



    console.log(card1)
    console.log(card2)
    console.log(card3)
    console.log(card4)
    console.log(card5)
    console.log(card6)
    console.log(card7)
    console.log(card8)
    console.log(card9)
    

    const cards = [
        card1,
        card2,
        card3,
        card4,
        card5,
        card6,
        card7,
        card8,
        card9,
    ]

    console.log(cards)

    /* card1.appendTo(elemCardsContainer)
    card2.appendTo(elemCardsContainer)
    card3.appendTo(elemCardsContainer)
    card4.appendTo(elemCardsContainer)
    card5.appendTo(elemCardsContainer)
    card6.appendTo(elemCardsContainer)
    card7.appendTo(elemCardsContainer)
    card8.appendTo(elemCardsContainer)
    card9.appendTo(elemCardsContainer) */

    for(const unaCard of cards) {
        unaCard.appendTo(elemCardsContainer)
    }