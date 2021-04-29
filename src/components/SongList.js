import React, { Component } from "react";
import { connect } from "react-redux";
import selectSong from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
            className="ui button primary"
            onClick={() => this.props.selectSong(song)}
            >
            Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // console.log("this.props", this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
// we are going to take our state object.
// All of the data that's inside of our redux store.
// That data eventually show up as props inside of our component
// This mapStateToProps function is going to be called with all of the state inside of redux store
// Any time we change our redux States or any time that we re-run our reducers and produce new state 
// object the mapStateToProps function is going to re-run with the newly created state object
const mapStateToProps = (state) => {
    // console.log('state, click', state);
       return { songs: state.songs };
};

// connect function is going to be used not only to get data out of
// our store, but the connect function can also be used to get action
// creators correctly into our song list

// pass second argument here. The connect function is going to take that select song action
// creator and pass it into our omponent as a props
export default connect(mapStateToProps, { selectSong })(SongList);
