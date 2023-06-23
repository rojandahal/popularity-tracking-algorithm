// Description: Calculate weighted average of each key in an object

// Event values for each provider
const counts = {
	"provider_1": {
		"num_of_review": 10,
		"average_rating": 4.5,
		"profile_views": 100,
		'favorites': 5,
		"share_link": 2,
		"share_email": 0,
		"share_facebook": 2,
		"share_twitter": 9,
		"share_instagram": 7,
		"share_whatsapp": 0,
		"share_viber": 0,
		"call": 5,
	},
	"provider_2": {
		"num_of_review": 8,
		"average_rating": 4,
		"profile_views": 121,
		'favorites': 8,
		"share_link": 3,
		"share_email": 0,
		"share_facebook": 2,
		"share_twitter": 9,
		"share_instagram": 7,
		"share_whatsapp": 0,
		"share_viber": 0,
		"call": 2,
	},
}

// Weight of each metric/key (sum of all weights should be 1)
const weight = {
	"num_of_review": 0.2,
	"average_rating": 0.25,
	"profile_views": 0.05,
	"favorites": 0.1,
	"share_link": 0.05,
	"share_email": 0.05,
	"share_facebook": 0.05,
	"share_twitter": 0.05,
	"share_instagram": 0.05,
	"share_whatsapp": 0.05,
	"share_viber": 0.05,
	"call": 0.05
	}

calculateWeightedAverage(counts);

// Function to calculate weighted average
function calculateWeightedAverage(counts) {
	//Convert object to array
	const arr = Object.entries(counts);
	//Loop through array and calculate for each key
	const sum = arr.map((value) => {
		const [key, valueObj] = value;
		// console.log(value)
		// Loop through each object and calculate weighted average
		const sum = Object.entries(valueObj).reduce((acc, [key, value]) => {
			console.log(key, value)
			return acc + value * weight[key];
		}
		, 0);
		return [key, sum];
	});
	console.log(sum)
}