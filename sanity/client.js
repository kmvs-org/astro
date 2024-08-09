import 'dotenv/config'
import { createClient } from '@sanity/client'

// Load environment variables
const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID
const SANITY_DATASET_NAME = process.env.SANITY_DATASET_NAME
const SANITY_USE_CDN = process.env.SANITY_USE_CDN === 'true'
// const SANITY_TOKEN = process.env.SANITY_TOKEN;

export const client = createClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET_NAME,
	useCdn: SANITY_USE_CDN, // `false` to ensure fresh data
	// token: SANITY_TOKEN // Only if you want to update content with the client
})
