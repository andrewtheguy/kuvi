import './App.css'

const projects = [
  {
    name: 'QR Secure Share',
    subdomain: 'qrsecure',
    description: 'A progressive web app for QR-based offline file transfer and text QR generation. Share files between devices with no internet required.',
    github: 'https://github.com/andrewtheguy/qrcodesecureshare',
  },
  {
    name: 'Secure Send',
    subdomain: 'securesend',
    description: 'A progressive web app for encrypted P2P text and file transfer. PIN-based security with WebRTC direct connections and cloud fallback.',
    github: 'https://github.com/andrewtheguy/secure-send-web',
  },
  {
    name: 'NostrPad',
    subdomain: 'nostrpad',
    description: 'Simple shared notepad powered by Nostr relays. Create a pad, share the link, collaborate in real-time.',
    github: 'https://github.com/andrewtheguy/nostrpad',
  },
  {
    name: 'Audio Player',
    subdomain: 'audioplayer',
    description: 'Web-based audio player with HLS streaming support. Play .m3u8 streams with playback position memory.',
    github: 'https://github.com/andrewtheguy/audioplayer',
  },
  {
    name: 'Transmitwave',
    subdomain: 'transmitwave',
    description: 'Data-over-sound transmission using FSK modulation. Send data via audio between devices.',
    github: 'https://github.com/andrewtheguy/transmitwave',
  },
]

function App() {
  return (
    <div className="portal">
      <header className="header">
        <h1>kuvi.app</h1>
        <p className="tagline">Open source web apps that run entirely in your browser — no backend hosting required</p>
      </header>

      <main className="projects">
        {projects.map((project) => (
          <div key={project.subdomain} className="card">
            <a
              href={`https://${project.subdomain}.kuvi.app`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-title"
            >
              <h2>{project.name}</h2>
            </a>
            <p>{project.description}</p>
            <div className="card-links">
              <a
                href={`https://${project.subdomain}.kuvi.app`}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {project.subdomain}.kuvi.app
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </main>

      <footer className="footer">
        <p>Static sites powered by your browser and free public services. Open source.</p>
      </footer>
    </div>
  )
}

export default App
