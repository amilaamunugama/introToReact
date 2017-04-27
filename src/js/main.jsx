// Create a root component
var Box = React.createClass({
  _handleHover : function(){
    console.log("hovered");
    this.setState({
      background : "white"
    });
  },
  getInitialState: function(){
    return {
      size: "20",
      background: "red"
    }
  },
  render: function(){
    // Insert the value using this.state
    var size = this.props.size ? this.props.size : this.state.size;
    var background = this.props.background ? this.props.background : this.state.background;
    const divStyle = {
      width: size + "px",
      height: size + "px",
      background : background
    };
    return <div style={divStyle} onfocus={this._handleHover}>
      <Banner text="amila"/>
    </div>
  }
})

var Banner = React.createClass({
  render: function(){
    return <div>
      {this.props.text}
    </div>
  }
})



// Render the component into the DOM with id of box
ReactDOM.render(<Box size="100"/>, document.getElementById("box"))
