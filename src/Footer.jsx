export function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Pro Audio Shop. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
