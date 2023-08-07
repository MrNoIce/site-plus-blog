// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import 'lazysizes'
import "prismjs/themes/prism.css"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
    `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

export const shouldUpdateScroll = ({ routerProps }) => {
  const { prevRouterProps } = routerProps
  if (prevRouterProps) {
    // Scroll to the top when navigating to the next blog-post
    const isSamePath = prevRouterProps.location.pathname === routerProps.location.pathname
    if (!isSamePath) {
      return [0, 0]
    }
  }
  return true
};
