import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import slika from '../slike/Slika.jpg'
import Router from 'next/router'

export default function Home() {
  const [email, setemail] = useState(false)
  const [mail, setmail] = useState('')
  const [nema, setnema] = useState(false)


  useEffect(() => {
    setemail(true)
  }, [])
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
    Router.push('https://www.digistore24.com/redir/340745/mlstomic/')
  }
  const keyUp = (e) => {
    if (e.keyCode == 13) {
      emailSaving()
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Intelligent Cryptocurrency</title>
        <meta name="description" content="Intelligent Cryptocurrency" />
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
        <p style={{ fontSize: '20px' }}>Intelligent Cryptocurrency</p>
        <p>Home</p>
      </header>
      <main className={styles.main}>
        <h1 style={{ color: '#6c63ff' }} >THE REAL REASON YOUR INVESTMENTS ARE NOT SUCCESSFUL</h1>
        <p style={{ margin: 0, marginBottom: '15px' }}>If you want to know more click on the image</p>
        <div onClick={(e) => handle()} style={{ cursor: 'pointer' }}>
          <Image src={slika} alt='lulu' width='980px' height="650px" />
        </div>
        <h2 style={{ color: '#6c63ff', margin: 0, marginTop: '20px' }}>The last cryptocurrency guide you will need</h2>
        <p>
          You have heard your friends talk about it.<br/> 
          You need to invest your money... How? Where? Why?<br/>
          Simple answer, Cryptocurrencies.
          <br/> <br/>
          But, We do not want you to make the same mistakes everyone else does when it comes to crypto.
          <br/> <br/>
          Cryptocurrency veteran Dirk de Bruin and his expert team have been researching relentlessly the best way to stop you from making these mistakes but also a way to teach you the new necessary skills surrounding crypto.
          <br/> 
          Not only has he put all this unique knowledge into a masterclass that will teach you the basics around crypto but he will also tell you the next 3 coins he will be personally investing in.
          <br/> 
          Best part is, It is completely 100% FREE for a limited time.
          <br/> 
          I HIGHLY recommend to stop what you are doing right now and click the link below to watch Dirks crypto masterclass. Your financial future could depend on it!
          <br/> <br/>
        </p>
        <p>If you want to know more about Cryptocurrency just <span style={{ color: '#6c63ff', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handle()}>click here </span></p>
      </main>
    </div>
  )
}
