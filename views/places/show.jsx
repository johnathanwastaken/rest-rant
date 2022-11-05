const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <img src={data.place.pic} alt={data.place.name} />
        <h4>{data.place.cuisines}</h4>
        <h5>
          {data.place.city}, {data.place.state}
        </h5>
        <h2>Rating</h2>
        <p>Not Rated</p>
        <h2>Comments</h2>
        <p>No comments yet!</p>
        <div className="container">
          <div className="center">
            <a href={data.place.site}>
              <button className="btn-primary">Website</button>
            </a>
          </div>
        </div>

        <div className="container">
          <div className="center">
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
