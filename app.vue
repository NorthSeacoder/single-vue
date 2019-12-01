<template>
    <div class="container-wide">
        <b-layout>
            <div slot="content">
                <div class="center-block">
                    <coures/>
                </div>
            </div>
        </b-layout>
        
    </div>
</template>

<script>
import Coures from './components/fm-coures';
export default {
    name: 'App',
    components: {
        Coures,
    },
    data() {
        return {
            
        };
    },


};

</script>
