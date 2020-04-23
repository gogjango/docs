import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <title>Gjango</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to <a href="/">Gjango</a>
      </h1>

      <p className="description">
        Get started
      </p>

      <div className="grid">
        <a href="/" className="card">
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Gjango features and API.</p>
        </a>

        <a href="/" className="card">
          <h3>Learn &rarr;</h3>
          <p>Learn about Gjango in an interactive course with quizzes!</p>
        </a>

        <a
          href="/"
          className="card"
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Gjango projects.</p>
        </a>

        <a
          href="/"
          className="card"
        >
          <h3>Deploy &rarr;</h3>
          <p>
            Instantly deploy your Gjango site.
          </p>
        </a>
      </div>
    </main>

    <footer>
      <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a>
    </footer>

  </div>
)

export default Home
