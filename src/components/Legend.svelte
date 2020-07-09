<script>
    export let countyLegend = []
    export let facilityLegend = []
    let opened = true

    $: console.log(facilityLegend)
</script>

<div id="legend">
    <p class="title" on:click={() => opened = !opened}><strong>Legend </strong> ({opened ? 'hide': 'show'})</p>
    {#if opened}
        <hr>
        <p class="legend-item"><strong>County: </strong>Lawsuits per 10,000 People</p>
        {#each countyLegend as item}
            <i style="background: {item[0]}; color: {item[2]};">{item[1]}</i><br/>
        {/each}
        <hr>
        <p class="legend-item"><strong>Facility: </strong>Lawsuits</p>
        <div class="bubble-legend">
            <ul class="bubble-list">
                {#each facilityLegend as item, i}
                    <li class="bubble-item">
                        <div class="bubble-label" style="bottom: {i * 20 - 1}%;">
                            <div class="bubble-numbers">{item.key[0] < 0 ? 1 : item.key[0]}</div>
                        </div>
                        <div class="bubble-circle">
                            <span class="circle" style="bottom: {i * 20}%; height: {`${item.value * 1.2}px`} ; width: {`${item.value * 1.2}px`};"></span>
                        </div>
                    </li>
                {/each}
            </ul>
        </div>
    {/if}
</div>

<style>
    #legend {
        font-size: 1rem;
        line-height: 18px;
        color: #555;
        position: absolute;
        bottom: 40px;
        left: 10px;
        z-index: 2;
        background-color: rgba(255,255,255,0.8);
        padding: 4px;
        border-radius: 4px;
        max-width: 100px;
        border: 1px solid rgba(0,0,0,0.3);
    }

    .legend-item{
        margin-bottom: 0.5rem;
    }

    #legend p{
        margin: 0 0 5px 0;
    }

    #legend .title{
        font-size: 0.5rem;
    }

    #legend .title strong{
        font-size: 1.3rem;
        font-style: italic;
    }

    #legend i {
        width: 100%;
        height: 18px;
        float: left;
        margin-right: 8px;
        text-align: center;
        opacity: 0.8;
    }

    .bubble-legend{
        display: block;
        height: 75px;
    }

    .bubble-list{
        height: 100%;
        width: 100%;
        color: rgb(61, 33, 33);
        list-style: none;
        position: relative;
        padding-left: 5px;
    }

    .bubble-item{
    }

    .bubble-label{
        position: absolute;
        font-size: 0.75rem;
        line-height: 0.9rem;
    }

    .bubble-circle{
        opacity: .9;
        right: 0;
    }

    .circle{
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 100%;
        height: 100%;
        transform: translate3d(-50%,0,0);
        border: 1px solid rgb(171,70,78);
        border-radius: 50%;
        color: #ef626d;
        background-color: #ef626d;
        box-shadow: -1px 0 2px 0 rgba(0,0,0,.1);
        pointer-events: none;
    }
</style>