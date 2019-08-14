import React from "react";
import { connect } from "react-redux";
import "./movie.css";
import { getPopularMovies } from "../Actions/Index";
class MovieList extends React.Component {

  componentDidMount(){
    this.props.getPopularMovies();
    
  }
  render(){
  return (<>

  <div class="movies-container">
{this.props.movies.map((movie, index) => {  
  return (
    <div class="movie"> 
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster"/>
    </div>
 );
})   
       
    }
    </div>
 
 


  </>
  )};
  
};

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  };
};

export default connect(
  mapStateToProps,
  {getPopularMovies}
)(MovieList);
