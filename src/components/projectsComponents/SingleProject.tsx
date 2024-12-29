"use client"
const SingleProject = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <main className="flex  justify-center w-full m-auto bg-gray-900 min-h-screen relative overflow-visible">
            <div className="w-full z-10 justify-center flex px-4 py-8">
                {children}
            </div>
        </main>
    )
}

export default SingleProject