export function HowIs({activity, coord}:{ activity:string, coord: {lat:number, lon:number} }) {
    if (!activity) {
      return <>How is it at {coord.lat}° N / {coord.lon}° W? </>
    }
    else {
      return <>How is the {activity} at {coord.lat}° N  / {coord.lon}° W?</>
    }
  }