<template>
     <div class="card">
        <div class="card-header">En que estas pensando ahora ...</div>

        <div class="card-body">
            <form action="" v-on:submit.prevent="newThought()">
                <div class="form-group">
                    <label for="thought">Ahora estoy pensando en: </label>
                    <input type="text" class="form-control" name="thought" v-model="description">
                </div>
                <button type="submit" class="btn btn-sm btn-primary">
                    Guardar
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
    	data(){
    		return {
    			description: ''
    		}
    	},
        mounted() {
            console.log('Component mounted.')
        },
        methods:{
        	newThought() {
				let thought = {
					id:2,
					description: this.description,
					created_at: '11/11/2011'
				};
        		this.$emit('new',thought);
        		this.description = '';
        	}
        }
    }
</script>
