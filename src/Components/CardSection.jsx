import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <section className="contact p-4 bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <Card cardImg="/src/Assets/gold.jpg" cardTitle="Orange" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            buttonText="Pear" />
          <Card cardImg="/src/Assets/red_carpet.jpg" cardTitle="Guava" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            buttonText="Apple" />
          <Card cardImg="/src/Assets/motherly_love.jpg" cardTitle="Mango" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            buttonText="Pineapple" />
        </div>
      </div>
    </section>
  )
}
export default CardSection