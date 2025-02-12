export const POSTS = [
	{
		_id: "1",
		text: "Let's build a fullstack WhatsApp clone 😍",
		img: "/posts/post1.png",
		user: {
			username: "duongbui",
			profileImg: "/avatars/girl3.png",
			fullName: "Duong Bui",
		},
		comments: [
			{
				_id: "1",
				text: "Nice Tutorial",
				user: {
					username: "khanhlinh",
					profileImg: "/avatars/girl1.png",
					fullName: "Khanh Linh",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},
	{
		_id: "2",
		text: "How you guys doing? 😊",
		user: {
			username: "duongbui",
			profileImg: "/avatars/girl3.png",
			fullName: "Duong Bui",
		},
		comments: [
			{
				_id: "1",
				text: "Very good",
				user: {
					username: "tuyetmai",
					profileImg: "/avatars/girl2.png",
					fullName: "Tuyet Mai",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},
	{
		_id: "3",
		text: "Astronaut in a room of drawers, generated by Midjourney. 🚀",
		img: "/posts/post2.png",
		user: {
			username: "duongbui",
			profileImg: "/avatars/girl3.png",
			fullName: "Duong Bui",
		},
		comments: [],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894", "6658s895", "6658s896"],
	},
	{
		_id: "4",
		text: "I'm learning GO this week. Any tips? 🤔",
		img: "/posts/post3.png",
		user: {
			username: "duongbui",
			profileImg: "/avatars/girl3.png",
			fullName: "Duong Bui",
		},
		comments: [
			{
				_id: "1",
				text: "What Youtube",
				user: {
					username: "khanhlinh",
					profileImg: "/avatars/girl1.png",
					fullName: "Khanh Linh",
				},
			},
		],
		likes: [
			"6658s891",
			"6658s892",
			"6658s893",
			"6658s894",
			"6658s895",
			"6658s896",
			"6658s897",
			"6658s898",
			"6658s899",
		],
	},
];

export const USERS_FOR_RIGHT_PANEL = [
	{
		_id: "1",
		fullName: "Minh Duc",
		username: "minhduc",
		profileImg: "/avatars/boy2.png",
	},
	{
		_id: "2",
		fullName: "Khanh Linh",
		username: "khanhlinh",
		profileImg: "/avatars/girl1.png",
	},
	{
		_id: "3",
		fullName: "Tam Nguyen",
		username: "tamtit",
		profileImg: "/avatars/boy3.png",
	},
	{
		_id: "4",
		fullName: "Tuyet Mai",
		username: "tuyetmai",
		profileImg: "/avatars/girl2.png",
	},
];