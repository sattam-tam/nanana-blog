import type {
		ExpressiveCodeConfig,
		LicenseConfig,
		NavBarConfig,
		ProfileConfig,
		SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
		title: "ゆるっと家計管理",
		subtitle: "楽しく4コマブログ",
		lang: "ja",
		themeColor: {
					hue: 170, // ミントグリーン
					fixed: true,
		},
		banner: {
					enable: false,
					src: "assets/images/demo-banner.png",
					position: "center",
					credit: {
									enable: false,
									text: "",
									url: "",
					},
		},
		toc: {
					enable: true,
					depth: 2,
		},
		favicon: [],
};

export const navBarConfig: NavBarConfig = {
		links: [
					LinkPreset.Home,
					LinkPreset.Archive,
					LinkPreset.About,
				],
};

export const profileConfig: ProfileConfig = {
		avatar: "assets/images/demo-avatar.png",
		name: "さっちゃん",
		bio: "家計管理が苦手な主婦が4コマ漫画でお金のことをゆる〜く発信中🌿",
		links: [],
};

export const licenseConfig: LicenseConfig = {
		enable: false,
		name: "CC BY-NC-SA 4.0",
		url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
		theme: "github-dark",
};
