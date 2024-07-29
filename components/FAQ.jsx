import React from 'react'
import DropdownFAQ from './DropdownFAQ'

const FAQ = () => {
  return (
    <div className='bg-black w-full'>
        <div className='sm:w-[80%] px-4 lg:px-12 mx-auto py-16'>
            <h1 className='sm:text-6xl lg:text-7xl text-[3.2rem] leading-tight font-boldFont text-white'>FAQ</h1>

            <div className='mt-10 mb-5  mx-auto  flex flex-col gap-5'>
                <DropdownFAQ title="Is Mars a No-Code or Code builder?" body="Mars is a devtool (Dev Tool) that lets you start building using No-Code and zero coding skills as long as you stay within the scope of existing micro apps. For example, you can 100% No-Code an Uber-like marketplace. However, if you need to make something completely custom, you need to use the Mars Code interface that lets you enter a proper full-scale coding IDE and create your custom logic. So, unlike Bubble, Mars won't let you build anything with No-Code. Why didn't we make it just like Bubble? Because we believe that the project should start as No-Code and it needs to be simple, so you do not need to pass the course and study in the academy. Once you overgrow the No-Code capabilities it makes sense to switch to Code. If you are using other No-Code tools, you would have to just throw away everything you've made and start building from scratch using custom programming technics. The main innovation behind Mars is that once you overgrow the No-Code, you can just switch the coding interface from No-Code to Code. You will not lose anything you've built, not the data, not the logic. You can even continue building simple parts using No-Code and more complicated parts using Code." />

                <DropdownFAQ title="Is Mars free and opensourced?" body="Mars engine is free and open-sourced on GitHub, it runs under https://www.apache.org/licenses/LICENSE-2.0. However, the micro-apps are built by third parties and may have free or premium pricing models." />

                <DropdownFAQ title="Is there a vendor lock?" body="No, there is no vendor lock. You can run Mars on your servers, on your local machine, or closed network. It is 100% open-sourced. It can be deployed on a Windows, Linux, or any other server technology. The entire mars project complies down to a simple JS server. However, we offer mars cloud hosting, which is the most convenient way of deploying mars apps." />

                <DropdownFAQ title="Security? GDPR?" body="Mars engine and micro-apps are built taking into account the best security practices. There are large corporations building their software on Mars that have run security audit trials to test the platform. When it comes to GDPR, all the data is stored and owned by the project. So you decide what to do with it. Mars supports all basic features of GDPR: delete the account, cookies, and secure storage of sensitive data. If there is anything around security or regulations that you aren't happy about, it is possible to modify the engine and platform to fit your needs. In fact, almost all Mars users modify the platform to suit their needs. This is the main advantage of Mars versus other platforms. Here you do not need to wait for the creators to fix an issue or add a feature. You can do it by switching to a CODE mode where you can use JS IDE to build your own project as well as modify anything in the engine itself right there. Extremely simple, extremely powerful." />

                <DropdownFAQ title="Why Mars is better than traditional coding(ReactJs, PHP and etc)?" body="Traditional programming technologies aren't suitable for building software on top of full-stack micro-apps. Developers can use libraries, however, the micro-apps are not the same as a library. The library can only focus on either data, backend or frontend. But it cannot focus on all of it at once. The Mars Micro-App goes far beyond a library. It combines the database, backend, frontend (native IOS, Android, Web), Admin pages, CMS, Analytics, and a lot more. So, on Mars developers can write code on top of the Micro-Apps such as Authentification, NFT marketplace, e-commerce marketplace, Social Network, and more. Are there libraries that can cover the entire domain as those mentioned above? NO. So using Mars can reduce the amount of code that developers need to write by up to 90%. Instead of writing 100.000 lines of code by 4 developers, 9 months. On Mars, the same project would typically be done by just 1 Martian in 3 months and 10.000 lines of code.?" />

                <DropdownFAQ title="Who builds MicroApps?" body="The Micro-Apps are built by external developers. These developers are building the Micro-Apps full-time. This is their primary source of income. So they are extremely motivated and strive for high quality to be popular among Mars projects. In contrast with the traditional opensource world, where most projects are done as hobbies and often developers lose their interest, in Mars, the micro-apps are bringing revenue for the creators. Most micro-apps are updated daily with new bug fixes and feature releases." />

                <DropdownFAQ title="What about flexibility and customization?" body="Any micro-app and entire Mars platform are extremely friendly to customization. We believe that the micro-app is just a default and that you need to customize the last 1% to have it exactly the way you want. Compared to the world of whitelabel solutions or libraries, where in most cases customization is a very complicated process and the creators usually assume that they have managed to make a perfect solution, We at Mars believe that innovation is the key and whatever has been built today might be an obsolete thing tomorrow. Based on this belief we've created our IDE that forces the micro apps to be built in a very similar manner, so that any developer that learned Mars, can pick any micro-app and easily dig into it and start modifying it and making it into their own." />

                <DropdownFAQ title="Is it an SDK, Framework, Language or?" body="Mars is ALL-IN-ONE developer platform with its own full-stack IDE that is one place for it all. Developer can build entire application in Mars IDE that covers all possible aspects: - JavaScript and optional TypeScript programming language - Very robust web-based IDE - Git Version Control - No-Code and High-Code interface in the IDE." />

                <DropdownFAQ title="Who owns the data?" body="All the data is stored in your database. Mars works with existing NO-SLQ and SQL databases as well as with table, blob, and file storage. You can connect your own Amazon account so that all data sits there. So it's just as private as what exists in the traditional world now." />

                <DropdownFAQ title="Where can I find Mars developers?" body="You can join our marketplace where Mars developers are open for new projects. Talk to us in the Live chat and we will guide you." />

                <DropdownFAQ title="What is Mars IDE" body="MarsIde (a.k. Mars IDE) is our own web IDE that is used to build in mars ecosystme." />

                <DropdownFAQ title="Who is founder of MarsX" body="John Rush is a founder of MarsX. Hist twitter: https://twitter.com/johnrushx" />
            </div>
        </div>


    </div>
  )
}

export default FAQ