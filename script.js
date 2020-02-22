d3.csv('1981-1984.csv',function (data1) {
    d3.csv('1990-1994.csv',function(data2){
        d3.csv('1995-1998.csv',function(data3){
            d3.csv('1999-2004.csv',function(data4){
                d3.csv('2005-2009.csv',function(data5){
                    d3.csv('2010-2014.csv',function(data6) {

                        var data = data1;


                        var body = d3.select('body')
                        var selectData = [{"text": "Feeling of happiness: Quite or very happy"},
                            {"text": "Attend religious services: once a month or more"},
                            {"text": "Number of children (mean)"},
                            {"text": "Religious person"},
                            {"text": "Importance of god in life (mean)"},
                            {"text": "Religious faith is important for children"},
                            {"text": "Thinks often or sometimes about meaning and purpose of life"},
                            {"text": "Tolerance and respect for other people is important for children"},
                        ]
                        var periodData = [{"text": "1981-1984"},
                            {"text": "1990-1994"},
                            {"text": "1995-1998"},
                            {"text": "1999-2004"},
                            {"text": "2005-2009"},
                            {"text": "2010-2014"}];

                        var imgCountries = [
                            "https://cdn.countryflags.com/thumbs/argentina/flag-button-round-250.png",
                            "https://cdn.countryflags.com/thumbs/australia/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/belarus/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/brazil/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/canada/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/chile/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/china/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/czech-republic/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/finland/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/germany/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/hungary/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/india/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/japan/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/mexico/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/netherlands/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/new-zealand/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/nigeria/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/poland/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/qatar/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/romania/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/russia/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/slovakia/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/south-africa/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/south-korea/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/spain/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/sweden/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/switzerland/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/tunisia/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/turkey/flag-round-250.png",
                            "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png"
                        ]

                        //Annonce des pays

                        var countries = document.createElement('div');
                        document.getElementsByTagName('body')[0].appendChild(countries);
                        countries.style.border = "solid black 1px";
                        countries.style.padding = "10px";

                        var titleCountries = document.createElement("h1");
                        titleCountries.innerHTML = "List of Studied Countries";
                        titleCountries.style.paddingBottom = "5px";
                        titleCountries.style.margin = "0";
                        titleCountries.style.fontSize = "20px";

                        countries.append(titleCountries);

                        for (var i = 0; i < data.length; i++) {
                            var currentCountry = document.createElement("div");
                            currentCountry.style.display = "inline-block";
                            currentCountry.style.width = "100px";
                            currentCountry.style.height = "25px";


                            var img = document.createElement("img");
                            img.src = imgCountries[i];
                            img.width = 20;
                            img.height = 20;
                            img.style.cssFloat = "left";

                            var name = document.createElement("p");
                            name.innerHTML = data[i]["Country"];
                            name.style.fontSize = "8px";
                            name.style.paddingLeft = "25px";


                            currentCountry.append(img);
                            currentCountry.append(name);

                            countries.appendChild(currentCountry);
                        }
                        ;

                        var titleTool = document.createElement('h1');
                        document.getElementsByTagName('body')[0].appendChild(titleTool);
                        titleTool.innerHTML = "Discovery Process Tool";
                        titleTool.style.padding = "10px 0";
                        titleTool.style.margin = "0";
                        titleTool.style.fontSize = "20px";


                        // Select X-axis Variable
                        var span = body.append('span')
                            .text('Select X-Axis variable: ')
                        var xInput = body.append('select')
                            .attr('id', 'xSelect')
                            .on('change', xChange)
                            .selectAll('option')
                            .data(selectData)
                            .enter()
                            .append('option')
                            .attr('value', function (d) {
                                return d.text
                            })
                            .text(function (d) {
                                return d.text;
                            })
                        body.append('br')

                        // Select Y-axis Variable
                        var span = body.append('span')
                            .text('Select Y-Axis variable: ')
                        var yInput = body.append('select')
                            .attr('id', 'ySelect')
                            .on('change', yChange)
                            .selectAll('option')
                            .data(selectData)
                            .enter()
                            .append('option')
                            .attr('value', function (d) {
                                return d.text
                            })
                            .text(function (d) {
                                return d.text;
                            })
                        body.append('br')

                        // Select Time Variable
                        var span = body.append('span')
                            .text('Period: ')
                        var yInput = body.append('select')
                            .attr('id', 'periodSelect')
                            .on('change', periodChange)
                            .selectAll('option')
                            .data(periodData)
                            .enter()
                            .append('option')
                            .attr('value', function (d) {
                                return d.text
                            })
                            .text(function (d) {
                                return d.text;
                            })
                        body.append('br')


                        // Variables
                        var body = d3.select('body')
                        var margin = {top: 50, right: 50, bottom: 50, left: 150}
                        var h = 500 - margin.top - margin.bottom
                        var w = 500 - margin.left - margin.right
                        var formatPercent = d3.format('')
                        var radiusCircles = 10;


                        // Scales
                        var colorScale = d3.scale.category20()
                        var xScale = d3.scale.linear()
                            .domain([
                                getMin(data, 'Feeling of happiness: Quite or very happy'),
                                getMax(data, 'Feeling of happiness: Quite or very happy'),
                            ])
                            .range([0, w])
                            .nice();
                        var yScale = d3.scale.linear()
                            .domain([
                                getMin(data, 'Feeling of happiness: Quite or very happy'),
                                getMax(data, 'Feeling of happiness: Quite or very happy'),
                            ])
                            .range([h, 0])
                            .nice();


                        // SVG
                        var svg = body.append('svg')
                            .attr('height', h + margin.top + margin.bottom)
                            .attr('width', w + margin.left + margin.right)
                            .append('g')
                            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                        // X-axis
                        var xAxis = d3.svg.axis()
                            .scale(xScale)
                            .tickFormat(formatPercent)
                            .ticks(10)
                            .orient('bottom')
                        // Y-axis
                        var yAxis = d3.svg.axis()
                            .scale(yScale)
                            .tickFormat(formatPercent)
                            .ticks(10)
                            .orient('left');


                        var defs = svg.append('svg:defs');
                        defs.attr("id", "defs");

                        data.forEach(function (d, i) {
                            defs.append("svg:pattern")
                                .attr("id", "grump_avatar" + i)
                                .attr("width", radiusCircles * 2)
                                .attr("height", radiusCircles * 2)
                                .append("svg:image")
                                .attr("xlink:href", imgCountries[i])
                                .attr("width", radiusCircles * 2)
                                .attr("height", radiusCircles * 2)
                                .attr("x", 0)
                                .attr("y", 0);
                        });

                        // Circles
                        var circles = svg.selectAll('circle')
                            .data(data)
                            .enter()
                            .append('circle')
                            .attr('cx', function (d) {
                                return xScale(d['Feeling of happiness: Quite or very happy'])
                            })
                            .attr('cy', function (d) {
                                return yScale(d['Feeling of happiness: Quite or very happy'])
                            })
                            .attr('r', radiusCircles)
                            .attr('stroke', 'black')
                            .attr('stroke-width', 1)
                            // .attr('fill',function (d,i) { return colorScale(i) })
                            .attr('fill', function (d, i) {
                                return "url(#grump_avatar" + i + ")"
                            })
                            .on('mouseover', function (d, i) {
                                d3.select(this)
                                    .transition()
                                    .duration(500)
                                    .attr('r', radiusCircles * 2)

                                // Agrandir l'image

                                document.getElementById("defs").childNodes[i].width.baseVal.value = radiusCircles * 4;
                                document.getElementById("defs").childNodes[i].height.baseVal.value = radiusCircles * 4;
                                document.getElementById("defs").childNodes[i].firstElementChild.width.baseVal.value = radiusCircles * 4;
                                document.getElementById("defs").childNodes[i].firstElementChild.height.baseVal.value = radiusCircles * 4;

                                var hover = "";

                                hover += d["Country"];
                                hover += "\n";

                                var select = document.getElementById("xSelect");
                                var choice = select.selectedIndex;
                                var label = select.options[choice].value;

                                hover += label + ": " + d[label]
                                hover += "\n";

                                select = document.getElementById("ySelect");
                                choice = select.selectedIndex;
                                label = select.options[choice].value;

                                hover += label + ": " + d[label]

                                d3.select(this)[0][0].firstElementChild.innerHTML = hover;

                            })
                            .on('mouseout', function (d, i) {
                                d3.select(this)
                                    .transition()
                                    .duration(500)
                                    .attr('r', radiusCircles)
                                    .attr('stroke-width', 1)

                                // Rétrécir l'image

                                document.getElementById("defs").childNodes[i].width.baseVal.value = radiusCircles * 2;
                                document.getElementById("defs").childNodes[i].height.baseVal.value = radiusCircles * 2;
                                document.getElementById("defs").childNodes[i].firstElementChild.width.baseVal.value = radiusCircles * 2;
                                document.getElementById("defs").childNodes[i].firstElementChild.height.baseVal.value = radiusCircles * 2;

                            })
                            .append('title') // Tooltip
                            .text(function (d) {
                                var hover = "";

                                hover += d["Country"];
                                hover += "\n";

                                var select = document.getElementById("xSelect");
                                var choice = select.selectedIndex;
                                var label = select.options[choice].value;

                                hover += label + ": " + d[label]
                                hover += "\n";

                                select = document.getElementById("ySelect");
                                choice = select.selectedIndex;
                                label = select.options[choice].value;

                                hover += label + ": " + d[label]


                                return hover
                            });


                        // X-axis
                        svg.append('g')
                            .attr('class', 'axis')
                            .attr('id', 'xAxis')
                            .attr('transform', 'translate(0,' + h + ')')
                            .call(xAxis)
                            .append('text') // X-axis Label
                            .attr('id', 'xAxisLabel')
                            .attr('y', -10)
                            .attr('x', w)
                            .attr('dy', '.71em')
                            .style('text-anchor', 'end')
                            .text('Feeling of happiness: Quite or very happy')

                        // Y-axis
                        svg.append('g')
                            .attr('class', 'axis')
                            .attr('id', 'yAxis')
                            .call(yAxis)
                            .append('text') // y-axis Label
                            .attr('id', 'yAxisLabel')
                            .attr('transform', 'rotate(-90)')
                            .attr('x', 0)
                            .attr('y', 5)
                            .attr('dy', '.71em')
                            .style('text-anchor', 'end')
                            .text('Feeling of happiness: Quite or very happy')


                        //Annonce des pays

                        var noDataCountries = document.createElement('div');
                        noDataCountries.id = "noDataCountries";
                        document.getElementsByTagName('body')[0].appendChild(noDataCountries);
                        noDataCountries.style.border = "solid black 1px";
                        noDataCountries.style.padding = "10px";
                        noDataCountries.style.marginBottom = "10px";

                        noDataCountriesUpdate();

                        // SEARCH FOR COUNTRIES WITHOUT DATA FOR CURRENT SETTLE
                        function noDataCountriesUpdate(){

                            document.getElementById("noDataCountries").innerHTML="";

                            var noDataTitleCountries = document.createElement("h1");
                            noDataTitleCountries.innerHTML = "Countries without data for selected attributes";
                            noDataTitleCountries.style.paddingBottom = "5px";
                            noDataTitleCountries.style.margin = "0";
                            noDataTitleCountries.style.fontSize = "20px";

                            noDataCountries.append(noDataTitleCountries);

                            var noDataCountriesIdList = [];

                            var xSelect = document.getElementById("xSelect");
                            var xChoice = xSelect.selectedIndex;
                            var xLabel = xSelect.options[xChoice].value;

                            var ySelect = document.getElementById("ySelect");
                            var yChoice = ySelect.selectedIndex;
                            var yLabel = ySelect.options[yChoice].value;


                            for (var j=0; j<data.length;j++){
                                if (data[j][xLabel]<0 || data[j][yLabel]<0){
                                    noDataCountriesIdList.push(j);
                                }
                            }

                            for (var k=0; k<noDataCountriesIdList.length; k++) {
                                var noDataCurrentCountry = document.createElement("div");
                                noDataCurrentCountry.style.display = "inline-block";
                                noDataCurrentCountry.style.width = "100px";
                                noDataCurrentCountry.style.height = "25px";


                                var noDataImg = document.createElement("img");
                                noDataImg.src = imgCountries[noDataCountriesIdList[k]];
                                noDataImg.width = 20;
                                noDataImg.height = 20;
                                noDataImg.style.cssFloat = "left";

                                var noDataName = document.createElement("p");
                                noDataName.innerHTML = data[noDataCountriesIdList[k]]["Country"];
                                noDataName.style.fontSize = "8px";
                                noDataName.style.paddingLeft = "25px";


                                noDataCurrentCountry.append(noDataImg);
                                noDataCurrentCountry.append(noDataName);

                                noDataCountries.appendChild(noDataCurrentCountry);
                            }
                        }

                        function xChange(){
                            var value = this.value // get the new x value
                            xScale // change the xScale
                                .domain([
                                    getMin(data,value),
                                    getMax(data,value),
                                ])
                                .nice();

                            xAxis.scale(xScale) // change the xScale
                            d3.select('#xAxis') // redraw the xAxis
                                .transition().duration(1000)
                                .call(xAxis)
                            d3.select('#xAxisLabel') // change the xAxisLabel
                                .transition().duration(1000)
                                .text(value)
                            d3.selectAll('circle') // move the circles
                                .transition().duration(1000)
                                .delay(function (d,i) { return i*100})
                                .attr('cx',function (d) {
                                    return xScale(d[value]) })

                            noDataCountriesUpdate();

                        }

                        function yChange() {
                            var value = this.value // get the new y value
                            yScale // change the yScale
                                .domain([
                                    getMin(data,value),
                                    getMax(data,value),
                                ])
                                .nice();
                            yAxis.scale(yScale) // change the yScale
                            d3.select('#yAxis') // redraw the yAxis
                                .transition().duration(1000)
                                .call(yAxis)
                            d3.select('#yAxisLabel') // change the yAxisLabel
                                .text(value)
                            d3.selectAll('circle') // move the circles
                                .transition().duration(1000)
                                .delay(function (d, i) {
                                    return i * 100
                                })

                                .attr('cy', function (d) {
                                    return yScale(d[value])
                                })

                            noDataCountriesUpdate();

                        }

                        //returns the minimum of available data
                        function getMin(data, value){
                            var length = data.length;
                            var min = parseInt(data[0][value]);
                            for (var i =1; i<length;i++){
                                if (parseInt(data[i][value])>0){
                                    if (parseInt(data[i][value])<min){
                                        min=parseInt(data[i][value]);
                                    }
                                }
                            }
                            if (min<0){return 0};
                            return (min);
                        }

                        //returns the maximum of available data
                        function getMax(data, value){
                            var length = data.length;
                            var max = parseInt(data[0][value]);
                            for (var i =0; i<length;i++){
                                if (parseInt(data[i][value])>0){
                                    if (parseInt(data[i][value])>max){
                                        max=parseInt(data[i][value]);
                                    }
                                }
                            }
                            if (max<0){return 10};
                            return (max+1);
                        }


                        function periodChange(){

                            var value=this.value;

                            if (value.localeCompare("1981-1984")===0){
                                data=data1;
                            }
                            if (value.localeCompare("1990-1994")===0){
                                data=data2;
                            }
                            if (value.localeCompare("1995-1998")===0){
                                data=data3;
                            }
                            if (value.localeCompare("1999-2004")===0){
                                data=data4;
                            }
                            if (value.localeCompare("2005-2009")===0){
                                data=data5;
                            }
                            if (value.localeCompare("2010-2014")===0){
                                data=data6;
                            }

                            // X AXIS

                            var selectX = document.getElementById("xSelect");
                            var choiceX = selectX.selectedIndex;
                            var valueX = selectX.options[choiceX].value;

                            xScale // change the get the new x valuexScale
                                .domain([
                                    getMin(data,valueX),
                                    getMax(data,valueX),
                                ])
                                .nice();

                            xAxis.scale(xScale) // change the xScale
                            d3.select('#xAxis') // redraw the xAxis
                                .transition().duration(1000)
                                .call(xAxis)

                            // Y AXIS

                            var selectY = document.getElementById("ySelect");
                            var choiceY = selectY.selectedIndex;
                            var valueY = selectY.options[choiceY].value;

                            yScale // change the get the new x valuexScale
                                .domain([
                                    getMin(data,valueY),
                                    getMax(data,valueY),
                                ])
                                .nice();

                            yAxis.scale(yScale) // change the xScale
                            d3.select('#yAxis') // redraw the xAxis
                                .transition().duration(1000)
                                .call(yAxis)

                            d3.selectAll('circle')
                                .data(data)// move the circles
                                .transition().duration(1000)
                                .delay(function (d,i) { return i*100})
                                .attr('cx',function (d) {
                                    return xScale(d[valueX]) })
                                .attr('cy',function (d) {
                                    return yScale(d[valueY]) })

                            noDataCountriesUpdate();

                        };
                    })

                })
            })
        })
    })
})





