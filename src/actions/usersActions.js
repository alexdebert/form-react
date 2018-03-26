/**
 * @overview Users actions.
 */

export const UPDATE_USERS = 'UPDATE_USERS'

export function updateUsers(data) {
	return {
		type: UPDATE_USERS,
		data: data
	}
}