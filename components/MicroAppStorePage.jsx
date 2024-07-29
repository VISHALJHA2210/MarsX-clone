import React from "react";
import Image from "next/image";
import MicroAppBox from "../utils/MicroAppBox.png";
import Card from "./Card";

const MicroAppStorePage = () => {
  return (
    <div className="bg-white w-full">
        <div className="sm:w-[80%] px-4 lg:px-12 mx-auto pt-16 ">
            <div className="flex justify-between items-center gap-5">
                <div>
                    <h1 className="sm:text-6xl lg:text-7xl text-[3.2rem] leading-tight font-boldFont text-black">
                        Micro AppStore
                    </h1>
                    <div>
                        <h2 className="text-black sm:text-2xl md:text-3xl text-xl md:font-semibold font-regular sm:mt-5 mt-3 flex flex-col gap-3 max-w-[600px]">
                        <span>
                            Developers from all over the earth have spent years building
                            MicroApps so you can reuse them in seconds
                            <span className="font-default">!</span>
                        </span>
                        </h2>
                    </div>
                </div>
                <div
                className="hidden md:block relative"
                style={{ width: "17rem", height: "17rem" }}
                >
                    <Image
                        src={MicroAppBox}
                        layout="intrinsic"
                        width={350}
                        height={350}
                        alt="MicroApp Box Image"
                    />
                </div>
            </div>
            
            <div className="w-full my-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <Card title="NFT marketplace" body="NFT marketplace where artists can post their NFTs and collectors can buy them. Supports: auctions, spot price, chat, multiple cryptocurrencies, buying with fiat."  />
                <Card title="Uber for X" body="A gig economy. Uber for babysitters. Uber for teachers. Uber for anything. Supports: web, mobile app, chat, payment, and many more."  />
                <Card title="Social network" body="A social network for specific segments. E.g. a social network for book lovers. It is also possible to mix with other micro-apps and add e-commerce, for example."  />
                <Card title="NoCode builder" body="You can build a NoCode builder for things like websites, email templates, food recipes, house design, image or video builders, and more."  />
                <Card title="Collections of items" body="Present a collection of items in various layouts. Enable freemium, so that some items can be seen for free and some need payment."  />
                <Card title="Peer to peer marketplace" body="Connect buyers and vendors on a marketplace. For example, Clients and Designers; Students and Teachers; Car owners and Car services."  />
                <Card title="Video streaming" body="A Netflix like video streaming portal. Could be used for niche streaming services, subscription-based educational video libraries, etc."  />
                <Card title="Photo sharing app" body="An Instagram like photo sharing web and mobile application. Could be relevant for startups and projects centered around photo sharing."  />
                <Card title="More than 1000 apps" body="More micro apps for various purposes. Micro apps may solve a large problem and cover your entire project or you can combine multiple small micro-apps into one large."  />
            </div>

        </div>
    </div>
  );
};

export default MicroAppStorePage;
