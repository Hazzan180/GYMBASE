import React from 'react'
import {VideoCard } from '../../Card/Card'

const ExerciseVideos = ({exerciseVideos, name}) => {
  if(!exerciseVideos.length) return <p className='font-Raleway text-center text-[40px] max-sm:text-[30px]'>Loading...</p>

  return (
    <div>
      <h2 className='font-Raleway uppercase  max-sm:text-center text-[30px] max-sm:text-[20px] text-[#000] font-bold'>
        Watch <span className='text-[#409915]'>{name}</span> Exercise Videos
      </h2>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {
          exerciseVideos?.slice(0, 8).map((item, index) => (
            <a key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'>
            <VideoCard
            img={item.video.thumbnails[0].url} alt={item.video.title} 
            name={item.video.title}
            title={item.video.channelName}
            />
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default ExerciseVideos