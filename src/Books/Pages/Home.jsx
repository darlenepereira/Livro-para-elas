import { Link } from 'react-router-dom'
//import { FiArrowRight } from 'react-icons/fi' // importando os icons da biblioteca react-icons baixada na pasta através do comando npm install react-icons --save
import '../Styles/pages/home.css'
import '../Styles/buttonStyle.css'
// import image1 from '../Assets/image/Image.png'

const Home = () => {
    return (
        <div id='landing-page'>
            <div className='content-wrapper'>
                <section id='section-title'>
                    <p className='title'>livros para</p>
                    <h1 id='friday'> As Mulheres</h1>
                    <p className='title' >se sentirem em casa</p>
                    <p>Conheça os livros escrito por mulheres negras poderosas</p>
                </section>

                <section className='section-link'>
                    <Link to='/Books' className=' button-style enter-app'>
                        Power books
            </Link>
                    <Link to='/About' className=' button-style enter-app'>
                        Sobre a Lene
            </Link>
                </section>
            </div>
{/* 
            <div id='illustration'>

            </div> */}

        </div>
    )
}

export default Home