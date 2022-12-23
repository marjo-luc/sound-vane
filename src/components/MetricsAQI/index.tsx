import React from 'react'
import { RangeSlider } from '../RangeSlider'

import './style.css'

export const MetricsAQI = (props: any) => {

    return <div>
        {Object.entries(props.aqi).map((item, index) => {
            return <RangeSlider name={item[0]} value={item[1]} />
        })}</div>
}