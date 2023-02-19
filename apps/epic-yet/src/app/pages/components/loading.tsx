export type LoadingOpts = {
    waitingOn:"location"
}
export function Loading({waitingOn}:LoadingOpts) {
    return (<>
      <>
        <h1>Hang Tight</h1>
        {waitingOn === 'location' && (<><div>We might be waiting for you to give us location permissions. Please hit allow!</div></>)}
        
      </>
    </>)
  }