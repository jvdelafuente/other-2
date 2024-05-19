import '../styles/about.css'

export default function About() {
  return (
    <div className='about-big-container' id='about'>
      <div className="about-h1-container">
      <h1>About</h1>
      </div>
      <div className="about-bothcards-container">
      <div className="about-card-container">
        <div id='card1' className="card">
          <div className="card-h2-container">
          <h2>Tools</h2>
          </div>
          <div className="card-p-container">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius culpa repellat sint. Iste molestias voluptatum dignissimos, ipsum maiores!</p>
          </div>
          <div className="about-tools">
            <h3>React</h3>
            <h3>CSS</h3>
            <h3>HTML</h3>
            <h3>NodeJs</h3>
            <h3>JavaScript</h3>
            <h3>SASS</h3>
            <h3>Tailwind</h3>
          </div>
        </div>
        <div id='card2' className="card">
          <div className="card-h2-container">
          <h2>Social</h2>
          </div>
          
          <div className="card-p-container">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius culpa repellat sint. Iste molestias voluptatum dignissimos, ipsum maiores, vitae, dolor at mollitia!</p>
          </div>
          <div className="about-socials">
            <div className="about-social-each"><h3>Proactive</h3> <h3>✔</h3></div>
            <div className="about-social-each"><h3>Motivated </h3> <h3>✔</h3></div>
            <div className="about-social-each"><h3>Quick learning</h3> <h3>✔</h3></div>
            <div className="about-social-each"><h3>Open</h3> <h3>✔</h3></div>
            <div className="about-social-each"><h3>Agile</h3> <h3>✔</h3></div>
          </div>
        </div>
        </div>
          <h2 className='about-xp-tittle'>Experience</h2>
        <div className='about-xp-container'>
          <div className="card-h2-container">
          </div>
          <div id='about-xp' className="about-exp1">
            <h3><span>Company:</span> Placeholder</h3><h3><span>Position:</span> Placeholder</h3><h3><span>Assignments:</span><br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quaerat maiores.</h3>
          </div>
          <div id='about-xp' className="about-exp2">
            <h3><span>Company:</span> Placeholder</h3><h3><span>Position:</span> Placeholder</h3><h3><span>Assignments:</span><br/> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, ab mollitia asperiores deserunt totam incidunt est quidem neque nulla natus, sed aliquam enim voluptatem ullam laudantium. Quam obcaecati necessitatibus quidem?
            Dignissimos harum sunt, ad natus, quis consequatur tenetur expedita aliquid dolore accusantium magnam adipisci ipsum non, eveniet sequi quam earum odit veritatis at corporis in magni! Repudiandae deleniti dolores laboriosam. </h3>
          </div>
          <div id='about-xp' className="about-exp1">
            <h3><span>Company:</span> Placeholder</h3><h3><span>Position:</span> Placeholder</h3><h3><span>Assignments:</span><br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, harum rem doloribus minus perspiciatis praesentium tempore, iste temporibus beatae asperiores sed provident illo veniam, laudantium quod? Ducimus dolor tenetur consequatur!</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
