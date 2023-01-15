import React from 'react'

import webWelcomeStyles from './WebdevWelcome.module.css'

function WebdevWelcome() {
  return (
    <section className={`${webWelcomeStyles.webWelcomeParent}`}>
        <section className={`${webWelcomeStyles.webWelcome}`}>
        <h3 className={`${webWelcomeStyles.webWelcomeHead}`}>Webdev</h3>
        </section>
    </section>
  )
}

export default WebdevWelcome