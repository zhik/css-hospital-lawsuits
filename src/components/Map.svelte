<script>
    import {
        onMount
    } from 'svelte';
    import {dataStore, mapStore} from '../stores'
    let container;
    let map;

    onMount(() => {
        map = new mapboxgl.Map({
            container: 'map',
            style: carto.basemaps.voyager,
            center: [-76.358493, 42.650281],
            zoom: 5.3
        });

        //set map to store
        mapStore.set(map)
    })

    $: {
        //init sources and layers
        if(map && $dataStore){
            const countySource = new carto.source.GeoJSON($dataStore.county);
            const facilitySource = new carto.source.GeoJSON($dataStore.facility);

            const countyLayer = new carto.Layer('county', countySource, new carto.Viz(`
                color: ramp(
                    zoomRange([6,10]),
                        [opacity(ramp(buckets($lawsuits_per_10000, [0,1,11,51,101,150]),
                        [#d8d9da, #e2f7fe,#bfe1ec,#91c4db,#69b1ce,#006a92,#003b54]),1)
                        opacity(ramp(buckets($lawsuits_per_10000, [0,1,11,51,101,150]),
                        [#d8d9da, #e2f7fe,#bfe1ec,#91c4db,#69b1ce,#006a92,#003b54]),0.2)
                    ]
                    )
                strokeWidth: 1
                strokeColor: ramp(zoomRange([6,8]),[#f9f9f9,#959595])
                opacity: 0.7
            `));

            const facilityLayer = new carto.Layer('facility', facilitySource, new carto.Viz(`
                @category: ramp($system,prism)
                @name: $name
                @system: $system
                @lawsuits: $lawsuits
                @link: $link
                width: ramp(zoomrange([5,6.5,10]),[1.5,4,scaled($lawsuits,16) + 2])
                strokeColor: ramp(zoomRange([5,7]),[#f9f9f9,#959595])
                color: ramp(zoomRange([5,7]),[white,opacity(@category,0.8)])
            `));

            countyLayer.addTo(map);
            facilityLayer.addTo(map);

            //popup
            const interactivity = new carto.Interactivity(facilityLayer);
            interactivity.on('featureClick', featureEvent => {
                const coords = featureEvent.coordinates;
                const features = featureEvent.features;

                if(features.length > 0){
                    let html = []
                    features.forEach(feature => {
                        const { name, system , lawsuits, link} = feature.variables
                        html.push(`
                            <h4><a target="_blank" href="${feature.link}">${name.value}</a></h4>
                            ${system ? `<p><strong>System:</strong> ${system.value}</p>` : ''}
                            <p><strong>Amount of Lawsuits:</strong> ${lawsuits.value}</p>
                         `)
                    })

                    new mapboxgl.Popup()
                            .setLngLat([coords.lng, coords.lat])
                            .setHTML(html.join('<br/>'))
                            .addTo(map);
                }
            });
        }
    }

</script>

<div class="content">
<div id="map" bind:this={container}></div>
</div>

<style>
    .content{
        height: 500px;
        flex: 1 1 340px;
        min-width: 340px;
        overflow: auto;
        background: #ebebeb;
        display: flex;
        flex-direction: column;
    }
    #map {
        width: 100%;
        height: 100%;
    }
    :global(.mapboxgl-popup-content) {
        overflow: auto;
        max-height: 200px;
    }

    :global(.mapboxgl-popup-content p, h4) {
        margin: 0px 5px;
    }
</style>