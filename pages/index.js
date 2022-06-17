import { useState } from "react"
import { questions } from "../questions"
import Head from "next/head"
import Image from "next/image"
import SingleQuestion from "../components/SingleQuestion"

export default function Home() {
  const [quests] = useState(questions)
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-softViolet to-softBlue">
      <Head>
        <title>FAQ accordion card</title>
        <meta
          name="description"
          content="In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center font-kumbhSans ">
        <section className="relative">
          <div className="  max-w-[22rem]  p-5 bg-white shadow-2xl rounded-3xl flex flex-col justify-center items-center">
            <img
              src="/illustration-woman-online-mobile.svg"
              alt=""
              className="absolute top-0 w-64 -translate-y-28"
            />
            <article className="relative mt-28 -translate-y-30">
              <h1 className="text-3xl font-bold text-center">FAQ</h1>
              {quests.map((q) => (
                <SingleQuestion key={q.id} {...q} />
              ))}
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}
