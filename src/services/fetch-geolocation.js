import axios from 'axios'

export const fetchGeoLocation = async () => {
    if (navigator.geolocation) {
        const { coords } = await getCurrentPosition()
        return {data: coords}
    } else {
        const error = 'We cannot get your current location.'
        console.log(error)
        return {error}
    }
}

function getCurrentPosition(options = {}) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })
}