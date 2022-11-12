anychart.onDocumentReady(function (){
    //create pie chart with passed data
    let chart = anychart.pie3d([
        ['Facebook', 2740],
        ['Youtube', 2291],
        ['Twitter', 353],
        ['Instagram', 1221],
        ['TikTok', 689],
        ['Tumbler', 400],
        ['Pinterest', 442]
    ]);

    //custom palette
    let palette = anychart.palettes.distinctColors();
    palette.items(
        ['#3b5998', '#c4302b', '#00acee', '#dd2a7b', '#010101', '#34526f', '#e60023']
    );
    //turn on chart animation 
    //chart.animation(true);

    //set chart title
    chart.title("The World's most-used Social Platforms (Jan 2021)")
    //set chart raduis
         .radius('50%');

    //set title font
    chart.title().fontSize(25);
    
    //set chart background
    chart.background({fill: "#e2e2e2 3.5"});

    //set chart palette
    chart.palette(palette);
    
    //set container id for the chart
    chart.container('chart-cont');
    //initiate chart drawing
    chart.draw();
});