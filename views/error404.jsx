const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
          <h1>404 Error: Sorry! There's no food here!</h1>
                <img src="https://media1.giphy.com/media/G4Ihli2UThrBS/giphy.gif?cid=790b76115fa42105929ecab5c8636cd6ee4a6eb6601ba70f&rid=giphy.gif&ct=g" alt="Confused 404 pic" />
                <div className="container"> 
                        <div className="center"> 
                <a href="/">
                    <button className="btn-primary">Go Back</button>
                </a>
                        </div>  
                    </div>
                <div></div>
          </main>
      </Def>
    )
  }  
  
module.exports = error404