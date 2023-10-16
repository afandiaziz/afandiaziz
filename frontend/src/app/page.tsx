import Link from 'next/link';
import Image from 'next/image';

async function getData() {
    try {
        let data: any = {};
        data.profile = await fetch(`${process.env.API_URI}/profile`, {
            cache: 'no-cache'
        }).then(res => res.json()).then(({ data }) => data).catch(err => { throw new Error(err) });
        data.experiences = await fetch(`${process.env.API_URI}/experiences`, {
            cache: 'no-cache'
        }).then(res => res.json()).then(({ data }) => data.slice(0, 3)).catch(err => { throw new Error(err) });
        data.stacks = await fetch(`${process.env.API_URI}/stacks`, {
            cache: 'no-cache'
        }).then(res => res.json()).then(({ data }) => data).catch(err => { throw new Error(err) });
        return data;
    } catch (error) {
        throw new Error("Error fetching data: " + error);
    }
}

export default async function Dashboard() {
    const { profile, experiences } = await getData();
    return (
        <main className="container mx-auto lg:my-18 my-10 min-h-screen">
            <section className="mx-auto justify-center max-w-2xl my-10">
                <Image
                    src={profile.profilePictureUrl}
                    alt={profile.displayName}
                    width={90}
                    height={90}
                    className="rounded-lg"
                />
                <div className="mt-4">
                    <h1 className="capitalize text-4xl md:text-6xl tracking-wide font-bold sm:text-left">
                        {profile.displayName}
                    </h1>
                    <p className="text-xl sm:text-left mt-4 tracking-wider">
                        {profile.about}
                    </p>
                    <div className="flex mt-5">
                        <Link href={profile.resumeUrl} target='_blank'>
                            <div className="text-base transition group sm:text-left text-neutral-500 border-neutral-600 border-opacity-70 border rounded-full px-5 py-2 flex gap-3 hover:font-semibold hover:text-white hover:border-opacity-80 hover:bg-zinc-800 hover:drop-shadow-2xl">
                                <div>
                                    Download Resume
                                </div>
                                <div className='group-hover:stroke-white stroke-neutral-600'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                                        <path d="M9 15h-2"></path>
                                        <path d="M13 12h-6"></path>
                                        <path d="M11 9h-4"></path>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="mx-auto justify-center max-w-2xl my-10" id="experiences">
                <div className="mb-6 sm:text-3xl font-medium flex items-center gap-4">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-slate-300 to-zinc to-60%">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
                            <path d="M12 12l0 .01"></path>
                            <path d="M3 13a20 20 0 0 0 18 0"></path>
                        </svg>
                    </div>
                    <h2>
                        Experiences
                    </h2>
                </div>
                <div className="flex flex-col md:gap-6">
                    {
                        experiences.map((experience: any, index: number) => {
                            return (
                                experiences[index + 1]?.company.id == experience.company.id ? (
                                    <>
                                        <div className={`items-center flex relative gap-4 [&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:w-[2px] [&:not(:last-child)]:before:h-calc [&:not(:last-child)]:before:bg-slate-300 [&:not(:last-child)]:before:left-[27px] [&:not(:last-child)]:before:-top-[24px] [&:not(:last-child)]:before:z-0`} key={index}>
                                            <div className='rounded-lg p-1 bg-white border z-10 flex-none'>
                                                <img src={experience.company.logoUrl} alt={experience.companyName} width={45} className='rounded-lg' />
                                            </div>
                                            <div className=''>
                                                <h3 className='text-xl font-semibold'>
                                                    {experience.company.name}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className={`items-start flex relative gap-4 [&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:w-[2px] [&:not(:last-child)]:before:h-calc [&:not(:last-child)]:before:bg-slate-300 [&:not(:last-child)]:before:left-[27px] [&:not(:last-child)]:before:-top-[24px] [&:not(:last-child)]:before:z-0`} key={index}>
                                            <div className='px-3 z-10 bg-zinc-100'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" strokeWidth="0" fill="currentColor" className='fill-slate-400'></path>
                                                </svg>
                                            </div>
                                            <div className=''>
                                                <p className='text-base'>
                                                    {experience.title}
                                                    <br />
                                                    {new Date(experience.startDate).toLocaleDateString("en-US", {
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                    &nbsp;—&nbsp;
                                                    {new Date(experience.endDate).toLocaleDateString("en-US", {
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </p>
                                                <div className='text-base text-neutral-500' dangerouslySetInnerHTML={{ __html: experience.description.replaceAll("\n", "<br />") }} />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={`items-start flex relative gap-4 [&:not(:last-child)]:before:content-[''] [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:w-[2px] [&:not(:last-child)]:before:h-calc [&:not(:last-child)]:before:bg-slate-300 [&:not(:last-child)]:before:left-[27px] [&:not(:last-child)]:before:-top-[24px] [&:not(:last-child)]:before:z-0`} key={index}>
                                            {!experiences[index - 1] || experiences[index - 1]?.company.id != experience.company.id ? (
                                                <div className='rounded-lg p-1 bg-white border z-10 flex-none'>
                                                    <img src={experience.company.logoUrl} alt={experience.companyName} width={45} className='rounded-lg' />
                                                </div>
                                            ) : (
                                                <div className='px-3 z-10 bg-zinc-100'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" strokeWidth="0" fill="currentColor" className='fill-slate-400'></path>
                                                    </svg>
                                                </div>
                                            )}
                                            <div className=''>
                                                {experiences[index + 1]?.company.id != experience.company.id && experiences[index - 1]?.company.id != experience.company.id && (
                                                    <h3 className='text-xl font-semibold'>
                                                        {experience.company.name}
                                                    </h3>
                                                )}
                                                <p className='text-base'>
                                                    {experience.title}
                                                    <br />
                                                    {new Date(experience.startDate).toLocaleDateString("en-US", {
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                    &nbsp;—&nbsp;
                                                    {new Date(experience.endDate).toLocaleDateString("en-US", {
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </p>
                                                <div className='text-base text-neutral-500' dangerouslySetInnerHTML={{ __html: experience.description.replaceAll("\n", "<br />") }} />
                                            </div>
                                        </div>
                                    </>
                                )
                            )
                        })
                    }
                </div>
                <div className="mt-5">
                    <Link href={profile.resumeUrl} target='_blank'>
                        <div className="text-base transition group sm:text-left text-neutral-500 border-neutral-600 border-opacity-70 border rounded-full px-5 py-2 flex gap-3 hover:font-semibold hover:text-white hover:border-opacity-80 hover:bg-zinc-800 hover:drop-shadow-2xl">
                            <div>
                                View All
                            </div>
                            <div className='ms-auto group-hover:translate-x-1 transition group-hover:stroke-white stroke-neutral-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 12l14 0"></path>
                                    <path d="M13 18l6 -6"></path>
                                    <path d="M13 6l6 6"></path>
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
            <section className="mx-auto justify-center max-w-2xl my-10" id="education">
                <div className="mb-6 sm:text-3xl font-medium flex items-center gap-4">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-slate-300 to-zinc to-60%">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                            <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                            <path d="M3 6l0 13"></path>
                            <path d="M12 6l0 13"></path>
                            <path d="M21 6l0 13"></path>
                        </svg>
                    </div>
                    <h2>
                        Education
                    </h2>
                </div>
                <div className="flex flex-col md:gap-6">

                </div>
            </section>
            <section className="mx-auto justify-center max-w-2xl my-10" id="tech-stacks">
                <div className="mb-6 sm:text-3xl font-medium flex items-center gap-4">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-slate-300 to-zinc to-60%">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M8.5 13.5l-1.5 -1.5l1.5 -1.5"></path>
                            <path d="M15.5 10.5l1.5 1.5l-1.5 1.5"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M13 9.5l-2 5.5"></path>
                        </svg>
                    </div>
                    <h2>
                        Tech Stacks
                    </h2>
                </div>
                <div className="flex flex-col md:gap-6">

                </div>
            </section>
            <section className="mx-auto justify-center max-w-2xl my-10" id="projects">
                <div className="mb-6 sm:text-3xl font-medium flex items-center gap-4">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-slate-300 to-zinc to-60%">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 17l9 5l9 -5v-3l-9 5l-9 -5v-3l9 5l9 -5v-3l-9 5l-9 -5l9 -5l5.418 3.01"></path>
                        </svg>
                    </div>
                    <h2>
                        Projects
                    </h2>
                </div>
                <div className="flex flex-col md:gap-6">

                </div>
            </section>
        </main >
    )
}
