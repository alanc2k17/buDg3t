var revenue = [552, 399];
var dyn = d3.select(".chart");

var makeBars = function() {
d3.select(".chart")
    .selectAll("div")
    .data( revenue )
    .enter().append("div")
    .style("width", function(d) {
	return d + "px"; })
    .text(function(d) {return d;} );
}

var transition = function(m, dur) {
    dyn.selectAll("div")
	.data(data)
	.transition()
	.duration(dur)
	.style("width", function (d) {
	    return d * m + "px";
	});
};
