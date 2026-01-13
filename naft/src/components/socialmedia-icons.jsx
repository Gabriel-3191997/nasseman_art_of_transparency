import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

class SocialmediaIcons extends React.Component {
  render() {
    return (
      <div className="flex gap-4 mx-20 text-2xl text-red-900">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faYoutube} />
      </div>
    )
  }
}

export default SocialmediaIcons
