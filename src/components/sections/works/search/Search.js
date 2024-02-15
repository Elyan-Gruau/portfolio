import "./search.css";
function Search(){
    return (
      //   faire en sorte que dans le placeholder, le nom des projets defilent.
      <div className="searchBar">
          <input id="searchWorkInput" placeholder="A suivre ... :) " type="text"/>
          <button id="searchWorkButton"></button>
      </div>
    );
}
export default Search;