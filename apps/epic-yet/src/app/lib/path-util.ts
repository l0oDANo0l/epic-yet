

const activities = [
  'Party',
  'Snow',
  'Surf',
  'Dirt',
  'Park',
  'Pavement',
  'Gravel',
  'Wind'
]

function getActivity() {
  const activity = window.location.pathname.replace(/^\//, '');
  if (activities.some(x => x === activity)) {
    return activity;
  }
  return 'Couch'
}