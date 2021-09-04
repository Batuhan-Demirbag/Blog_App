<template>
    <div class="home">
        <div v-if="hatalar">
            {{hatalar}}
        </div>

        <div v-else-if="makaleler.length">
            <MakaleListesi :makaleler="makaleler" />
        </div>

        <div v-else>
            Belgeler Yükleniyor...
        </div>
        
    </div>
</template>


<script>
import MakaleListesi from '../components/MakaleListesi';
import makalelerGetir from '../composables/makalelerGetir';

export default{

    name: 'Home',
    components: {
        MakaleListesi
    },

    setup(){
        const {makaleler,hatalar,makaleListesiniYukle}=makalelerGetir();
        
        
        makaleListesiYukle();

        return {makaleler,hatalar}
    }

}

</script>


<style>



</style>