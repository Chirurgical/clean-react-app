import React from 'react'
import image from "../assets/Image.jpg";


export default function Frame() {
  return (
    <section class="container">
    <img src={image} alt="build day" />
    <div class="text">
      <h1>We're a High School Robotics Team Based In Westminster CA</h1>
      <p>Founded in 2020, Team 8521 is a robotics team aiming to provide our community with hands-on opportunities and mentorships. We want to empower our community and give them the chance to show their leader and innovator ability.</p>
    </div>
  </section>
  )
}
