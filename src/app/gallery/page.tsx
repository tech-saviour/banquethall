import Gphoto from '@/components/Gphoto'
import MemSlider from '@/components/MemSlider'
import PhotoGallery from '@/components/PhotoGallery'
import React from 'react'

const page = () => {
  return (
    <div>
      <Gphoto/>
      <MemSlider/>
      <PhotoGallery/>
    </div>
  )
}

export default page
