---
title: Inception
subTitle: Gatsby Site with MDX blog pages
category: "software development"
coverPhoto: SiteCode.jpg
path: "/Profile"
group: posts
date: "2021-01-16"
template: blog-post.js
tech: [" Gatsby ", "React ", "GraphQl ", " Material-UI ", " MDX " ]
isPublished: true
description: Jake Scott's blog page about the page in which the site is built in; built with Gatsby
---

One of my favorite things I learned about when building this site is the ability to add components directly into markdown pages with MDXProvider.

```js
return (
    <>
      <Helmet>
        <html lang={"en"} />
        <style type="text/css">{""}</style>
        <body className={""} />
      </Helmet>

      <div className="viewport">
        <div className="viewport-top">
          <Header
            siteTitle={data.site.siteMetadata.title}
            siteDescription={data.site.siteMetadata.description}
          />
          <div className="site-main">
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
          </div>
        </div>
        <footer>
          <Bio />
        </footer>
      </div>
    </>
  )

```

This site is built with Gatsby. A React-based, GraphQL powered, static site generator. It uses powerful preconfiguration to build a website that uses only static files for incredibly fast page loads, service workers, code splitting, server-side rendering, intelligent image loading, asset optimization, and data prefetching. I chose Gatsby so I could learn something new and get some experience with GraphQl.

You can find the github repo [here](https://github.com/MrNoIce/projectsite)