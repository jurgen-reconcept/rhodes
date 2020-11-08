
function trackAdEvent(eventAction, eventLabel, eventValue){

  if(!ga){
    console.log('no ga');
    return;
  }

  tracker = ga.getAll()[0];
  if (tracker) {
    tracker.send("event", "Ad", eventAction, eventLabel, eventValue);
  }
}

function trackAdRedirectClick(eventLabel){
  trackAdEvent('Click to redirect', eventLabel, 1)
}

function trackAdLandingArrived(eventLabel){
    trackAdEvent('Arrived on Landing Page', eventLabel, 0)
}

function trackRedirect(eventLabel){
    trackAdEvent('Redirect', eventLabel, 1)
}

function redirectToPage(eventLabel, url){
  try {
    trackRedirect(eventLabel);
  } catch(e){}
  
  // timeout to allow GA to track
  setTimeout(() => {
    window.location.href = url;
  }, 200)
}

window.trackAdLandingArrived = trackAdLandingArrived;
window.trackAdRedirectClick = trackAdRedirectClick;
window.redirectToPage = redirectToPage;