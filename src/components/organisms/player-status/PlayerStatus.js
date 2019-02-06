import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
// UI Elements
import { Title, Loader } from 'components/atoms'
// Styles
import './styles.scss'

const PlayerStatus = ({ image, title, artist }) => (
  <div className="player-status">
    <Title className="song--title" content="Now playing" />
    <Suspense fallback={<Loader />}>
      <div
        className="player-status bg"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="player-status bg--overlay" />
        <div className="song--info">
          <Title className="song--title" content={title} />
          <span className="song--artist">{artist}</span>
        </div>
      </div>
    </Suspense>
  </div>
)

PlayerStatus.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string
}

PlayerStatus.defaultProps = {
  image: 'https://i.ytimg.com/vi/KQgDV9djR6M/maxresdefault.jpg',
  title: 'Lama no Copo',
  artist: 'Matuê'
}

export default PlayerStatus
