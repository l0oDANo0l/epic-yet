import { Vote } from "../model/vote";

export async function postVote(vote:Vote) {
    await fetch(`/vote`, {
        method: 'POST',
        body: JSON.stringify(vote)
    })
}