import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import tuna from '../slike/HranaTuna.jpg'
import chicken from '../slike/HranaChicken.jpg'
import cremy from '../slike/HranaCreamy.jpg'
import Router from 'next/router'

export default function Home() {
  const [email, setemail] = useState(false)
  const [mail, setmail] = useState('')
  const [nema, setnema] = useState(false)



  const emailSaving = async () => {
    if (mail) {
      fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'aplication/json',
        },
        body: JSON.stringify({ mail })
      })
      setemail(false)
    } else {
      setnema(true)
      setTimeout(() => {
        setnema(false)
      }, 2000)
    }
  }
  const handle = async () => {
    Router.push('https://www.digistore24.com/redir/283755/mata2nice/')
  }
  const keyUp = (e) => {
    if (e.keyCode == 13) {
      emailSaving()
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Keto Diet Recipes</title>
        <meta name="description" content="Keto Diet Recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {email &&
        <div className={styles.absolute}>
          <div className={styles.contmail}>
            <p>Just to be sure that you are human, enter your mail below</p>
            {nema && <p style={{ color: 'red' }}>Youe have to enter an email to visit this page</p>}
            <input style={{ padding: '5px 10px' }} type='email' placeholder='exaple@inkrist.net' value={mail} onChange={(e) => setmail(e.target.value)} onKeyUp={(e) => keyUp(e)} />
            <a onClick={() => emailSaving()} style={{ color: '#fff', backgroundColor: '#6c63ff', padding: '5px 10px', borderRadius: '10px', marginTop: '20px', cursor: 'pointer' }}>Start watching now!!! </a>
          </div>
        </div>
      }
      <header className={styles.header}>
        <p style={{ fontSize: '20px' }}>Keto diet recipes</p>
        <p>Home</p>
      </header>
      <main className={styles.main} >
        <h1 style={{ color: '#6c63ff', margin: 0 }} >KETO RECIPES FOR FAT LOSS</h1>
        <div>
          <h2 style={{ color: '#6c63ff', margin: 0, marginTop: '20px' }}>Tangy Tuna Tastebud Tantaliser</h2>
          <div style={{ marginTop: '20px' }}>
            <div>
              <Image src={tuna} />
            </div>
            <div>
              <h3>Ingredients:</h3>
              <p>
                ● 4 oz tuna (in olive oil, drained).<br />
                ● 4 eggs.<br />
                ● 2 oz Iceberg lettuce (chopped).<br />
                ● 2 oz cherry tomatoes.<br />
                ● ½ cup celery (chopped).<br />
                ● ½ cup mayonnaise.<br />
                ● ½ red onion (diced).<br />
                ● ½ lemon (juiced and zest).<br />
                ● 2 tbsp olive oil.<br />
                ● 2 tbsp capers.<br />
                ● 1 tbsp Dijon mustard.<br />
                ● 2 tsp white wine vinegar.<br />
                ● Salt and pepper.<br />
              </p>
              <h3>Instructions:</h3>
              <p>
                ● In a large bowl, mix together tuna, celery. Mayonnaise, onion, lemon juice and zest,<br />
                olive oil, capers and mustard.<br />
                ● In a large saucepan, bring water to boil; add a tsp salt and white wine vinegar. Crack in<br />
                the eggs and allow to simmer for 3-4 minutes.<br />
                ● Place lettuce and tomatoes on a serving plate, place eggs on top and tuna mix to side.<br />
              </p>
              <h3>Nutritional Information:</h3>
              <p>
                Fat: 70g<br />
                Carbohydrates: 6g<br />
                Protein: 30g<br />
                Calories: 767<br />
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ color: '#6c63ff', margin: 0, marginTop: '20px' }}>Chicken and Bacon One-Pot Heaven</h2>
          <div style={{ marginTop: '20px' }}>
            <div>
              <Image src={chicken} width='300px' height='400px' />
            </div>
            <div>
              <h3>Ingredients:</h3>
              <p>
                ● 1 chicken breast (cut into slices). <br />
                ● 10 oz bacon (chopped).<br />
                ● 16 oz cabbage (chopped).<br />
                ● 3 oz butter.<br />
                ● Salt and pepper.<br />
              </p>
              <h3>Instructions:</h3>
              <p>
                ● Heat half of the butter in a large frying pan and fry chicken until nearly cooked through<br />
                and slightly browned.<br />
                ● Add the bacon to the pan and fry until crispy; move all meat to one side of the pan.<br />
                ● Add remaining butter and fry cabbage until soft.<br />
                ● Season with salt and pepper.<br />
              </p>
              <h3>Nutritional Information:</h3>
              <p>
                Fat: 82g<br />
                Carbohydrates: 9g<br />
                Protein: 56g<br />
                Calories: 1020<br />
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 style={{ color: '#6c63ff', margin: 0, marginTop: '20px' }}>Mediterranean Creamy Garlic Chicken</h2>
          <div style={{ marginTop: '20px' }}>
            <div>
              <Image src={cremy} />
            </div>
            <div>
              <h3>Ingredients:</h3>
              <p>
                ● 24 oz chicken breast (skinless and sliced).<br />
                ● 1 cup spinach (fresh, chopped). <br />
                ● 1 cup thick cream. <br />
                ● ½ cup chicken broth. <br />
                ● ½ cup sun-dried tomatoes. <br />
                ● ½ cup parmesan (grated). <br />
                ● 2 tbsp olive oil. <br />
                ● 1 tsp Italian seasoning. <br />
                ● 1 tsp garlic powder. <br />
              </p>
              <h3>Instructions:</h3>
              <p>
                ● Add olive oil to a large frying pan and fry chicken until completely cooked through and <br />
                browned. Set chicken aside on a plate. <br />
                ● Add chicken broth, thick cream, Italian seasoning, garlic powder and parmesan to the <br />
                pan, whisk gently until sauce begins to thicken. <br />
                ● Add spinach and tomatoes to the sauce and simmer until spinach begins to wilt, add <br />
                chicken back to pan. <br />
              </p>
              <h3>Nutritional Information:</h3>
              <p>
                Fat: 26g <br />
                Carbohydrates: 7g <br />
                Protein: 29g <br />
                Calories: 369 <br />
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p style={{width:'100vw',textAlign:'center'}}>if you wanna get more quality recipes you can check our website <span style={{color:'#6c63ff',textDecoration:'underline',textAlign:'center',cursor:'pointer'}} onClick={()=>handle()}>here</span></p>
      </footer>
    </div>
  )
}
