<template>
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header" class="modal-title">
          {{artwork.Artist[0]}}
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"
            @click="close"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
         <AttributeList :artwork="artwork" :departmentHeads="departmentHeads"/>
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            Information courtesy the Museum of Modern Art
            <button
              type="button"
              class="btn btn-secondary"
              @click="close"
            >
              Close
          </button>
        </slot>
      </footer>
    </div>
  </div>
</transition>
</template>

<script>
import AttributeList from '@/components/AttributeList';
export default {
  name: 'PhotographModal',
  components: { AttributeList },
  props: ['artwork', 'departmentHeads'],
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  height: 75vh;
  width: 75vw;
  margin: auto auto auto 20vw;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
  height: 10vh;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  font-family: inherit;
  font-size: 1.25rem;
  justify-content: space-between;
  align-items: center;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: space-between;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  font-family: inherit;
  font-size: 1.25rem;
  height: 55vh;
  line-height: 1.25rem;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}

.btn-green {
  color: white;
  border: 1px solid black;
  border-radius: 2px;
}
</style>