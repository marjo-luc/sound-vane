import { config } from '../config';

export async function getAQIValues(lnglat) {

    var requestUrl = new URL(config.HOST + config.networking.BACKEND_PORT + `/aq/location`);
    requestUrl.searchParams.set("lng", lnglat.lng)
    requestUrl.searchParams.set("lat", lnglat.lat)

    let response: any = await fetch(requestUrl.href, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let resp = await response.json()  

    if (!response.ok) {
        console.error("Something went wrong with request to node server!")
        return resp
    } else {
        let data = resp.response.data
        let aqiValues = {}
        aqiValues["o3"] = data.iaqi.h.v
        aqiValues["humidity"] = data.iaqi.h.v
        aqiValues["co"] = data.iaqi.co.v
        aqiValues["pm25"] = data.iaqi.pm25.v
        return aqiValues;
    }
}