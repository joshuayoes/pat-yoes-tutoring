import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => ({
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "h1": {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
    }
});

Wordpress2016.googleFonts = [{
  name: "Open Sans",
  styles: [
    '700',
    '300'
  ]
}];
Wordpress2016.headerFontFamily = ['Open Sans', 'sans-serif'];
Wordpress2016.bodyFontFamily = ['Open Sans', 'sans-serif'];

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
