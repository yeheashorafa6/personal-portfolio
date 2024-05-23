import "./Title.css"

function Title({name , desc}) {
  return (
    <div className="hero-text">
        <h2>{name}</h2>
        <p>
            {desc}
        </p>
    </div>
  )
}

export default Title
