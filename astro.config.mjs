import { defineConfig } from 'astro/config'
import { h } from 'hastscript'
import { transformerNotationHighlight } from '@shikijs/transformers'

const transformerCopyButton = () => {
  return {
    name: 'shiki-transformer-copy-button',
    pre (node) {
      const button = h('button', {
        class: 'copy',
        'data-code': this.source,
        onclick: `
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add('copied');
          setTimeout(() => this.classList.remove('copied'), 2000);
        `
      }, [
        h('span', { class: 'ready' }),
        h('span', { class: 'success' })
      ])

      node.children.push(button)
    }
  }
}

export default defineConfig({
  site: 'https://astronaut.github.io',
  markdown: {
    shikiConfig: {
      theme: 'catppuccin-frappe',
      transformers: [
        transformerNotationHighlight(),
        transformerCopyButton()
      ]
    }
  }
})
