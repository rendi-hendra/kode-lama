import { Client } from "twitter-api-sdk";

const bearerToken =
  "AAAAAAAAAAAAAAAAAAAAALCciwEAAAAA8WsRhw65lCImZJleR0do0D3arF4%3Do1XjoicbkxZe5qki95nwlJ8tmazF6s1EiFrQaewQ2f94C7bvU4";
const client = new Client(bearerToken);

async function main() {
  const tweet = await client.tweets.findTweetById("1588013953111961600");
  console.log(tweet.data.text);
}

main();
