/** @jsx jsx */
import { Styled, jsx , Flex } from "theme-ui"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <Styled.root>
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 1280,
          padding: [0,0,0,3],
          paddingTop: [0,0,0,3],
          marginTop:[0,0,0,3],
          marginBottom:[0,0,0,3],
          border: '2px solid #000000',
          boxShadow:'5px 6px 0px #000000'
        }}
      >
        <Flex
      as="nav"
      sx={{
        justifyContent: "space-between",
        flexDirection: "row",
        bg: "background",
      }}
    >
      <div sx={{ alignItems: "flex-start" }}>
      <Link sx={{ p:[3,2,2,2], fontSize: [1, 3, 4], ":hover": { color: "purple.9" }, color:'black ' , textDecoration:'none', fontWeight:'bold'}}
 to='/'>home
      </Link>
      </div>
      <div sx={{ alignItems: "flex-end" }}>
      <Link sx={{ 
        p: 2, fontSize: [1, 3, 4], 
        ":hover": { color: "purple.9" },
         color:'black ' , 
         textDecoration:'none',
          fontWeight:'bold'}}
          to='/resume/'>
            resume
      </Link>
      </div>
    </Flex>
        <main>{children}</main>
        <footer sx={{maxWidth:['90%','90%','50%','50%'],margin:'0 auto',pt:'20px', color:'purple.9', fontWeight:700,fontSize:[2,2,3,3] }}>
          <Styled.p>
           Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>{` `} by me
          </Styled.p>
        </footer>
      </div>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
