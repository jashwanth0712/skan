import { buttonVariants } from "@/components/ui_copy/button";
import { Calendar } from "@/components/ui/calendar";
import { Command } from "@/components/ui/command";
import { cn } from "@/utils";
import {
	ArrowRightIcon,
	CalendarIcon,
	Link2Icon,
	SearchIcon,
	WaypointsIcon,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./card";
import { Input } from "./input";
import { Integrations } from "./integrations";
import { Label } from "./label";

export const CARDS = [
	{
		Icon: Link2Icon,
		name: "Blog posts",
		description: "Create blog posts that are easy to remember and share.",
		href: "#",
		cta: "Learn more",
		className: "col-span-3 lg:col-span-1",
		background: (
			<Card className="absolute top-10 left-10 origin-top rounded-none rounded-tl-md border border-border border-r-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105">
				<CardHeader>
					<CardTitle>Create blog posts</CardTitle>
					<CardDescription>
						Create blog posts that are easy to remember and share.
					</CardDescription>
				</CardHeader>
				<CardContent className="-mt-4">
					<Label>export your posts</Label>
					<Input
						type="text"
						placeholder="export your blog posts..."
						className="w-full focus-visible:ring-0 focus-visible:ring-transparent"
					/>
				</CardContent>
			</Card>
		),
	},
	{
		Icon: SearchIcon,
		name: "Search your blogs",
		description:
			"Quickly generate the blog posts you need with AI-powered search.",
		href: "#",
		cta: "Learn more",
		className: "col-span-3 lg:col-span-2",
		background: (
			<Command className="group-hover:-translate-x-10 absolute top-10 right-10 w-[70%] origin-to translate-x-0 border border-border p-2 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
				<Input placeholder="Type to search..." />
				<div className="mt-1 cursor-pointer">
					<div className="rounded-md px-4 py-2 hover:bg-muted">
						Writora.xyz/hdf00c
					</div>
					<div className="rounded-md px-4 py-2 hover:bg-muted">
						Writora.xyz/sdv0n0
					</div>
					<div className="rounded-md px-4 py-2 hover:bg-muted">
						Writora.xyz/03gndo
					</div>
					<div className="rounded-md px-4 py-2 hover:bg-muted">
						Writora.xyz/09vmmw
					</div>
					<div className="rounded-md px-4 py-2 hover:bg-muted">
						Writora.xyz/s09vws
					</div>
					<div className="rounded-md px-4 py-2 hover:bg-muted">
						Writora.xyz/sd8fv5
					</div>
				</div>
			</Command>
		),
	},
	{
		Icon: WaypointsIcon,
		name: "Connect your apps",
		description: "Integrate with your favorite apps and services.",
		href: "#",
		cta: "Learn more",
		className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
		background: (
			<Integrations className="absolute top-4 right-2 h-[300px] w-[600px] border-none pl-28 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 md:pl-0" />
		),
	},
	{
		Icon: CalendarIcon,
		name: "Calendar",
		description: "Keep track of your blog posts with our calendar view.",
		className: "col-span-3 lg:col-span-1",
		href: "#",
		cta: "Learn more",
		background: (
			<Calendar
				mode="single"
				selected={new Date(2022, 4, 11, 0, 0, 0)}
				className="absolute top-10 right-0 origin-top rounded-md border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
			/>
		),
	},
];

const BentoGrid = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
				className,
			)}
		>
			{children}
		</div>
	);
};

const BentoCard = ({
	name,
	className,
	background,
	Icon,
	description,
	href,
	cta,
}: {
	name: string;
	className: string;
	background: ReactNode;
	Icon: any;
	description: string;
	href: string;
	cta: string;
}) => (
	<div
		key={name}
		className={cn(
			"group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl border border-border/60",
			"bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
			className,
		)}
	>
		<div>{background}</div>
		<div className="group-hover:-translate-y-10 pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300">
			<Icon className="h-12 w-12 origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
			<h3 className="font-semibold text-neutral-300 text-xl">{name}</h3>
			<p className="max-w-lg text-neutral-400">{description}</p>
		</div>

		<div
			className={cn(
				"absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
			)}
		>
			<Link
				href={href}
				className={buttonVariants({
					size: "sm",
					variant: "ghost",
					className: "cursor-pointer",
				})}
			>
				{cta}
				<ArrowRightIcon className="ml-2 h-4 w-4" />
			</Link>
		</div>
		<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
	</div>
);

export { BentoCard, BentoGrid };