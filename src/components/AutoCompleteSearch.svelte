<script>
    import {dataStore, mapStore} from '../stores'
    let value = ''
    let searchItems = []
    let values = []
    $: {
        if($dataStore){
            values = $dataStore.facility.features.map(feature => {
                const prop = feature.properties;
                const { name , system } = prop;
                const coords = feature.geometry.coordinates;
                return {name ,system, coords, text: `${name.toLowerCase()}, ${system.toLowerCase()}`}
            })
        }
    }


    function _set(item){
        //reset
        searchItems = []
        value = item.name;

        //zoom to location
        $mapStore.flyTo({center: item.coords, zoom: 13})
    }

    function _search() {
        if (value.length > 1) {
            searchItems = values.filter(v => v.text.includes(value.toLowerCase())).slice(0,5)
        }
    }
</script>

<div class="content">
    <input class="search"
           type="text"
           placeholder="Type here to search by Hospital or System"
           bind:value
           autocomplete="off"
           on:keyup="{_search}"/>
    <div class="autocomplete-items">
        {#each searchItems as item}
            <div on:click="{() => _set(item)}"><strong>{item.name}</strong>{item.system ? ` | ${item.system}`: ''}</div>
        {/each}
    </div>
</div>

<style>
    .content{
        position: relative;
    }
    .search {
        width: 100%;
    }

    .autocomplete-items {
        position: absolute;
        border: 1px solid #d4d4d4;
        border-bottom: none;
        border-top: none;
        z-index: 99;
        /*position the autocomplete items to be the same width as the container:*/
        top: 100%;
        left: 0;
        right: 0;
    }

    .autocomplete-items div {
        padding: 5px 10px;
        cursor: pointer;
        background-color: #fff;
        border-bottom: 1px solid #e0e0e0;
    }

    .autocomplete-items div:hover {
        /*when hovering an item:*/
        background-color: #e9e9e9;
    }

</style>