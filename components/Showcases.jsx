import React from 'react'
import Card from './Card'

const Showcases = () => {
  return (
    <div className='w-full'>
        <div className='sm:w-[80%] px-4 lg:px-12 mx-auto py-16'>
            <h1 className='sm:text-6xl lg:text-7xl text-[3.2rem] leading-tight font-boldFont text-black'>
                300<span className='font-default'>+</span> Showcases
            </h1>

            <h2 className='text-gray-900 sm:text-2xl md:text-2xl text-xl md:font-regular font-semibold sm:mt-5 mt-3 flex flex-col gap-3 max-w-[600px]'>
              <span>These startups have saved millions of dollars and thousands of hours</span>
            </h2>

            <div className="w-full my-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              <Card title="BitBot" body="Helps entrepreneurs and investors get an overview of a capable, enabling effective management on an easy to use and connected platform" btn="true" />
              <Card title="NFT ART Finance" body="Join the New Era of Music & Art. Unique NFT platform empowers creators with accessible & safe tools. Turn your music, art, and ideas into NFTs!" btn="true" />
              <Card title="Bergen Kino" body="Second largest cinema in Norway (web, mobile apps, admin, dashboard). The platform is built and operated by FilmGrid on top of Mars." btn="true" />
              <Card title="SASU" body="A Marketplace that connects customers with service providers" btn="true" />
              <Card title="CakelEasy" body="An e-commerce platform for bakeries" btn="true" />
              <Card title="FilmFinder" body="A where to watch service that is run by the Danish government" btn="true" />
              <Card title="Cultrpix" body="Streaming classic cult, exploitation, grindhouse and genre films that other sites are afraid to show you" btn="true" />
              <Card title="BIFF" body="Bergen International Film Festival (BIFF) is the largest film festival in Norway" btn="true" />
              <Card title="Capa Conference Booking" body="Cinema advertising to approximately 15 cinemas that deliver 5+ million visitors each year" btn="true" />
              <Card title="Wallis Cinemas" body="Wallis Cinemas is a South Australian company that operates cinema complexes, cinemas and drive ins in the city and in Adelaide." btn="true" />
              <Card title="Trondheim & Kinmen Kino" body="Norway’s easiest ticket purchases. Clean and engaging cinema program. Native Mobile apps on iOS and Android." btn="true" />
              <Card title="STRAWHATZ NFT" body="Since the computer’s algorithm is creating this NFT collection. The reveal will be as exciting for us, as it is for you!" btn="true" />
              <Card title="Tons of Rock" body="Already at this year’s festival, everyone who owns Tons of Rock NFT and is attending the festival will qualify for one of the bonuses." btn="true" />
              <Card title="Enter.market" body="Enter.market is where art meets collectibles, PFPs, audio NFTs, and game assets. Uniting the world of NFTs on a platform." btn="true" />
              <Card title="Kingdoms of Ether (web3)" body="An open sourced brand and a digital identity project. The core mission is to create incentives for co-creation." btn="true" />

            </div>


        </div>
    </div>
  )
}

export default Showcases
