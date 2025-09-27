import React from 'react'
import ReactPlayer from 'react-player'

const Video = () => {
  return (
    <>
    <div className="my-12 lg:my-[86px]">
        <ReactPlayer src='/homepage-video.mp4' poster='/video.jpg'  playing loop muted controls width="100%" height="100%" className='!object-cover max-h-[725px]' />
    </div>
    </>
  )
}

export default Video