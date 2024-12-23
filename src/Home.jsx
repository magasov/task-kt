import "./Home.css"
import { useSelector } from 'react-redux';
import Work from './components/Work';

const Home = () => {
    const works = useSelector(state => state.works);
  return (
    <>
        <header>
            <a href="/">Home</a>
            <a href="/work">Works</a>
        </header>

        <main>
        <section className="home">
            <div className="home__left">
                <h1>Hi, I am John, <br/>
                Creative Technologist</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button>Download Resume</button>
            </div>
            <div className="home__right">
                <img src="/home.png" alt="home"/>
            </div>
        </section>

        <section className="post">
            <p>Recent posts</p>
            <div className="post_home">
                <div className="post__main">
                    <h2>Making a design system from scratch</h2>
                    <div className="post__flex">
                        <p>12 Feb 2020</p>
                        <p>|</p>
                        <p>Design, Pattern</p>
                    </div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div className="post__main">
                    <h2>Making a design system from scratch</h2>
                    <div className="post__flex">
                        <p>12 Feb 2020</p>
                        <p>|</p>
                        <p>Design, Pattern</p>
                    </div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
        </section>

        <section className="work">
          <h3>Featured works</h3>
          {works.map(work => (
            <div key={work.id}>
              <a href="#">
                <Work work={work} />
              </a>
            </div>
          ))}
        </section>
        </main>
    </>
  )
}

export default Home