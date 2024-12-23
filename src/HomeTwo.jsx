
import { useSelector } from 'react-redux';
import Work from './components/Work';


const HomeTwo = () => {
    const works = useSelector(state => state.works);
  return (
    <>
        <header>
        <a href="/">Home</a>
        <a href="/work">Works</a>
        </header>

        <main>
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

export default HomeTwo