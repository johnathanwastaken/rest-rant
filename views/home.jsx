const React = require("react");
const Def = require("./default");

function home() {
  return (
      <Def>
            <main>
                <h1>Burgertopia</h1>
                <h2>Your hub for the best burgers in town</h2>
                    <div className="container"> 
                        <div className="center"> 
                <a href="/places">
                    <button className="btn-primary">Join Us!</button>
                </a>
                        </div>  
                    </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80" alt="Delicious Burger"/>
                </div>
                <div className="link">
                Photo by <a href="https://unsplash.com/@amir_v_ali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">amirali mirhashemian</a> on <a href="https://unsplash.com/s/photos/burger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </main>  
        </Def>
    )
}

module.exports = home;
