//Define data

var data = [
  { name: "John", rating: 5 },
  { name: "Arya", rating: 6 },
  { name: "Jamie", rating: 7 },
  { name: "Daenerys", rating: 9 },
  { name: "Cersei", rating: 2 },
  { name: "Ramsay", rating: 4 }
];

var barwidth = 50;
var barOffset = 5;

//Generate SVG
var width = 600,
  height = 400;
var margin = {
  top: 40,
  bottom: 30,
  left: 30,
  right: 30
};

var svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("background", "#e9f7f2");

// Define Scales
var yScale = d3
  .scaleLinear()
  .domain([0, 10])
  .range([height - margin.bottom, margin.top]);

var xScale = d3
  .scaleBand()
  .domain(
    data.map(function(d) {
      return d.name;
    })
  )
  .range([margin.left, width - margin.right])
  .padding(0.5);

//Draw Axes
var yAxis = svg
  .append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft().scale(yScale))

  //Add label
  .append("text")
  .attr("y", 30)
  .attr("x", 20)
  .style("stroke", "black")
  .text("Rating");

var xAxis = svg
  .append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom().scale(xScale))

  //Add label
  .append("text")
  .attr("x", width - margin.left)
  .attr("y", -10)
  .style("stroke", "black")
  .text("Names");

//Draw bars

var bar = svg
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", function(d) {
    return xScale(d.name);
  })
  .attr("y", function(d) {
    return yScale(d.rating);
  })
  .attr("width", xScale.bandwidth())
  .attr("fill", "steelblue")
  .attr("height", function(d) {
    return height - margin.bottom - yScale(d.rating);
  })

  //Interaction
  .on("mouseover", function(d) {
    d3.select(this)
      .transition()
      .delay(200)
      .duration(1000)
      .style("fill", "pink");
  })

  .on("mouseout", function(d) {
    d3.select(this)
      .transition()
      .style("fill", "steelblue");
  });
