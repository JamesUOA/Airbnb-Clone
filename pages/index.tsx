import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import { CardData } from '../components/MediumCard'
import { Explore } from '../components/SmallCard'
import LargeCard from '../components/LargeCard'
import { useEffect, useRef } from 'react'
import Footer from '../components/Footer'



interface HomeProps {
  exploreData: Explore[];
  cardsData: CardData[];
}

const Home: NextPage<HomeProps> = ( {exploreData, cardsData}: HomeProps ) => {
  const scrollRef = useHorizontalScroll()

  return (
    <div className="">
      <Head>
        <title>Trail - Mark your Journey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({img, distance, location}) => 
             (<SmallCard
                key={img} 
                img={img} 
                distance={distance}
                location={location} />)
            )}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll 
          scrollbar-hide p-3 -ml-3' ref={scrollRef}>
            {cardsData?.map( ({img, title}) => (
              <MediumCard key={img} img={img} title={title} />
              ))}
          </div>
        </section>

        <LargeCard
          img='http://links.papareact.com/4cj'
          title='The Greatest Ourdoors'
          description='Wishlists curated by Airbnb'
          buttonText='Get Inspired'
        />
      </main>

      <Footer />
    </div>
  )
}

export default Home
export async function getStaticProps() {
  const exploreData = await fetch('http://links.papareact.com/pyp').then(
    (res) => res.json()
  )

  const cardsData = await fetch('http://links.papareact.com/zp1').then(
    (res) => res.json()
  )
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}

export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: { deltaY: number; preventDefault: () => void }) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}