var revenue = [552, 399];
var dyn = d3.select(".chart");

var makeBars = function(m,dur) {
    dyn.selectAll("div")
	.data( revenue )
	.enter().append("div")
	.style("width",0)
	.transition()
	.duration(dur)
	.style("width", function(d) {
	    return d*m + "px"; })
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

makeBars(1,3000);
