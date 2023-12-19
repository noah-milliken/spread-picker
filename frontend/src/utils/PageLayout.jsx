
// eslint-disable-next-line react/prop-types
const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">

    <div className="page-layout__content">{children}</div>

  </div>
  )
}

export default PageLayout