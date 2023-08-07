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

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const { pathname } = location;
  // List of routes for the scroll-to-top-hook
  const scrollToTopRoutes = [`/privacy-policy`, `/page-2`];
  // If the new route is part of the list above, scroll to top (0, 0)
  if (scrollToTopRoutes.includes(pathname)) {
    window.scrollTo(0, 0);
  }

  return false;
};
