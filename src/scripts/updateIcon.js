import { testTabRef, SetIcon } from 'scripts'

export default function updateIcon(tabId) {
  testTabRef(tabId, (status, version, ref) => {

    switch (status) {
      case ('DISABLED'): SetIcon.setDisabled(tabId); break
      case ('READY'): SetIcon.setReady(tabId, version); break
      case ('LIVE'): SetIcon.setLive(tabId, version); break
    }
  })
}