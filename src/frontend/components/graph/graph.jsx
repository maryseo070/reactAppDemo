import React from 'react';
import Graph from 'path-js';
import _ from 'lodash';

export const RandomGraph = (n, density) => {
  var nodes = _.range(n);
  var links = [];
  for (var i = 0; i < n - 1; i++) {
    for (var j = i + 1; j < n; j++) {
      if (Math.random() < density) {
        links.push({
          start: i,
          end: j,
          weight: 3 + 5 * Math.random()
        });
      }
    }
  }
  return {
    nodes: nodes,
    links: links
  };
};
//
// var palette = util.palette_to_function(Colors.mix(
//   {r: 130, g: 140, b: 210},
//   {r: 180, g: 205, b: 150}
// ));
class RGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: "",
      moving: true
    };
    this.stop = this.stop.bind(this);
  }

  componentWillMount() {
    setTimeout(this.stop, 5000);
    this.tick();
  }

  getInitialState(){
    return {
      moving: true,
      graph: Graph({
        data: RandomGraph(20, 0.25),
        width: 450,
        height: 400,
        attraction: 7,
        repulsion: 20
      })
    };
  }

  tick () {
    this.setState({ graph: this.state.graph.tick() });
    if (this.state.moving) {
      requestAnimationFrame(this.tick);
    }
  }

  stop () {
    this.setState({ moving: false });
  }

  render () {
    var edges = this.state.graph.curves.map(function(c) {
      return <path d={ c.link.path.print() } stroke="grey" fill="none" />
    });
    var nodes = this.state.graph.nodes.map(function(n, i) {
      return <circle r={ 5 } cx={ n.point[0] } cy={ n.point[1] }
        stroke="grey" fill="purple" />
    });
    return (
      <svg width="500" height="430">
        <g transform="translate(20,20)">
          { edges }
          { nodes }
        </g>
      </svg>
    );
  }

}

export default RGraph;
