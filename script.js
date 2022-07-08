var svg = d3.select('svg');
var width = svg.attr("width");
var height = svg.attr("height");

var graph = {
    nodes: [
        {name: "Summer Goals", color: "#fff"},

        {name: "School Assignments", color: "#4357AD"},
        {name: "AP Physics", color: "#4357AD"},
        {name: "AP Spanish Lit", color: "#4357AD"},
        {name: "AP English Lang", color: "#4357AD"},
        {name: "AP Research", color: "#4357AD"},
        {name: "Precalculus", color: "#4357AD"},
        {name: "Segment 0a", color: "#4357AD"},
        {name: "Segment 1a", color: "#4357AD"},
        {name: "Segment 2a", color: "#4357AD"},
        {name: "Segment 3a", color: "#4357AD"},
        {name: "Segment 4a", color: "#4357AD"},

        {name: "Computer Science", color: "#48A9A6"},
        {name: "Machine Learning", color: "#48A9A6"},
        {name: "D3.js", color: "#48A9A6"},
        {name: "Back End Web Dev", color: "#48A9A6"},

        {name: "It's Academic", color: "#C6D34A"},
        {name: "Physics", color: "#C6D34A"},
        {name: "Astronomy", color: "#C6D34A"},
        {name: "Constellations", color: "#C6D34A"},
        {name: "Stars", color: "#C6D34A"},
        {name: "Literature", color: "#C6D34A"},
        {name: "Works", color: "#C6D34A"},
        {name: "Authors", color: "#C6D34A"},
        {name: "American History", color: "#C6D34A"},
        {name: "Presidents", color: "#C6D34A"},
        {name: "Wars", color: "#C6D34A"},
        {name: "Geography", color: "#C6D34A"},
        {name: "Countries", color: "#C6D34A"},
        {name: "Capitals", color: "#C6D34A"},
        {name: "Rivers", color: "#C6D34A"},
        {name: "Islands", color: "#C6D34A"},

        {name: "Books", color: "#F29559"},
        {name: "A Brief History of Time", color: "#F29559"},
        {name: "Homer's Epics", color: "#F29559"},
        {name: "The Iliad", color: "#F29559"},
        {name: "The Odyssey", color: "#F29559"},
        {name: "The Divine Comedy", color: "#F29559"},
        {name: "Inferno", color: "#F29559"},
        {name: "Purgatorio", color: "#F29559"},
        {name: "Paradiso", color: "#F29559"},
        {name: "Fahrenheit 451", color: "#F29559"},
        {name: "Shakespeare", color: "#F29559"},
        {name: "Macbeth", color: "#F29559"},
        {name: "Julius Caesar", color: "#F29559"},
        {name: "King Lear", color: "#F29559"},
        {name: "As You Like It", color: "#F29559"},
        {name: "The Taming of the Shrew", color: "#F29559"},
        {name: "The Old Man and the Sea", color: "#F29559"},
        {name: "Beowulf", color: "#F29559"},
        {name: "To Kill a Mockingbird", color: "#F29559"},
        {name: "Paradise Lost", color: "#F29559"},

        {name: "Cultural Society", color: "#C1666B"},
        {name: "Attendance Spreadsheet", color: "#C1666B"},
        {name: "Flyers", color: "#C1666B"}

    ],
    links: [
        /* first layer of edges */
        {source: "Summer Goals", target: "School Assignments"},
        {source: "Summer Goals", target: "Computer Science"},
        {source: "Summer Goals", target: "It's Academic"},
        {source: "Summer Goals", target: "Books"},
        {source: "Summer Goals", target: "Cultural Society"},

        /* second layer for school assignments */
        {source: "School Assignments", target: "AP Physics"},
        {source: "School Assignments", target: "AP Spanish Lit"},
        {source: "School Assignments", target: "AP English Lang"},
        {source: "School Assignments", target: "AP Research"},
        {source: "School Assignments", target: "Precalculus"},

        /* segments! (third layer) */
        {source: "Precalculus", target: "Segment 0a"},
        {source: "Precalculus", target: "Segment 1a"},
        {source: "Precalculus", target: "Segment 2a"},
        {source: "Precalculus", target: "Segment 3a"},
        {source: "Precalculus", target: "Segment 4a"},

        /* second layer for comp sci */
        {source: "Computer Science", target: "Machine Learning"},
        {source: "Computer Science", target: "D3.js"},
        {source: "Computer Science", target: "Back End Web Dev"},

        /* second layer for It's Ac */
        {source: "It's Academic", target: "Physics"},
        {source: "It's Academic", target: "Astronomy"},
        {source: "It's Academic", target: "Literature"},
        {source: "It's Academic", target: "American History"},
        {source: "It's Academic", target: "Geography"},

        /* Astronomy sublayer */
        {source: "Astronomy", target: "Constellations"},
        {source: "Astronomy", target: "Stars"},

        /* Literature sublayer */
        {source: "Literature", target: "Works"},
        {source: "Literature", target: "Authors"},

        /* American History sublayer */
        {source: "American History", target: "Presidents"},
        {source: "American History", target: "Wars"},

        /* Geography sublayer */
        {source: "Geography", target: "Countries"},
        {source: "Geography", target: "Capitals"},
        {source: "Geography", target: "Rivers"},
        {source: "Geography", target: "Islands"},

        /* second layer for books */
        {source: "Books", target: "A Brief History of Time"},
        {source: "Books", target: "Homer's Epics"},
        {source: "Books", target: "The Divine Comedy"},
        {source: "Books", target: "Fahrenheit 451"},
        {source: "Books", target: "Shakespeare"},
        {source: "Books", target: "The Old Man and the Sea"},
        {source: "Books", target: "Beowulf"},
        {source: "Books", target: "To Kill a Mockingbird"},
        {source: "Books", target: "Paradise Lost"},

        /* Homer sublayer */
        {source: "Homer's Epics", target: "The Iliad"},
        {source: "Homer's Epics", target: "The Odyssey"},

        /* Dante sublayer */
        {source: "The Divine Comedy", target: "Inferno"},
        {source: "The Divine Comedy", target: "Purgatorio"},
        {source: "The Divine Comedy", target: "Paradiso"},

        /* Shakespeare sublayer */
        {source: "Shakespeare", target: "Macbeth"},
        {source: "Shakespeare", target: "Julius Caesar"},
        {source: "Shakespeare", target: "King Lear"},
        {source: "Shakespeare", target: "As You Like It"},
        {source: "Shakespeare", target: "The Taming of the Shrew"},

        /* second layer for Cultural Society */
        {source: "Cultural Society", target: "Attendance Spreadsheet"},
        {source: "Cultural Society", target: "Flyers"}
    ]
};

