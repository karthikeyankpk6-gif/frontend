
import React, { useEffect, useState } from "react";
import { href } from "react-router-dom";





export default function ApiCall() {

  const [apidata, setapidata] = useState([])


  const handleapi = async () => {

    let api = await fetch("https://fakestoreapi.com/products")
    let data = await api.json()
    setapidata(data)


  }


  useEffect(() => {
    handleapi()
  })




  return (
    <div>
      {/* <button onClick={handleapi} class="btn btn-primary">ADD</button> */}


      {/* {apidata.map((da) => ( */}











      <div>


        <div>

          <title>Food Portfolio</title>
          <link rel="stylesheet" href="style.css" />
          <div />


          <header>
            <h2>My Food World 🍔</h2>
            <nav>
              <a href="#">Home</a>
              <a href="#">Menu</a>
              <a href="#">Contact</a>
            </nav>
          </header>


          <section class="hero">
            <h2>Delicious Food Everyday 😋</h2>
            <p>Fresh | Tasty | Healthy</p>
          </section>


          <section class="food-container">

            <div class="card1">
              <img src="#" alt="" />
              <h3>pizza</h3>
              <p>Cheesy and hot pizza</p>

            </div>

            <div class="card2">
              <img src="#" alt="" />
              <h3>Burger</h3>
              <p>Juicy grilled burger</p>
            </div>

            <div class="card3">
              <img src="#" alt="" />
              <h3>Biryani</h3>
              <p>Spicy and tasty biryani</p>
            </div>

            <div class="card4">
               <img src="#" alt="" />
              <h3>Dessert</h3>
              <p>Sweet treats</p>
            </div>
            <div class="card5">
              <img src="#" alt="" />
              <h3>thosa</h3>
              <p>Sweet treats</p>
            </div>
            <div class="card6">
              <img src="#" alt="" />
              <h3>poori</h3>
              <p>Sweet treats</p>
            </div>

<div class="hi">
            <h3>Delivery Now ?..</h3>
</div>
          </section>





          <div class="soo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quam fugiat provident quibusdam. Atque minus ducimus tempore quod repudiandae iure nulla, explicabo aperiam, quo ipsam vitae ea animi similique eveniet?</div>



         

          <section >
            <div class="two">
              <h2>EVENING SPECIAL 😋</h2>
              <h4>1.biriyani</h4>
              <h4>2.fried rice</h4>
              <h4>3.chicken biriyani</h4>
            </div>
           

          </section>

         <div class="three">
          <h2>JUICE ITEMS(all time)</h2>
          <h3>1.rose milk</h3>
          <h3>2.badham milk</h3>
          <h3>3.lemon juice</h3>
         </div>
           <footer>
            <p>© 2026 My Food Portfolio</p>
          </footer>

        </div>
      </div>



      {/* ))} */}




      {/* <div class="card">
            <div class="badge">SPECIAL SALE</div>
            <div class="tilt">
              <div class="img"><img src={da.image} alt="Premium Laptop" /></div>
              <div class="info">
                <div class="cat">{da.category}</div>
                <h2 class="title">{da.title}</h2>
                <p class="desc">Cutting-edge performance with Intel Core i9, 32GB RAM, and a 1TB SSD in a sleek, lightweight design.</p>
                <div class="feats">
                  <span class="feat">4K Display</span>
                  <span class="feat">16-Hour Battery</span>
                  <span class="feat">Thunderbolt 4</span>
                </div>
                <div class="bottom">
                  <div class="price">
                    <span class="old">${da.price + 200}</span>
                    <span class="new">{da.price}</span>
                  </div>
                  <button class="btn">
                    <span>Add to Cart</span>
                    <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 01-8 0" />
                    </svg>
                  </button>
                </div>
                <div class="meta">
                  <div class="rating">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f91010ff" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#540ca2ff" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff006fff" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#0a0a0aff" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <span class="rcount">245 Reviews</span>
                  </div>
                  <div class="stock">In Stock</div>
                </div>
              </div>
            </div>
          </div> */}


































    </div >





  )
}
