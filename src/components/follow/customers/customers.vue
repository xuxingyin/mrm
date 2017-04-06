<template>
	<box title="客户构成">
		<span slot=""></span>
	</box>
</template>

<script>
import box from 'components/follow/box/box'

export default {
	data() {
		return {
			item: {
				title: {
					name: '客户构成',
					more: true
				}
			}
		}
	},
	components: {
		box
	}
}
</script>

<style lang='stylus' scoped>
</style>