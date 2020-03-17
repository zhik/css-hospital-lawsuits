<script>
    import {data} from '../stores'

    let container;

    $: {
        if ($data) {
            const margin = {top: 20, right: 20, bottom: 100, left: 40},
                    width = 400 - margin.left - margin.right,
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
            const svg = d3.select(container)
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform",
                            "translate(" + margin.left + "," + margin.top + ")");

            const facility_data = $data.county.features.map(feature => feature.properties).filter(feature => feature.lawsuits_per_10000)
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
                    .attr("fill", function (d){ return getColor(d.lawsuits_per_10000) });

            // add the x Axis
            svg.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x))
                    .selectAll("text")
                        .style("text-anchor", "end")
                        .attr("dx", "-.8em")
                        .attr("dy", ".15em")
                        .attr("transform", "rotate(-75)");


            // add the y Axis
            svg.append("g")
                    .call(d3.axisLeft(y));
        }
    }
</script>

<div class="content">
    <svg bind:this={container}></svg>
</div>

<style>
    .content {
        height: 500px;
        flex: 1 1 340px;
        min-width: 340px;
        overflow: auto;
        background: #ebebeb;
        display: flex;
        flex-direction: column;
    }

    svg {
        font: 10px sans-serif;
    }

</style>