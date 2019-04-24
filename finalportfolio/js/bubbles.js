/* global d3 */
const yaWords = {
  'children': [
    { 'Word': 'like', 'Count': 371 },
    { 'Word': 'life', 'Count': 255 },
    { 'Word': 'world', 'Count': 252 },
    { 'Word': 'time', 'Count': 251 },
    { 'Word': 'young', 'Count': 188 },
    { 'Word': 'little', 'Count': 185 },
    { 'Word': 'readers', 'Count': 183 },
    { 'Word': 'new', 'Count': 177 },
    { 'Word': 'old', 'Count': 171 },
    { 'Word': 'people', 'Count': 162 },
  ]
};

var div = document.getElementById('bubble1');
var diameter = div.clientWidth;
var color = d3.scaleOrdinal(d3.schemeCategory10);

var bubble1 = d3.pack(yaWords)
  .size([diameter, diameter])
  .padding(1.5);

var svg1 = d3.select('#bubble1')
  .append('svg')
  .attr('width', diameter)
  .attr('height', diameter)
  .attr('class', 'bubble');

var nodes1 = d3.hierarchy(yaWords)
  .sum(function(d) {
    return d.Count;
  });

var node1 = svg1.selectAll('.node')
  .data(bubble1(nodes1).descendants())
  .enter()
  .filter(function(d) {
    return !d.children;
  })
  .append('g')
  .attr('class', 'node')
  .attr('transform', function(d) {
    return 'translate(' + d.x + ',' + d.y + ')';
  });

node1.append('title')
  .text(function(d) {
    return d.Word + ': ' + d.Count;
  });

node1.append('circle')
  .attr('r', function(d) {
    return d.r;
  })
  .style('fill', function(d, i) {
    return color(i);
  });

node1.append('text')
  .attr('dy', '.2em')
  .style('text-anchor', 'middle')
  .text(function(d) {
    return d.data.Word.substring(0, d.r / 3);
  })
  .attr('font-family', 'sans-serif')
  .attr('font-size', function(d) {
    return d.r / 5;
  })
  .attr('fill', 'white');

node1.append('text')
  .attr('dy', '1.3em')
  .style('text-anchor', 'middle')
  .text(function(d) {
    return d.data.Count;
  })
  .attr('font-family', 'Gill Sans', 'Gill Sans MT')
  .attr('font-size', function(d) {
    return d.r / 5;
  })
  .attr('fill', 'white');

d3.select(self.frameElement)
  .style('height', diameter + 'px');

// General Fiction bubbles
const generalWords = {
  children:[
    { 'Word': 'like', 'Count': 415 },
    { 'Word': 'life', 'Count': 341 },
    { 'Word': 'time', 'Count': 276 },
    { 'Word': 'new', 'Count': 258 },
    { 'Word': 'world', 'Count': 256 },
    { 'Word': 'american', 'Count': 243 },
    { 'Word': 'mr', 'Count': 212 },
    { 'Word': 'years', 'Count': 211 },
    { 'Word': 'people', 'Count': 209 },
    { 'Word': 'man', 'Count': 197 },
  ]
};

var bubble2 = d3.pack(generalWords)
  .size([diameter, diameter])
  .padding(1.5);

var svg2 = d3.select('#bubble2')
  .append('svg')
  .attr('width', diameter)
  .attr('height', diameter)
  .attr('class', 'bubble');

var nodes2 = d3.hierarchy(generalWords)
  .sum(function(d) {
    return d.Count;
  });

var node2 = svg2.selectAll('.node')
  .data(bubble2(nodes2).descendants())
  .enter()
  .filter(function(d) {
    return !d.children;
  })
  .append('g')
  .attr('class', 'node')
  .attr('transform', function(d) {
    return 'translate(' + d.x + ',' + d.y + ')';
  });

node2.append('title')
  .text(function(d) {
    return d.Word + ': ' + d.Count;
  });

node2.append('circle')
  .attr('r', function(d) {
    return d.r;
  })
  .style('fill', function(d, i) {
    return color(i);
  });

node2.append('text')
  .attr('dy', '.2em')
  .style('text-anchor', 'middle')
  .text(function(d) {
    return d.data.Word.substring(0, d.r / 3);
  })
  .attr('font-family', 'sans-serif')
  .attr('font-size', function(d) {
    return d.r / 5;
  })
  .attr('fill', 'white');

node2.append('text')
  .attr('dy', '1.3em')
  .style('text-anchor', 'middle')
  .text(function(d) {
    return d.data.Count;
  })
  .attr('font-family', 'Gill Sans', 'Gill Sans MT')
  .attr('font-size', function(d) {
    return d.r / 5;
  })
  .attr('fill', 'white');

d3.select(self.frameElement)
  .style('height', diameter + 'px');
