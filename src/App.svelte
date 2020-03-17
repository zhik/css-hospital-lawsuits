<script>
    import {
        onMount
    } from 'svelte';
    import bbox from '@turf/bbox'
    import AutoCompleteSearch from './components/AutoCompleteSearch.svelte'
    import Map from './components/Map.svelte'
    import Charts from './components/Charts.svelte'
    import {dataStore} from './stores'

    export let name;

    onMount(() => {
        //init data via d3js, then process data into to geojson
        Promise.all([
            d3.json("./datasets/new-york-counties.geojson"),
            d3.csv("./datasets/county-lawsuits-filed-between-2015–2019.csv"),
            d3.csv("./datasets/facility-lawsuits-filed-between-2015–2019.csv")
        ]).then(function (files) {
            //extract geojson from topojson
            const county = files[0] //topojson.feature(files[0], files[0].objects.cb_2015_new_york_county_20m);

            //combine county data with csv
            county.features.forEach(feature => {
                //look up in csv
                const name = feature.properties['NAME'];
                const lawsuits = files[1].find(item => item['County'] === name)

                if (lawsuits) {
                    //calculate bounds

                    const bounds = bbox(feature)

                    feature.properties = {
                        name,
                        lawsuits: +lawsuits["Number of Lawsuits"],
                        lawsuits_per_10000: +lawsuits["Rate per 10,000 People"],
                        bounds
                    }
                } else {
                    feature.properties = {name, lawsuits: null, lawsuits_per_10000: null}
                }

            })

            //generate geojson from csv point data
            const facility = {
                "type": "FeatureCollection",
                "features": []
            }

            files[2].forEach(item => {
                facility.features.push({
                    "type": "Feature",
                    "properties": {
                        name: item['Standardized Facility Name'].trim(),
                        system: item['System'].trim(),
                        lawsuits: +item['Number of Lawsuits'],
                        link: item['Link'].trim(),
                        id: item['ID']
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            item['Lng'],
                            item['Lat']
                        ]
                    }
                })
            })

            dataStore.set({
                county,
                facility
            })
        }).catch(function (err) {
            // handle error here
            console.error(err.message)
        })
    })
</script>

<main>
   <AutoCompleteSearch/>
    <div class="vis">
        <Map/>
        <Charts/>
    </div>
</main>

<style>
    .vis {
        display: flex;
        flex-wrap: wrap;
        box-shadow: 2px 2px rgba(30, 30, 30, 0.8);
        border: 1px solid;
        position: relative;
    }
</style>