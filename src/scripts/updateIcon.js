import SetIcon from "./SetIcon"
import testDebugStatus from "./testDebugStatus"

export default function updateIcon(tabId) {
  testDebugStatus(tabId, (status, result) => {
    
    switch (status) {
      case ('DISABLED'): SetIcon.setDisabled(tabId); break
      case ('READY'): SetIcon.setReady(tabId, result.version); break
      case ('LIVE'): SetIcon.setLive(tabId, result.version); break
    }
  })
}