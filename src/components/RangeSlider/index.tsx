import React from 'react'
import { Form, OverlayTrigger } from 'react-bootstrap'
import { BasicTooltip } from '../BasicTooltip'
import './style.css'

export const RangeSlider = ({ name, value }) => {
    return <div className="range-slider">
        <Form.Label>{name}</Form.Label>
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={BasicTooltip}
        ><Form.Range value={value} /></OverlayTrigger>
    </div>

}