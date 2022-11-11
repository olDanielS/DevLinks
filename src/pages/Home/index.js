import './home.css';

export default function Home() {
 return (

   <div className='home-container'>
     <h1>Sujeito Programador</h1>
     <span>Veja meus links &#128071;</span>
    <main className='links'>
      <section className='links-area'>
          <a href='#'>
            <p className='link-text'>Canal do Youtube</p>
          </a>
      </section>
      <section className='links-area'>
          <a href='#'>
            <p className='link-text'>Instagram</p>
          </a>
      </section>
      <section className='links-area'>
          <a href='#'>
            <p className='link-text'>Facebook</p>
          </a>
      </section>
      <section className='links-area'>
          <a href='#'>
            <p className='link-text'>Twitter</p>
          </a>
      </section>
    </main>
   </div>
 );
}