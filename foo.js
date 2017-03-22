var revenue = [552, 399];

d3.select(".chart")
    .selectAll("div")
    .data( revenue )
    .enter().append("div")
    .style("width", function(d) {
	return d + "px"; })
    .text(function(d) {return d;} );
