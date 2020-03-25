<script>
    import {
        onMount
    } from 'svelte';
    import {dataStore, mapStore} from '../stores'
    import mapboxgl from 'mapbox-gl';
    import 'mapbox-gl/dist/mapbox-gl.css'
    import carto from '@carto/carto-vl'

    let container;
    let map;
    let popup;
    let clickPopup;

    onMount(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiemhpayIsImEiOiJjaW1pbGFpdHQwMGNidnBrZzU5MjF5MTJiIn0.N-EURex2qvfEiBsm-W9j7w';

        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10',
            center: [-76.358493, 42.650281],
            zoom: 5.3
        });

        //set map to store
        mapStore.set(map)
    })

    const legendItems = [
        ['#d8d9da','N/D','black'],
        ['#e2f7fe','0','black'],
        ['#bfe1ec','1-10','black'],
        ['#91c4db','11-50','black'],
        ['#69b1ce','51-100','white'],
        ['#006a92','101-150','white'],
        ['#003b54','>150','white']
    ]

    $: {
        //init sources and layers
        if (map && $dataStore && !popup) {
            const countySource = new carto.source.GeoJSON($dataStore.county);
            const facilitySource = new carto.source.GeoJSON($dataStore.facility);
            const countyLayer = new carto.Layer('county', countySource, new carto.Viz(`
                color: ramp(
                    zoomRange([6,10]),
                        [opacity(ramp(buckets($lawsuits_per_10000, [0,1,11,51,101,150]),
                        [#d8d9da, #e2f7fe,#bfe1ec,#91c4db,#69b1ce,#006a92,#003b54]),1)
                        opacity(ramp(buckets($lawsuits_per_10000, [0,1,11,51,101,150]),
                        [#d8d9da, #e2f7fe,#bfe1ec,#91c4db,#69b1ce,#006a92,#003b54]),0.85)
                    ]
                    )
                strokeWidth: 1
                strokeColor: ramp(zoomRange([6,8]),[#f9f9f9,#959595])
            `));

            const facilityLayer = new carto.Layer('facility', facilitySource, new carto.Viz(`
                @category: ramp($system,prism)
                @name: $name
                @system: $system
                @lawsuits: $lawsuits
                @link: $link
                @windfall: $windfall
                width: ramp(zoomrange([5,6.5,10]),[1.5,4,scaled($lawsuits,16) + 2])
                strokeColor: ramp(zoomRange([5,7]),[#f9f9f9,#959595])
                color: ramp(zoomRange([5,7]),[white,opacity(@category,0.8)])
            `));

            countyLayer.addTo(map);
            facilityLayer.addTo(map);


            //popup
            function formatDollarAmount(num){
                return `$${Number((num).toFixed(1)).toLocaleString()}`
            }

            function generatePopupHTML(features) {
                return features.map(feature => {
                    const {name, system, lawsuits, link, windfall} = feature.variables
                    return `
                            <h4><a target="_blank" href="${link.value}">${name.value}</a></h4>
                            ${system.value ? `<p><strong>System:</strong> ${system.value}</p>` : ''}
                            <p><strong>Amount of Lawsuits:</strong> ${lawsuits.value}</p>
                            ${windfall.value ? `<p><strong>2018 ICP Excess:</strong> ${formatDollarAmount(+windfall.value)}</p>` : ''}
                        `
                }).join('<br/>')
            }

            const interactivity = new carto.Interactivity(facilityLayer);
            interactivity.on('featureClick', featureEvent => {
                //create a click popup that will stay
                const coords = featureEvent.coordinates;
                const features = featureEvent.features;

                if (features.length > 0) {
                    let html = generatePopupHTML(features)

                    if (clickPopup) clickPopup.remove()

                    map.getCanvas().style.cursor = 'pointer';
                    clickPopup = new mapboxgl.Popup()
                            .setLngLat([coords.lng, coords.lat])
                            .setHTML(html)
                            .addTo(map);

                }
            });

            interactivity.on('featureHover', featureEvent => {
                const coords = featureEvent.coordinates;
                const features = featureEvent.features;

                if (features.length > 0) {
                    let html = generatePopupHTML(features)

                    if (popup) popup.remove()

                    //only allow hover over , if clickup popup is not open
                    if (!clickPopup || !clickPopup._closeButton.isConnected) {
                        map.getCanvas().style.cursor = 'pointer';
                        popup = new mapboxgl.Popup()
                                .setLngLat([coords.lng, coords.lat])
                                .setHTML(html)
                                .addTo(map);
                    }


                }
            });

            interactivity.on('featureLeave', featureEvent => {
                map.getCanvas().style.cursor = '';
                if (popup) popup.remove()
            })
        }
    }

</script>

<div class="content">
    <div id="map" bind:this={container}></div>
    <div id="legend">
        <p># OF LAWSUITS 10,000 PPL</p>
        {#each legendItems as item}
            <i style="background: {item[0]}; color: {item[2]};">{item[1]}</i><br/>
        {/each}
    </div>

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
        position: relative;
    }

    #map {
        width: 100%;
        height: 100%;
    }

    #legend {
        line-height: 18px;
        color: #555;
        position: absolute;
        bottom: 30px;
        left: 10px;
        z-index: 2;
        background-color: rgba(255,255,255,0.8);
        padding: 4px;
        border-radius: 4px;
        max-width: 6rem;
    }

    #legend p{
        margin: 0 0 5px 0;
    }

    #legend i {
        width: 100%;
        height: 18px;
        float: left;
        margin-right: 8px;
        text-align: center;
        opacity: 0.8;
    }

    :global(.mapboxgl-popup-content) {
        overflow: auto;
        max-height: 200px;
    }

    :global(.mapboxgl-popup-content p, h4) {
        margin: 0px 5px;
    }
</style>