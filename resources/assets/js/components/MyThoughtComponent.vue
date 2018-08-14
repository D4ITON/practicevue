<template>
     <div class="row justify-content-center">
        <div class="col-md-8">
            
            <form-component @new="addThought"></form-component>

            <thought-component 
                v-for="(thought, index) in thoughts" 
                :key="thought.id"
                :thought="thought"
                @update="updateThought(index, ...arguments)"
                @delete="deleteThought(index)">
            </thought-component>

            
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                thoughts: [{
                    'id': 1,
                    'description': 'abc',
                    'created_at': '14/08/2018'
                }]
            };
        },

        mounted() {
            console.log('Component mounted.')
        },
        methods:{
            addThought(thought){
                this.thoughts.push(thought);
            },
            updateThought(index, thought){
                this.thoughts[index] = thought;
            },
            deleteThought(index){
                this.thoughts.splice(index, 1);
            }
        }
    }
</script>

<!-- agregacion de 1 pensamiento 23:10 -->
<!-- eliminacion de pensamientos 33:45 -->