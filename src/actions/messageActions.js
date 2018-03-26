/**
 * @overview Message actions.
 */

export const SHOW_MESSAGE = 'SHOW_MESSAGE'

export function showMessage(data) {
	return {
		type: SHOW_MESSAGE,
		data: data
	}
}