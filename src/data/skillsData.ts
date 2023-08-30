import html from "../assets/html.svg"
import css from "../assets/css.svg"
import javaScript from "../assets/javaScript.svg"
import react from "../assets/react.svg"
import bootstrap from "../assets/bootstrap.svg"
import tailwind from "../assets/tailwind.svg"
import laravel from "../assets/laravel.svg"
import express from "../assets/express.svg"
import mysql from "../assets/mysql.svg"
import mongodb from "../assets/mongodb.svg"


interface Skills {
  name: string,
  image: string,
}

export const frontEnd: Skills[] = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: javaScript },
  { name: "React", image: react },
  { name: "Bootstrap", image: bootstrap },
  { name: "Tailwind", image: tailwind },
]

export const backEnd: Skills[] = [
  {name: "Laravel", image: laravel},
  {name: "Express", image: express},
]

export const database: Skills[] = [
  {name: "mySQL", image: mysql},
  {name: "MongoDb", image: mongodb},
]