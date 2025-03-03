const Footer = () => {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <footer className="bg-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            &copy; {new Date().getFullYear()} 💎YoungInvest. All rights reserved.
          </p>
        </div>
      </footer>
    </footer>
  )
}

export default Footer;