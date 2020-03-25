import {select, selectAll, event} from 'd3-selection';
import {
    scaleBand, scaleLinear
} from 'd3-scale';
import {axisLeft, axisBottom} from 'd3-axis';
import {max} from 'd3-array'
import {json, csv} from 'd3-fetch'
import { transition } from 'd3-transition';


export default {
    select,
    selectAll,
    get event() { return event; },
    scaleBand,
    scaleLinear,
    axisLeft,
    axisBottom,
    max,
    json,
    csv,
    transition
};