import { Metadata } from "next";

export const generateMetadata = ({
	title = `${process.env.NEXT_PUBLIC_APP_NAME} - The AI-Powered Blog generator Platform for Businesses`,
	description = `${process.env.NEXT_PUBLIC_APP_NAME} is the blog generator platform for content creator. It helps you build, brand, and track your content.`,
	image = "/thumbnail.png",
	icons = [
		{
			rel: "apple-touch-icon",
			sizes: "32x32",
			url: "/apple-touch-icon.png",
		},
		{
			rel: "icon",
			sizes: "32x32",
			url: "/favicon-32x32.png",
		},
		{
			rel: "icon",
			sizes: "16x16",
			url: "/favicon-16x16.png",
		},
	],
	noIndex = false,
}: {
	title?: string;
	description?: string;
	image?: string | null;
	icons?: Metadata["icons"];
	noIndex?: boolean;
} = {}): Metadata => ({
	title,
	description,
	icons,
	openGraph: {
		title,
		description,
		...(image && { images: [{ url: image }] }),
	},
	twitter: {
		title,
		description,
		...(image && { card: "summary_large_image", images: [image] }),
		creator: "@Anayat",
	},
	// metadataBase: new URL(process.env.APP_DOMAIN!),
	...(noIndex && { robots: { index: false, follow: false } }),
});