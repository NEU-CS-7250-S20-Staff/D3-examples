let numbers = [4, 10, 18, 23, 42]
colors = d3.schemeCategory10 // https://github.com/d3/d3-scale-chromatic

svg = d3.select('body').append('svg')
  .attr('width', 500)
  .attr('height', 500)

svg.selectAll('g')
  .data(numbers)
  .enter()
  .append('circle')
  .attr('cx', (d, i) => 20 + d*4)
  .attr('cy', 100)
  .attr('r', 5)
  .attr('fill', (d, i) => colors[i])

svg.selectAll('g')
    .data(numbers)
    .enter()
    .append('text')
    .attr('x', (d, i) => 20 + d*4)
    .attr('y', 80)
    .text(d => d)
    .style('font-family', 'Arial')
    .style('text-anchor', 'middle')
