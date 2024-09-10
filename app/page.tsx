import Head from "next/head";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>Deadlock Builds</title>
          <meta name="description" content="Deadlock Builds" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">My Website</h1>
          <nav className="mt-2">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="builds/create" className="hover:underline">
                  Create Build
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to My Homepage</h2>
          <p className="mb-4">Go create some builds</p>
        </main>

        <footer className="bg-gray-200 p-4 text-center">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
      </div>{" "}
    </div>
  );
}
