import { sanityClient as client } from 'sanity:client'

export async function getSeoDetails() {
	const seoDetails = await client.fetch(`
            *[_type == "siteDetails"]{
                title,
                tagline,
            }[0]
        `)
	return seoDetails
}

export async function getSocials() {
	const socials = await client.fetch(`
            *[_type == "siteDetails"]{
                instagram,
                twitter,
                facebook,
                linkedin,
                youtube,
            }[0]
        `)
	return socials
}

export async function getHeader() {
	const header = await client.fetch(`
        *[_type == "header"]{
            logo,
            "menuItems": menu[]{
            text,
            "subMenuItems": subMenu[]{
                    text,
                    link
                }
            }
        }[0]
    `)
	return header
}

export async function getFooter() {
	const footer = await client.fetch(`
        *[_type == "footer"]{
            logo,
            "menuItems": menu[]{
                text,
                link,
            }
        }[0]
    `)
	return footer
}

export async function getHomepage() {
	const homepage = await client.fetch(`
            *[_type == "homepage"]{
                image,
                tagline,
                about,
                impact[] {
                number,
                description,
                }
            }[0]
        `)
	return homepage
}

export async function getProgrammesShort() {
	const programmes = await client.fetch(`
            *[_type == "programme"]{
                title,
                image,
                excerpt,
            }
        `)
	return programmes
}

export async function getProgrammes() {
	const programmes = await client.fetch(`
            *[_type == "programme"]{
                title,
                image,
                excerpt,
                banner {
                	image,
					title,
					subtitle,
                },
                content,
            }
        `)
	return programmes
}

export async function getEventsShort() {
	const events = await client.fetch(`
            *[_type == "event"] | order(dates.start desc) [0...9] {
                title,
                image,
                excerpt,
            }
        `)
	return events
}

export async function getAddress() {
	const siteDetails = await client.fetch(
		`*[_type == "siteDetails"]{
            address,
        }[0]`,
	)
	return siteDetails.address
}
