import * as constants from "../constants/aqi"


export const calcRelativeAQI = (key: any, val: any) => {
    let relativeVal;
    switch (key) {
        case constants.HUMIDITY:
            if (val <= 30){
                relativeVal = constants.FLAT
            }else if (val >= 50) {
                relativeVal = constants.SHARP
            }else {
                relativeVal = constants.NATURAL
            }
            return relativeVal
        case constants.O3:
            if (val <= 25){
                relativeVal = constants.FLAT
            }else if (val >= 100) {
                relativeVal = constants.SHARP
            }else {
                relativeVal = constants.NATURAL
            }
            return relativeVal
        case constants.PM25:
            if (val <= 25){
                relativeVal = constants.FLAT
            }else if (val >= 100) {
                relativeVal = constants.SHARP
            }else {
                relativeVal = constants.NATURAL
            }
            return relativeVal
        case constants.CO:
            if (val <= 5){
                relativeVal = constants.FLAT
            }else if (val >= 25) {
                relativeVal = constants.SHARP
            }else {
                relativeVal = constants.NATURAL
            }
            return relativeVal
        default:
            return relativeVal
    }
}


export const getRelativeAQI = (aqi: any) => {
    let relativeAQI = {}

    Object.keys(aqi).forEach(key => {
        let relativeVal = calcRelativeAQI(key, aqi[key])
        relativeAQI[key] = relativeVal
    });

    return relativeAQI
}