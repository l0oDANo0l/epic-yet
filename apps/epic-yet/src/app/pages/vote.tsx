import { useEffect, useState } from 'react';
import { postVote } from '../lib/api';
import { getLocation, LocationLookup } from '../lib/geo';
import { getId } from '../lib/id';
import { Coord } from '../model/coord';
import { SupportStatus } from '../model/status';
import { ErrorNoPermissions, ErrorNoSupport } from './components/errors';
import { Head } from './components/head';
import { HowIs } from './components/how-is';
import { Loading } from './components/loading';


const pLocation = getLocation();

export type VoteOpts = { scene: string, activity?:string };
export function Vote({scene, activity}:VoteOpts) {

  activity = activity || '';
  console.log('!!! activity', activity)

  const [pending, setPending] = useState<Boolean>(false);
  const [data, setData] = useState<LocationLookup>();

  const id = getId();

  useEffect(() => {
    (async () => {
      const data = await pLocation;
      console.log('!!! location', data);
      setPending(false);
      setData(data);
    })();
  });

  const needsPermissions = () => data?.status === SupportStatus.needsPermissions;
  const unsupported = () => (id == '') || (data?.status === SupportStatus.unsupported);

  return (
    <>
      {pending && <Loading waitingOn={'location'} />}
      {!pending && data && <Ballot {...{ coord: data.location, id, scene, activity }} />}
      {!pending && needsPermissions() && <ErrorNoPermissions />}
      {!pending && unsupported() && <ErrorNoSupport />}
    </>);
}

export type BallotOpts = { scene:string, activity:string, id: string, coord: Coord };
export function Ballot({ scene, id, coord, activity }:BallotOpts) {
  return (
    <>
      <Head {...{ scene }} />
      <HowIs {...{ activity, coord }} />
      <br />
      <VoteOption name="Epic!" {...{ score: 5, id, coord, scene, activity }} />
    </>
  )
}

export type VoteOptionOpts =  { scene:string, activity:string, name: string, score: number, coord: Coord };
export function VoteOption(
  { scene, activity, name, score, coord }:VoteOptionOpts
) {
  return (<>
    <button className="vote" onClick={castVote} >EPIC!</button>
  </>)

  async function castVote() {
    await postVote({
      ...coord,
      score,
      scene,
      activity,
      fp: getId(),
    })
  }
}

