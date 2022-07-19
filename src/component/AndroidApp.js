import React from 'react'
import MobileStoreButton from 'react-mobile-store-button';
const AndroidApp = () => {

    const AnsroidUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
  return (
    <div><MobileStoreButton
    store="android"
    url={AnsroidUrl}
    linkProps={{ title: 'Android Store Button' }}
  /></div>
  )
}

export default AndroidApp