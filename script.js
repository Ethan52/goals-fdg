var svg = d3.select('svg');
var element = document.getElementById('container'),
    style = window.getComputedStyle(element),
    width = style.getPropertyValue('width'),
    height = style.getPropertyValue('height');

var graph = {
    nodes: [
        {name: "Summer Goals"},

        {name: "School Assignments"},
        {name: "AP Physics"},
        {name: "AP Spanish Lit"},
        {name: "AP English Lang"},
        {name: "AP Research"},
        {name: "Precalculus"},
        {name: "Segment 0a"},
        {name: "Segment 1a"},
        {name: "Segment 2a"},
        {name: "Segment 3a"},
        {name: "Segment 4a"},

        {name: "Computer Science"},
        {name: "Machine Learning"},
        {name: "D3.js"},
        {name: "Back End Web Dev"},

        {name: "It's Academic"},
        {name: "Physics"},
        {name: "Astronomy"},
        {name: "Constellations"},
        {name: "Stars"},
        {name: "Literature"},
        {name: "Works"},
        {name: "Authors"},
        {name: "American History"},
        {name: "Presidents"},
        {name: "Wars"},
        {name: "Geography"},
        {name: "Countries"},
        {name: "Capitals"},
        {name: "Rivers"},
        {name: "Islands"},

        {name: "Books"},
        {name: "A Brief History of Time"},
        {name: "Homer's Epics"},
        {name: "The Iliad"},
        {name: "The Odyssey"},
        {name: "The Divine Comedy"},
        {name: "Inferno"},
        {name: "Purgatorio"},
        {name: "Paradiso"},
        {name: "Fahrenheit 451"},
        {name: "Shakespeare"},
        {name: "Macbeth"},
        {name: "Julius Caesar"},
        {name: "King Lear"},
        {name: "As You Like It"},
        {name: "The Taming of the Shrew"},
        {name: "The Old Man and the Sea"},
        {name: "Beowulf"},
        {name: "To Kill a Mockingbird"},
        {name: "Paradise Lost"},

        {name: "Cultural Society"},
        {name: "Attendance Spreadsheet"},
        {name: "Flyers"}

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
        return 3;
    })
    .style("stroke", "pink");

var node = svg 
    .append("g")
    .selectAll("circle")
    .data(graph.nodes)
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("fill", function(d) {
        return "orange";
    })
    .attr("stroke", "black");

function ticked() {
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
    
    node
        .attr("cx", function(d) {
            return d.x;
        })
        .attr("cy", function(d) {
            return d.y;
        });
}