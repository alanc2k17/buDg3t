var data = [4, 8, 15, 16, 23, 42];
var dyn = d3.select(".chart");

var makeBars = function() {
    d3.select(".chart")
	.selectAll("div")
	.data(data)
	.enter().append("div")
	.style("width", function(d) {
	    return d*10 + "px";})
	.text(function(d) {return d;});
}

var myFirstTransition = function(m, dur) {
    dyn.selectAll("div")
	.data(data)
	.transition()
	.duration(dur)
	.style("width", function (d) {
	    return d * m + "px";
	});
};
