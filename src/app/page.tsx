import Link from 'next/link';
import Image from 'next/image';

async function getProfile() {
    const res = await fetch(`${process.env.API_URI}/profile`, {
        cache: 'no-cache'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Dashboard() {
    const profile = await getProfile();
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
                            <div className="text-base sm:text-left text-gray-500 border-gray-600 border-opacity-70 border rounded-full px-5 py-2 flex gap-3 hover:font-bold hover:text-zinc-800 hover:border-opacity-80 hover:border-zinc-800 hover:stroke-zinc-800 hover:drop-shadow-2xl stroke-gray-600">
                                <div>
                                    Download Resume
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                                    <path d="M9 15h-2"></path>
                                    <path d="M13 12h-6"></path>
                                    <path d="M11 9h-4"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="mx-auto justify-center max-w-2xl" id="experience">
                <h2 className="mb-6 sm:text-3xl">Experiences</h2>
                <div className="flex flex-col md:gap-6">

                </div>
            </section>
        </main>
    )
}
