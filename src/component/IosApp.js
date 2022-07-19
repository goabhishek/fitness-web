import React from 'react'
import MobileStoreButton from 'react-mobile-store-button';

const IosApp = () => {
    const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
  return (
    <div><MobileStoreButton
    store="ios"
    url={iOSUrl}
    linkProps={{ title: 'iOS ' }}
  /></div>
  )
}

export default IosApp