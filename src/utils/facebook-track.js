export default function facebookTrack(a,b) {
    if (process.env.NODE_ENV === `production` && typeof fbq === `function`) {
      // eslint-disable-next-line no-undef
      fbq(a, b);
    }
}
