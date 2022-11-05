const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
    <h1>HOME</h1>
    <div>
      <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80" alt="Pizza on Chopping Board" />
      <div>
        Photo by <a href="AUTHOR_LINK">Chad Montano</a> on <a href="UNSPLASH_LINK">Unsplash</a>
      </div>
    </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>
        </Def>
    )

}

module.exports = home;
