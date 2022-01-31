import React from 'react'
import { ClassesAndChildren } from '../_PropsTypes'

const Section = ({ classes, children }: ClassesAndChildren) => {
  return (
    <section className={classes ? `${classes} lg:my-16 my-5` : 'lg:my-16 my-5'}>
      {children}
    </section>
  )
}

export default Section
