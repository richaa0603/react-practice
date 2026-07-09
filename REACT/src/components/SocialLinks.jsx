const links = [
  { label: 'GitHub', url: 'https://github.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com' },
  { label: 'Twitter / X', url: 'https://twitter.com' },
]

function SocialLinks() {
  return (
    <section id="social" className="section">
      <h2 className="section-title">Social Links</h2>
      <div className="social-links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default SocialLinks
