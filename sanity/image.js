import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Aa simple function that gives the builder an image and returns
// the builder for you to specify additional parameters:
export function sanityUrl(source) {
	return builder.image(source)
}
