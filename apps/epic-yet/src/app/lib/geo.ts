import { Coord } from "../model/coord";
import { SupportStatus } from "../model/status";

export type LocationLookup = {location:Coord, status:SupportStatus};

export async function getLocation(): Promise<LocationLookup> {
    return new Promise((resolve) => {
        try {
            const geo = window.navigator.geolocation as Geolocation;
            geo.getCurrentPosition(
                (location) => {
                    console.log('!!!! location', location)
                    resolve({ 
                        location: {
                            lat: location.coords.latitude,
                            lon: location.coords.longitude,
                        },
                        status: SupportStatus.supported
                    });
                },
                (err) => {
                    console.log('!!!! location err', err)
                    let status = err.POSITION_UNAVAILABLE ? 
                        SupportStatus.unsupported :
                        SupportStatus.needsPermissions;

                    if (window.location.hostname == "127.0.0.1") {
                        status = SupportStatus.supported;
                    }
                    resolve({
                        location: {
                            lat: 0,
                            lon: 0
                        },
                        status
                    })
                }
            )
        } catch (err) {
            console.error(err);
            resolve({
                location:{ lat:0, lon:0 },
                status: SupportStatus.unsupported
            });
        }
    })
}