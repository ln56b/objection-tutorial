/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	await knex.raw('TRUNCATE TABLE "user" CASCADE')
	await knex.raw('TRUNCATE TABLE "channel" CASCADE')
	await knex.raw('TRUNCATE TABLE "video" CASCADE')

	await knex("channel").insert([
		{
			id: 1,
			name: "Channel 1"
		},
		{
			id: 2,
			name: "Channel 2"
		}
	])

	await knex("user").insert([
		{
			id: 1,
			name: "User 1",
			channelId: 1
		},
		{
			id: 2,
			name: "User 2",
			channelId: 2
		},
		{
			id: 3,
			name: "User 3"
		}
	])

	return knex("video").insert([
		{
			id: 1,
			title: "Video 1 by user 1",
			channelId: 1
		},
		{
			id: 2,
			title: "Video 2 by user 1",
			channelId: 1
		},
		{
			id: 3,
			title: "Video 3 by user 2",
			channelId: 2
		}
	])
}
