d3.json('samples.json').then(function(theData) {
    var values = theData['samples'][0]['sample_values'];
    var labels = theData['samples'][0]['otu_ids'];
    var hovertext = theData['samples'][0]['otu_labels'];
    console.log(theData);

    var data = [{
        type: "bar",
        x: labels,
        y: values
    }];

    var layout = {
        margin: { 1: 0, b:0, t:0},
        width: 450,
        height:450
    };

    Plotly.newPlot('bar', data, layout);
})