import React from 'react'
import robot from '../assets/robot.jpg'


export default function Frame() {
  return (
    <section class="container">
      <img src ={robot}></img>
      <div class = "paragraph">
        <h1>Hello</h1>
        <p>This is an image of a robot from our very cool skool WHS.</p>
      </div>
  </section>
  )
}
