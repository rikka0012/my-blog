// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	XiaoMi: [
		{
			name: "RedMi K80",
			image: "/images/device/Redmi.webp",
			specs: "汐月蓝 / 256 + 12",
			description: "日用手机，已解",
			link: "https://www.mi.com/prod/redmi-k80",
		},
	],
	ASUS: [
		{
			name: "ASUS TX Gaming FX608JMR",
			image: "/images/device/asus.webp",
			specs: "NVIDIA® GeForce RTX™ 5060 Laptop GPU,8GB\n英特尔® 酷睿™ i7-14650HX 处理器",
			description:
				"个人用游戏本",
			link: "https://www.asus.com.cn/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-f16-2025/techspec/",
		},
	],
};