var simulation = d3
    .forceSimulation(graph.nodes)
    .force(
        "link",
        d3.forceLink(graph.links).id(function(d) {
            return d.name;
        })
        .links(graph.links)
    )
    .force("charge", d3.forceManyBody().strength(-30))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .on("tick", ticked);

var link = svg
    .append("g")
    .selectAll("line")
    .data(graph.links)
    .enter()
    .append("line")
    .attr("stroke-width", function(d) {
        return 1;
    })
    .style("stroke", "white");

var node = svg 
    .append("g")
    .selectAll("circle")
    .data(graph.nodes)
    .enter()
    .append("circle")
    .attr("r", 6)
    .attr("fill", function(d) {
        return d.color;
    })
    .attr("stroke", "dimgray")
    .call(
        d3
            .drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
    );

node.append("title")
    .text(function(d) { return d.name; });

function ticked() {
    node
        .attr("cx", function(d) {
            return d.x;
        })
        .attr("cy", function(d) {
            return d.y;
        });

    link
        .attr("x1", function(d) {
            return d.source.x;
        })
        .attr("y1", function(d) {
            return d.source.y;
        })
        .attr("x2", function(d) {
            return d.target.x;
        })
        .attr("y2", function(d) {
            return d.target.y;
        });
}

function dragstarted(d) {    
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}


