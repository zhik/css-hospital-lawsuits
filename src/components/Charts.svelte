<script>
    import {dataStore, mapStore} from '../stores'
    import d3 from '../assets/d3.js'

    let container
    let clientWidth
    let svg

    $: {
        if ($dataStore && clientWidth) {
            const margin = {top: 20, right: 20, bottom: 100, left: 40},
                    width = clientWidth - margin.left - margin.right,
                    height = 400 - margin.top - margin.bottom;

            // set the ranges
            const x = d3.scaleBand()
                    .range([0, width])
                    .padding(0.1);
            const y = d3.scaleLinear()
                    .range([height, 0]);

            function getColor(num) {
                return num > 150
                        ? "#003b54"
                        : num > 101
                                ? "#006a92"
                                : num > 51
                                        ? "#69b1ce"
                                        : num > 11
                                                ? "#91c4db"
                                                : num > 1
                                                        ? "#bfe1ec"
                                                        : num > 0
                                                                ? "#e2f7fe"
                                                                : "#d8d9da";
            }

            // append the svg object to the body of the page
            // append a 'group' element to 'svg'
            // moves the 'group' element to the top left margin
            if (svg) svg.remove()

            svg = d3.select(container)
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform",
                            "translate(" + margin.left + "," + margin.top + ")");

            // Define the div for the tooltip
            const tooltip = d3.select("body").append("div")
                    .attr("class", "tooltip")
                    .style("opacity", 0);

            const facility_data = $dataStore.county.features.map(feature => feature.properties).filter(feature => feature.lawsuits_per_10000)
            x.domain(facility_data.map(function (d) {
                return d.name;
            }));
            y.domain([0, d3.max(facility_data, function (d) {
                return d.lawsuits_per_10000;
            })]);

            // append the rectangles for the bar chart
            svg.selectAll(".bar")
                    .data(facility_data)
                    .enter().append("rect")
                    .attr("class", "bar")
                    .attr("x", function (d) {
                        return x(d.name);
                    })
                    .attr("width", x.bandwidth())
                    .attr("y", function (d) {
                        return y(d.lawsuits_per_10000);
                    })
                    .attr("height", function (d) {
                        return height - y(d.lawsuits_per_10000);
                    })
                    .attr("fill", function (d) {
                        return getColor(d.lawsuits_per_10000)
                    })
                    .on("mouseover", d => {
                        tooltip.transition()
                                .duration(100)
                                .style("opacity", .9);
                        tooltip.html(`
                                <p><strong>${d.name}</strong></p>
                                <p><strong>Lawsuits:</strong> ${d.lawsuits}</p>
                                <p><strong>Rate per 10,000:</strong> ${d.lawsuits_per_10000}</p>
                        `)
                                .style("left", (d3.event.pageX) + "px")
                                .style("top", (d3.event.pageY - 28) + "px");
                    })
                    .on("mouseout", d => {
                        tooltip.transition()
                                .duration(400)
                                .style("opacity", 0);
                    })
                    .on("click", d => {
                        $mapStore.fitBounds(d.bounds, {
                            padding: 20
                        });
                    })

            // add the x Axis
            svg.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x))
                    .selectAll("text")
                    .style("text-anchor", "end")
                    .attr("dx", "-.8em")
                    .attr("dy", ".15em")
                    .attr("transform", "rotate(-60)")

            // add the y Axis
            svg.append("g")
                    .call(d3.axisLeft(y));
        }
    }
</script>

<div class="content" bind:clientWidth={clientWidth}>
    <h4>Hospital Lawsuits Against Patients by County, 2015–2019</h4>
    <h5>Rate per 10,000 People</h5>
    <svg class="chart" bind:this={container}></svg>
    <h6>Zoom in or search to show lawsuits by hospital facility</h6>
</div>

<style>
    .content {
        height: 500px;
        flex: 1 1 420px;
        min-width: 400px;
        overflow-x: auto;
        background: #f6f6f6;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h4 {
        margin-top: 1rem;
    }

    h5 {
        margin: 0;
        color: #999999;
    }

    svg {
        font: 10px sans-serif;
    }


    :global(div.tooltip) {
        color: white;
        position: absolute;
        text-align: center;
        width: 100px;
        padding: 2px;
        font: 12px sans-serif;
        background: rgba(0, 0, 0, .8);
        pointer-events: none;
    }

    :global(div.tooltip p) {
        margin: 2px;
    }

    .button {
        background-color: #ddd;
        border: none;
        color: black;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 16px;
    }

</style>