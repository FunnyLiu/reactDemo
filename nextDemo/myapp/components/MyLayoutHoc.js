/**
 * A MyLayout HOC 
 */

import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const withLayout = Page => {
  return () => (
    <div style={layoutStyle}>
      <div>HOC LAYOUT</div>
      <Header />
      <Page />
    </div>
  )
}

export default withLayout