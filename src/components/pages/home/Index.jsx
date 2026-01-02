import React from 'react'
import Banner from './Banner'
import Exam from './Categories'
import Treading from './Treading'
import Upsc from './Upsc'
import Notebook from './Notebook'
import Magazine from './Magazine'

export const Homepage = () => {
  return (
    <div>
      <Banner />
      <Exam />
      <Treading />
      <Magazine />
      <Upsc />
      <Notebook />
    </div>
  )
}

