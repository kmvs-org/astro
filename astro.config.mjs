import { defineConfig } from 'astro/config'

import sanity from '@sanity/astro'

// https://astro.build/config
export default defineConfig({
	integrations: [sanity({
		projectId: 'k53lfb44',
		dataset: 'production',
		// Set useCdn to false if you're building statically.
		useCdn: false
	})]
})