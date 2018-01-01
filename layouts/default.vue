<template>
  <div :class="[ $route.name, !isOnline ? 'is-offline' : '', 'u-overflowHidden' ]">
    <main>
      <nuxt/>
    </main>
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        isOnline: true
      }
    },
    mounted () {
      window.addEventListener('load', () => {
        window.addEventListener('online', () => { this.isOnline = true })
        window.addEventListener('offline', () => { this.isOnline = false })
      })
    }
  }
</script>

<style lang="scss">
  @import '../assets/styles/fonts.scss';
  @import '../assets/styles/mixins.scss';
  @import '../assets/styles/objects.scss';
  @import '../assets/styles/animations.scss';
  @import '../assets/styles/util.scss';

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }

  body {
    --white: #ffffff;
    --peacock: #0e314c;
    --redapple: #e54b4b;
    --smoke: #8f9196;
    --fox: #e65b2f;
    --grass: #5fb287;
    --lake: #5cb2d3;
    --baseline: 1.5rem;
    --h1: 2rem;
    --h2: 1.5rem;
    --h3: 1.25rem;
    --h4: 1rem;
    --marginSmall: .5rem;
    --marginNormal: 1rem;
    --marginLarge: 2rem;

    color: var(--peacock);
    font-family: -apple-system, BlinkMacSystemFont,'VarelaRound-Regular', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji';
    -webkit-font-smoothing: antialiased;

    line-height: var(--baseline);

    background-color: var(--white);

    @include fluid-type(20rem, 50rem, .9rem, 1.125rem);
  }

  p {
    line-height: var(--baseline);
    margin-bottom: var(--baseline);
  }

  a {
    color: var(--peacock);
    text-decoration-skip: ink;

    &:hover,
    &:active {
      color: var(--redapple);
    }
  }


  ul, ol {
    padding-left: var(--marginNormal);
    margin-bottom: var(--baseline);

    ul, ol {
      margin-bottom: 0
    }
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 700;
    margin-bottom: var(--baseline);
  }

  h1 {
    font-size: var(--h1);
    line-height: var(--h1) + .5;
    margin-top: (var(--baseline) - var(--h1)) + var(--baseline);
  }


  h2 {
    font-size: var(--h2);
    line-height: var(--h2) + .5;
    margin-top: calc((var(--baseline) - var(--h2)) + var(--baseline) * 2);
  }


  h3 {
    font-size: var(--h3);
    line-height: var(--h3) + .5;
    margin-top: calc((var(--baseline) - var(--h3)) + var(--baseline) * 2);
  }

  h4 {
    font-size: var(--h4);
    line-height: var(--h4) + .5;
    margin-top: calc((var(--baseline) - var(--h4)) + var(--baseline) * 2);
  }

  img {
    max-width: 100%;
  }

  blockquote {
    color: var(--smoke);
    padding: var(--marginSmall) var(--marginNormal);
    margin-bottom: var(--baseline);
    border-left: 3px solid var(--smoke);
    font-style: italic;

    p {
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
</style>
